// Counter scenes: the SuperPOS screens (renders from scripts/render.mjs, at
// each display's own aspect ratio) laid on the blank displays of the Canva
// counter photos. The displays face the camera; their edges were measured on
// the photos (a taper under 2 %, ignored). Output: assets/renders/scene-*.png,
// then `node scripts/images.mjs` makes the web images.
//
//   node scripts/composite.mjs        (after `node scripts/render.mjs --only=ecran`)

import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const RENDERS = path.join(ROOT, "assets", "renders");

const SCENES = [
  {
    out: "scene-superette",
    photo: "assets/canva/scenes/comptoir-superette.png",
    screen: "ecran-superette",
    display: { left: 610, top: 226, width: 695, height: 425 },
  },
  {
    out: "scene-cafe",
    photo: "assets/canva/scenes/comptoir-cafe.png",
    screen: "ecran-cafe",
    display: { left: 649, top: 298, width: 609, height: 363 },
  },
];

for (const lang of ["fr", "ar"]) {
  for (const s of SCENES) {
    const { width, height } = s.display;
    // A lit screen in a room: a touch dimmer than pure white, and a faint
    // diagonal reflection from the room's light across the glass.
    const screen = await sharp(path.join(RENDERS, `${s.screen}-${lang}.png`))
      .resize(width, height, { fit: "fill", kernel: "lanczos3" })
      .modulate({ brightness: 0.93 })
      .toBuffer();
    const glass = Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#fff" stop-opacity="0.10"/>
          <stop offset="0.42" stop-color="#fff" stop-opacity="0.03"/>
          <stop offset="0.43" stop-color="#fff" stop-opacity="0"/>
        </linearGradient></defs>
        <rect width="100%" height="100%" fill="url(#g)"/>
        <rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" fill="none" stroke="#000" stroke-opacity="0.35"/>
      </svg>`,
    );
    const lit = await sharp(screen).composite([{ input: glass }]).toBuffer();
    const file = path.join(RENDERS, `${s.out}-${lang}.png`);
    await sharp(path.join(ROOT, s.photo))
      .composite([{ input: lit, left: s.display.left, top: s.display.top }])
      .toFile(file);
    console.log("scene", path.basename(file));
  }
}
