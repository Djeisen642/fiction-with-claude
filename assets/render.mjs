// Rasterize assets/social-preview.svg -> assets/social-preview.png at exactly 1280x640.
// Usage: node assets/render.mjs [input.svg] [output.png]
// Run from the repo root so the relative font paths resolve.
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'node:fs';

const inSvg = process.argv[2] ?? 'assets/social-preview.svg';
const outPng = process.argv[3] ?? 'assets/social-preview.png';

const svg = readFileSync(inSvg, 'utf8');
const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1280 },
  font: {
    loadSystemFonts: false,
    fontFiles: [
      'assets/fonts/Fraunces144pt-SemiBold.ttf',
      'assets/fonts/Fraunces144pt-Black.ttf',
      'assets/fonts/Fraunces72pt-LightItalic.ttf',
    ],
  },
});

const png = resvg.render().asPng();
writeFileSync(outPng, png);
console.log(`wrote ${outPng} (${png.length} bytes)`);
