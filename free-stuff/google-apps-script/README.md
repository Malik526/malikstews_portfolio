# Free Stuff Subscribers — Google Apps Script setup

This is the "server" for the /free-stuff forms. It's a Google Apps Script Web
App bound to a Google Sheet in your personal Google account — no hosting
platform, service account, or backend deployment required. The site stays a
static build; the browser POSTs directly to the deployed script URL.

## One-time setup

1. Create a new Google Sheet (e.g. "Free Stuff Subscribers") in your personal
   Google account. Leave it empty — the script creates its own `Subscribers`
   tab with headers on first run.
2. In the Sheet, open **Extensions → Apps Script**.
3. Delete the default `Code.gs` contents and paste in this folder's
   [Code.gs](./Code.gs).
4. Click **Deploy → New deployment**.
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the resulting Web App URL (ends in `/exec`).
6. Set it locally as `VITE_APPS_SCRIPT_URL` in your `.env` (see
   `.env.example` at the repo root).

## Redeploying after a Code.gs change

Apps Script does not read from this repo — it only runs whatever is pasted
into the Apps Script editor. After changing `Code.gs`:

1. Paste the updated contents into the Apps Script editor.
2. **Deploy → Manage deployments → edit (pencil) → New version → Deploy.**
3. The Web App URL stays the same, so no env var change is needed.

## Adding a new resource

1. Add the resource's `id` and `RESOURCES[id]` display name to `Code.gs`,
   redeploy (see above).
2. Add a matching entry to `resources` in `src/lib/resources.ts` on the
   frontend — the `id` values must match exactly.

## Sheet columns

| Name | Email | Resources | Created At | Last Downloaded At |
|---|---|---|---|---|

One row per unique (lowercased, trimmed) email address. Re-downloading an
already-claimed resource updates `Last Downloaded At` in place rather than
adding a row; claiming a different resource appends it to the `Resources`
cell (comma-separated, e.g. `AI Coding Harness, Codex Skills`) instead of
creating a second subscriber row.
