---
description: Start or stop the local Hugo dev server for this site (dia-bremen), verify it's serving, and show a quick screenshot preview of the homepage. Use when the user types /hugo-server, or asks to preview/start/stop the site locally before pushing.
---

This project is a Hugo static site. Port `1313` is the dev server port.

## Argument handling

- No argument, or `start` → start the server (see below).
- `stop` → stop the server (see below).

## Starting (`/hugo-server` or `/hugo-server start`)

1. Check whether port 1313 already has a listener (`lsof -ti:1313 -sTCP:LISTEN`). If it does, just report it's already running at http://localhost:1313/ and stop here — don't relaunch.
2. From the repo root, start it in the background and log to this session's scratchpad directory (not `/tmp` directly):
   ```bash
   hugo server -D > "$SCRATCHPAD/hugo-server.log" 2>&1 &
   disown
   ```
3. Poll (don't sleep-guess) until it responds, with a timeout:
   ```bash
   timeout 15 bash -c 'until curl -sf http://localhost:1313/ >/dev/null; do sleep 0.5; done'
   ```
   If it times out, show the last ~20 lines of the log file and report the failure instead of claiming success.
4. Once confirmed up, tell the user the local URL: `http://localhost:1313/`.
5. Take a quick screenshot of the homepage with headless chromium so there's an immediate visual check, and send it:
   ```bash
   chromium --headless --disable-gpu --no-sandbox --hide-scrollbars --window-size=1280,1000 --screenshot="$SCRATCHPAD/hugo-preview.png" http://localhost:1313/
   ```
   Then use SendUserFile to deliver `$SCRATCHPAD/hugo-preview.png`.
6. Remind the user the server keeps running (with live-reload) until they say to stop it — don't stop it automatically after the screenshot.

## Stopping (`/hugo-server stop`)

1. Free the port: `lsof -ti:1313 -sTCP:LISTEN | xargs -r kill`
2. Confirm it's down (e.g. a `curl` to `http://localhost:1313/` should now fail) and tell the user it's stopped.

## Notes

- Never leave the server running silently across turns without mentioning it's still up — the user should always know its state.
- This is local-only and has no effect on the deployed site (see the project's deploy-pipeline memory: Gitea → mirror → GitHub Actions → Pages).
