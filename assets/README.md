# assets/

Source and rendered output for the repo's **social preview** image (the picture
shown when the repo link is shared on Facebook, X/Twitter, Slack, etc.).

| File | What it is |
|---|---|
| `social-preview.svg` | Hand-authored SVG source, 1280×640. |
| `social-preview.png` | Rendered output, exactly 1280×640 (< 1 MB). Upload this to GitHub. |
| `render.mjs` | Rasterizes the SVG → PNG with [@resvg/resvg-js](https://github.com/yisibl/resvg-js). |
| `fonts/` | Fraunces static TTFs (SIL Open Font License — see `fonts/OFL.txt`) used by the title and tagline. |

## Re-rendering

```bash
npm install          # once, installs @resvg/resvg-js
npm run render:social # writes assets/social-preview.png
```

Run from the repo root so the relative font paths resolve. The PNG must stay
**exactly 1280×640** and under 1 MB.

## Installing the social preview on GitHub

1. Repo → **Settings → General → Social preview → Edit → Upload an image**.
2. Upload `assets/social-preview.png`.
3. Verify with the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   or [opengraph.xyz](https://www.opengraph.xyz/) (paste the repo URL; "Scrape Again"
   if it's cached).
