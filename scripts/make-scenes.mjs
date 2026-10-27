// Membuat 6 ilustrasi latar percakapan: node scripts/make-scenes.mjs
import {mkdir,writeFile} from 'node:fs/promises';
const R=(x,y,w,h,f,r=0)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${f}"/>`;
const C=(x,y,r,f,o=1)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" opacity="${o}"/>`;
const row=(n,f)=>Array.from({length:n},(_,i)=>f(i)).join('');
const sky=(a,b)=>`<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="900" height="360" fill="url(#g)"/>`;
const P=(x,y,s=1,o={})=>{
  const {skin='#f2be99',shirt='#5397ac',hair='#4a3f38',pants='#3d4a5c',up=0,f=0,hij,peci,extra=''}=o;
  const back=hij?`<path d="M-18 -80a18 18 0 0 1 36 0v18q-18 9-36 0z" fill="${hij}"/>`:'';
  const top=hij?`<path d="M-13 -84q13-9 26 0q-13-4-26 0z" fill="${hij}"/>`:peci?R(-12,-99,24,12,'#2e2a26',4):`<path d="M-14 -82a14 14 0 0 1 28 0q-14-7-28 0z" fill="${hair}"/>`;
  return `<g transform="translate(${x} ${y}) scale(${f?-s:s} ${s})">`+R(-11,-24,9,24,pants,3)+R(2,-24,9,24,pants,3)
   +`<rect x="-24" y="-60" width="9" height="32" rx="4" fill="${shirt}" transform="rotate(12 -20 -58)"/>`
   +`<rect x="15" y="-60" width="9" height="32" rx="4" fill="${shirt}" transform="rotate(${up?-125:-12} 20 -58)"/>`
   +R(-16,-66,32,46,shirt,12)+back+C(0,-80,14,skin)+top+C(-5,-79,1.6,'#333')+C(5,-79,1.6,'#333')
   +`<path d="M-4 -73q4 4 8 0" stroke="#8a5545" stroke-width="1.6" fill="none" stroke-linecap="round"/>`+extra+`</g>`;
};
const tree=(x,y)=>R(x-6,y-40,12,50,'#a86f4c')+C(x,y-70,34,'#5faa6b')+C(x-22,y-52,24,'#6cb97a')+C(x+22,y-52,24,'#6cb97a');
const bag=(x,y,c)=>R(x,y-46,42,46,c,7)+`<path d="M${x+13} ${y-46}v-9h16v9" stroke="#555" stroke-width="3" fill="none"/>`+R(x+6,y-38,4,30,'#ffffff66',2);
const stall=(x,w,a,b)=>row(6,i=>{const c=w/6;return `<path d="M${x+i*c} 112h${c}v28a${c/2} ${c/2} 0 0 1 ${-c} 0z" fill="${i%2?b:a}"/>`})+R(x+4,140,6,122,'#a86f4c')+R(x+w-10,140,6,122,'#a86f4c');
const counter=(x,w,g)=>R(x-6,236,w+12,12,'#e8b283',5)+R(x,248,w,52,'#c98a5e',4)+g.map((c,i)=>C(x+22+i*((w-44)/(g.length-1)),228,10,c)).join('');
const desk=(x,w,c)=>R(x-6,236,w+12,12,'#fff',5)+R(x,248,w,52,c,4);
const bowl=x=>`<path d="M${x} 244h50a25 18 0 0 1 -50 0z" fill="#fff"/><ellipse cx="${x+25}" cy="244" rx="25" ry="5" fill="#e8a64a"/><path d="M${x+15} 232q-6-10 0-18M${x+34} 232q-6-10 0-18" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".85"/>`;

const pasar=()=>sky('#ffd0aa','#fff4de')+C(790,62,44,'#ffe7a8')+C(790,62,30,'#ffd36b')
 +`<path d="M0 36Q450 96 900 36" stroke="#b57a56" stroke-width="3" fill="none"/>`
 +row(14,i=>{const x=i*64+16,y=36+Math.sin(i/13*Math.PI)*30;return `<path d="M${x} ${y}h18l-9 24z" fill="${['#ea8067','#6cb6d9','#f3c64f','#86b75e'][i%4]}"/>`})
 +R(0,284,900,76,'#ecca9d')+R(0,284,900,6,'#d9b182')+row(9,i=>R(i*100+20,318,60,4,'#d9b182',2))
 +stall(60,250,'#ea8067','#fff2e4')+stall(570,270,'#5fa8cf','#fff2e4')
 +P(185,262,1.05,{shirt:'#86b75e',peci:1,skin:'#d9a07a',up:1})+P(705,262,1.05,{shirt:'#e8a64a',hij:'#9b6fb3',up:1,f:1})
 +counter(60,250,['#dc5b48','#eeab3e','#dc5b48','#86b75e','#eeab3e','#dc5b48','#eeab3e'])
 +counter(570,270,['#86b75e','#e8a64a','#dc5b48','#86b75e','#e8a64a','#dc5b48','#86b75e','#e8a64a'])
 +P(268,346,1.2,{shirt:'#4c91bc',hair:'#2e2a26',up:1,f:1})
 +P(622,346,1.2,{shirt:'#d86b86',hij:'#f6d27a',up:1,extra:R(-34,-44,20,24,'#c98a5e',3)})
 +P(450,352,.7,{shirt:'#f3c64f',up:1,extra:'<path d="M46 -76Q60 -120 52 -150" stroke="#999" fill="none"/><circle cx="52" cy="-162" r="14" fill="#e8625a"/>'});

const jalan=()=>sky('#f3f7fa','#e6eef4')+R(40,36,820,190,'#bfe0ff',14)+R(40,170,820,56,'#cfe9d2')
 +C(160,90,28,'#fff',.9)+C(190,100,22,'#fff',.9)+C(760,80,32,'#fff',.9)
 +`<ellipse cx="560" cy="110" rx="80" ry="13" fill="#fff"/><path d="M548 108l-34-44h22l40 44z" fill="#e3edf4"/><path d="M548 114l-34 44h22l40-44z" fill="#d2dfe9"/><path d="M630 106l16-26h13l-9 28z" fill="#ea8067"/>`
 +R(330,36,10,190,'#fff')+R(700,36,10,190,'#fff')+R(0,250,900,110,'#d5e0ea')+R(0,250,900,6,'#c4d2de')
 +R(588,0,4,116,'#9fb2c0')+C(590,150,34,'#2f6f8f')+`<text x="590" y="164" text-anchor="middle" font-size="44" font-family="Georgia,serif" fill="#fff">i</text>`
 +P(590,268,1.05,{shirt:'#2f6f8f',hij:'#f6d27a',up:1,f:1})+desk(470,240,'#5fa8cf')
 +P(430,346,1.2,{shirt:'#ea8067',hair:'#2e2a26',up:1})+bag(348,346,'#5fa8cf')
 +P(230,344,1.1,{shirt:'#86b75e',peci:1,skin:'#d9a07a'})+bag(270,344,'#e8a64a')
 +P(790,346,1.15,{shirt:'#8f7fd0',hij:'#e86f8a'})+bag(826,346,'#d86b86');

const makan=()=>sky('#ffe6bf','#fff1d6')+R(0,262,900,98,'#d9a77a')+row(6,i=>R(0,276+i*14,900,2,'#c99466'))
 +`<rect x="50" y="60" width="210" height="140" rx="10" fill="#bfe0ff" stroke="#b57a56" stroke-width="8"/>`+R(151,60,8,140,'#b57a56')
 +R(660,52,200,120,'#35504a',10)+`<path d="M685 85h110M685 110h150M685 135h90" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".8"/>`
 +row(5,i=>{const x=130+i*160;return `<path d="M${x} 0v40" stroke="#8a5a3a" stroke-width="3"/><path d="M${x-22} 62a22 22 0 0 1 44 0z" fill="#e8775a"/>`+C(x,66,8,'#ffe08a')})
 +P(380,266,1.05,{shirt:'#7fa6c9',peci:1,skin:'#d9a07a'})+P(520,266,1.05,{shirt:'#e8a64a',hij:'#7ec8a3'})
 +R(300,262,300,12,'#8b5a3c',5)+R(330,274,10,72,'#6f4730')+R(560,274,10,72,'#6f4730')+bowl(340)+bowl(470)
 +P(720,346,1.2,{shirt:'#ffffff',pants:'#2e3434',hair:'#2e2a26',up:1,f:1,extra:'<ellipse cx="46" cy="-79" rx="22" ry="5" fill="#cfd6d6"/><path d="M36 -81h20a10 9 0 0 1 -20 0z" fill="#fff"/>'});

const hobi=()=>sky('#bfe3ff','#eaf7ff')+C(130,70,40,'#ffe28a')+C(700,60,26,'#fff',.9)+C(730,70,20,'#fff',.9)+C(670,72,18,'#fff',.9)
 +`<path d="M0 230Q150 150 320 215T640 200T900 215V360H0z" fill="#9fd49a"/><path d="M0 270Q250 220 500 262T900 250V360H0z" fill="#7fc17f"/>`
 +tree(60,250)+tree(870,240)
 +`<path d="M330 300l30-120l30 120M360 180v120" stroke="#8b5a3c" stroke-width="6" fill="none" stroke-linecap="round"/>`
 +R(312,150,96,76,'#fff',5)+R(318,156,84,64,'#bfe3ff',3)+C(380,178,9,'#ffd36b')+`<path d="M318 220q30-30 84-4v4z" fill="#7fc17f"/>`
 +P(250,336,1.2,{shirt:'#e8a64a',hair:'#2e2a26',up:1,extra:'<path d="M46 -76l16-10" stroke="#8b5a3c" stroke-width="3" stroke-linecap="round"/>'})
 +P(560,338,1.15,{shirt:'#4c91bc',peci:1,skin:'#d9a07a'})+C(612,332,13,'#fff')+`<path d="M612 324l7 5-3 8h-8l-3-8z" fill="#333"/>`
 +`<path d="M821 256Q850 200 830 134" stroke="#8b8b8b" fill="none"/><path d="M830 60l24 30-24 44-24-44z" fill="#ea8067"/><path d="M830 134q-12 14 0 26t0 26" stroke="#e8775a" fill="none" stroke-width="3"/>`
 +P(770,340,1.1,{hij:'#7ec8a3',shirt:'#f0a6c0',up:1});

const kel=()=>sky('#fff0dc','#ffe6c8')+R(0,270,900,90,'#e3b98c')+`<ellipse cx="450" cy="322" rx="340" ry="30" fill="#f3a38c" opacity=".55"/>`
 +`<rect x="70" y="50" width="190" height="150" rx="8" fill="#bfe0ff" stroke="#b57a56" stroke-width="7"/><path d="M60 40h60v170q-30-30-60 0z" fill="#e8775a" opacity=".85"/><path d="M270 40h-60v170q30-30 60 0z" fill="#e8775a" opacity=".85"/>`
 +R(340,56,70,56,'#fff',6)+R(344,60,62,48,'#f6c27a',4)+R(500,56,76,56,'#fff',6)+R(504,60,68,48,'#f3a6a6',4)+R(600,44,56,70,'#fff',6)+R(604,48,48,62,'#9fd0e8',4)
 +`<path d="M450 120c-14-20-40 0-24 22l24 22 24-22c16-22-10-42-24-22z" fill="#e8775a" opacity=".85"/>`
 +R(815,292,50,48,'#c98a5e',6)+`<ellipse cx="840" cy="250" rx="14" ry="40" fill="#5faa6b"/><ellipse cx="820" cy="264" rx="12" ry="30" fill="#6cb97a" transform="rotate(-30 820 264)"/><ellipse cx="860" cy="264" rx="12" ry="30" fill="#6cb97a" transform="rotate(30 860 264)"/>`
 +R(300,176,300,100,'#7fa6c9',22)+P(395,270,1,{shirt:'#4c6f9e',peci:1,skin:'#d9a07a'})+P(510,270,1,{shirt:'#e8775a',hij:'#9b6fb3'})
 +R(290,236,320,50,'#8db4d6',16)+R(280,210,36,76,'#7fa6c9',14)+R(584,210,36,76,'#7fa6c9',14)
 +P(205,346,.8,{shirt:'#f3c64f',up:1})+P(700,346,.85,{shirt:'#f0a6c0',hij:'#7ec8a3',up:1,f:1})+P(760,350,.65,{shirt:'#86b75e',hair:'#2e2a26'});

const sek=()=>sky('#e9f4e4','#f7f3df')+R(0,262,900,98,'#d8b48a')+R(0,262,900,6,'#c79f72')
 +R(40,60,150,130,'#bfe0ff',8)+R(111,60,8,130,'#fff')+R(40,121,150,8,'#fff')
 +R(250,36,400,138,'#b57a56',10)+R(260,46,380,118,'#35504a',6)
 +`<path d="M290 80q20-24 40 0t40 0t40 0M290 120h120M440 120h60M520 90h80M520 120h60" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".85"/>`+R(250,174,400,8,'#8b5a3c',3)
 +C(790,84,32,'#fff')+`<circle cx="790" cy="84" r="32" fill="none" stroke="#b57a56" stroke-width="5"/><path d="M790 84v-20M790 84l14 8" stroke="#333" stroke-width="3" stroke-linecap="round"/>`
 +P(110,272,1,{shirt:'#e8a64a',hair:'#2e2a26',up:1})+P(305,272,1,{shirt:'#d86b86',hij:'#5fa8cf'})+P(485,272,1,{shirt:'#86b75e',peci:1,skin:'#d9a07a',up:1})
 +[60,250,430].map(x=>R(x,268,110,12,'#b57a56',4)+R(x+10,280,8,60,'#8b5a3c')+R(x+92,280,8,60,'#8b5a3c')+R(x+62,258,28,10,'#5fa8cf',2)).join('')
 +P(700,330,1.25,{shirt:'#4c6f9e',hair:'#2e2a26',up:1,f:1,extra:'<path d="M46 -76L110 -140" stroke="#8b5a3c" stroke-width="4" stroke-linecap="round"/>'});

const scenes={pasar,perjalanan:jalan,makanan:makan,hobi,keluarga:kel,sekolah:sek};
await mkdir('src/images/scenes',{recursive:true});
for(const [id,fn] of Object.entries(scenes))await writeFile(`src/images/scenes/${id}.svg`,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 360" preserveAspectRatio="xMidYMid slice">${fn()}</svg>`);
console.log('Scene selesai:',Object.keys(scenes).join(', '));
