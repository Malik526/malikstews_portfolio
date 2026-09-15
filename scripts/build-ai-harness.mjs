/**
 * build-ai-harness.mjs
 * Packages the public-safe subset of the local ~/.agents global policy files
 * into free-stuff/ai-harness/package/, zips them (with the public README)
 * into free-stuff/ai-harness/dist/malik-ai-harness-v1.zip, and copies that
 * zip into public/downloads/ai-harness/ so the built site can serve it.
 *
 * ~/.agents only exists on this machine, not on a CI/deploy server, so the
 * public/downloads/ copy must be committed — it's what production actually
 * serves. Re-run this script and commit the result whenever ~/.agents changes.
 *
 * ~/.agents remains the source of truth. This script never copies it
 * wholesale — only the explicit allowlist below. Run with:
 *   npm run build:ai-harness
 */

import { existsSync, readFileSync, writeFileSync, copyFileSync, rmSync, mkdirSync, createWriteStream } from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";
import { ZipArchive } from "archiver";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const RESOURCE_DIR = path.join(REPO_ROOT, "free-stuff", "ai-harness");
const PACKAGE_DIR = path.join(RESOURCE_DIR, "package");
const DIST_DIR = path.join(RESOURCE_DIR, "dist");
const README_PATH = path.join(RESOURCE_DIR, "README.md");
const MANIFEST_PATH = path.join(RESOURCE_DIR, "manifest.json");
const ZIP_NAME = "malik-ai-harness-v1.zip";
const PUBLIC_DOWNLOAD_DIR = path.join(REPO_ROOT, "public", "downloads", "ai-harness");

// Source of truth. Override with AGENTS_SOURCE_DIR for testing.
const AGENTS_SOURCE_DIR = process.env.AGENTS_SOURCE_DIR || path.join(os.homedir(), ".agents");

// Explicit allowlist — never a recursive copy of ~/.agents.
// Skills, project-local context, and anything not listed here is excluded.
const ALLOWLIST = ["CODING.md", "DOCUMENTATION.md", "GIT.md", "SECURITY.md", "VERIFICATION.md"];

// Known private cross-references to genericize before this content goes public.
// Add an entry here whenever an allowlisted file grows a client/project-specific example.
const REDACTIONS = {
  "DOCUMENTATION.md": [
    {
      find: "Do not load Growth Agency website instructions while working on FirstMove unless the task explicitly connects the two.",
      replace:
        "Do not load one project or client's instructions while working on an unrelated project unless the task explicitly connects them.",
    },
  ],
};

// Defense-in-depth scan run on every file after redaction. Aborts the build
// rather than shipping anything that looks like a secret or a private path.
const SECRET_PATTERNS = [
  { label: "absolute home directory path", pattern: /\/home\/[a-z0-9_-]+/gi },
  { label: "possible API key/token", pattern: /\b(sk|pk|rk|api|token|secret)[_-][A-Za-z0-9]{16,}\b/gi },
  { label: "PEM private key header", pattern: /-----BEGIN [A-Z ]*PRIVATE KEY-----/g },
  { label: "possible JWT", pattern: /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g },
];

function assertSourceExists() {
  if (!existsSync(AGENTS_SOURCE_DIR)) {
    console.error(`AI Harness build failed: source directory not found at ${AGENTS_SOURCE_DIR}`);
    console.error("Set AGENTS_SOURCE_DIR to override the default ~/.agents location.");
    process.exit(1);
  }
}

function buildPackageFiles() {
  rmSync(PACKAGE_DIR, { recursive: true, force: true });
  mkdirSync(PACKAGE_DIR, { recursive: true });

  const copied = [];

  for (const filename of ALLOWLIST) {
    const sourcePath = path.join(AGENTS_SOURCE_DIR, filename);
    if (!existsSync(sourcePath)) {
      console.error(`AI Harness build failed: expected file missing from ${AGENTS_SOURCE_DIR}: ${filename}`);
      process.exit(1);
    }

    let content = readFileSync(sourcePath, "utf8");

    for (const { find, replace } of REDACTIONS[filename] ?? []) {
      content = content.split(find).join(replace);
    }

    for (const { label, pattern } of SECRET_PATTERNS) {
      const matches = content.match(pattern);
      if (matches) {
        console.error(
          `AI Harness build failed: ${filename} contains a ${label} after redaction (${matches[0]}). ` +
            "Fix the source file or add a redaction before packaging.",
        );
        process.exit(1);
      }
    }

    writeFileSync(path.join(PACKAGE_DIR, filename), content, "utf8");
    copied.push(filename);
  }

  return copied;
}

function writeManifest(files) {
  const manifest = {
    name: "malik-ai-harness-v1",
    version: "1.0.0",
    description: "Reusable global engineering policy files for coding agents (Claude Code, Codex, etc).",
    generatedAt: new Date().toISOString(),
    sourceFiles: files,
  };
  writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
}

async function buildZip(files) {
  mkdirSync(DIST_DIR, { recursive: true });
  const zipPath = path.join(DIST_DIR, ZIP_NAME);
  rmSync(zipPath, { force: true });

  await new Promise((resolve, reject) => {
    const output = createWriteStream(zipPath);
    const archive = new ZipArchive({ zlib: { level: 9 } });

    output.on("close", resolve);
    archive.on("error", reject);
    archive.pipe(output);

    archive.file(README_PATH, { name: "README.md" });
    for (const filename of files) {
      archive.file(path.join(PACKAGE_DIR, filename), { name: filename });
    }

    archive.finalize();
  });

  return zipPath;
}

function publishToPublicDir(zipPath) {
  mkdirSync(PUBLIC_DOWNLOAD_DIR, { recursive: true });
  const publicZipPath = path.join(PUBLIC_DOWNLOAD_DIR, ZIP_NAME);
  copyFileSync(zipPath, publicZipPath);
  return publicZipPath;
}

async function main() {
  assertSourceExists();

  if (!existsSync(README_PATH)) {
    console.error(`AI Harness build failed: missing public README at ${README_PATH}`);
    process.exit(1);
  }

  const files = buildPackageFiles();
  writeManifest(files);
  const zipPath = await buildZip(files);
  const publicZipPath = publishToPublicDir(zipPath);

  console.log(`AI Harness package built from ${AGENTS_SOURCE_DIR}`);
  console.log(`  Included: README.md, ${files.join(", ")}`);
  console.log(`  Zip: ${path.relative(REPO_ROOT, zipPath)}`);
  console.log(`  Published to: ${path.relative(REPO_ROOT, publicZipPath)}`);
  console.log("Commit the public/downloads/ai-harness/ copy — the deploy build cannot regenerate it (no ~/.agents on the server).");
}

main();
