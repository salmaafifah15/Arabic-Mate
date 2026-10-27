import {readFile,writeFile} from 'node:fs/promises';
const css=await readFile('src/style.css','utf8');
let data=await readFile('src/data.js','utf8');
for(const match of [...data.matchAll(/\/src\/images\/(?:vocabulary|scenes)\/[a-z0-9-]+\.svg/g)].map(m=>m[0])){
  const svg=await readFile('.'+match);
  data=data.replaceAll(match,`data:image/svg+xml;base64,${svg.toString('base64')}`);
}
const app=(await readFile('src/app.js','utf8')).replace(/^import \{themes,questions\} from '\.\/data\.js';\s*/, '');
const preview=`<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#FFBE91"><meta name="description" content="Arabic Mate: 72 kosakata bergambar, 36 giliran percakapan terbuka dengan ketikan dan suara."><title>Arabic Mate - Pratinjau Mandiri</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@500;700&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap"><style>${css}</style></head><body><a class="skip" href="#main">Lewati navigasi</a><div id="app"></div><div id="toast" role="status"></div><script type="module">${data}\n${app}</script></body></html>`;
await writeFile('ArabicMate-Preview.html',preview);
console.log('Preview mandiri selesai: ArabicMate-Preview.html');
