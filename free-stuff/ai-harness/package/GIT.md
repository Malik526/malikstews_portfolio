# Universal Git Policy

This file is the vendor-neutral source of truth for Git behavior that applies across Claude Code, Codex, and any future local AI agent.

## Repository Boundaries

- Commit completed work when the touched files are inside a Git repository and committing is safe.
- Do not initialize new repositories solely to satisfy a commit rule.
- Do not commit files outside the relevant repository.
- If required task files are outside any Git repository, state that they could not be committed because Git does not track them.

## Commit Safety

- Do not include credential files, generated secret material, private environment files, or unrelated local changes in commits.
- Respect dirty worktrees. Treat unrecognized changes as user work and do not revert them unless explicitly asked.
- Avoid destructive Git commands unless the user explicitly requests them.
- Use non-interactive Git commands where possible.

## Commit Messages

- Use these commit message formats:
  - `feat: [description]` for new features.
  - `fix: [description]` for bug fixes.
  - `config: [description]` for configuration changes.
  - `docs: [description]` for documentation updates.

# verify changelog
Before reporting a repository-changing task as complete, verify that required
documentation updates, including CHANGELOG.md when applicable, are included in
the intended diff.
