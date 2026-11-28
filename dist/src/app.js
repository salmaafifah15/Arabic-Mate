import {themes,questions} from './data.js';
const $=s=>document.querySelector(s), esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
document.head.appendChild(Object.assign(document.createElement('style'),{id:'am-dash-css',textContent:`/* ===== Gerbang masuk, dashboard murid, Ruang guru ===== */
:root{--am-mint:#d3efd9;--am-amber:#ffe6a8;--am-coral:#ffcabd;--am-deep:#487f9b}
.hero-dash,.t-banner,.gate,.kpi,.tgrid,.howto,.table-wrap,.panel{font-family:'Plus Jakarta Sans',Inter,'Segoe UI',sans-serif}
.hero-dash{display:flex;justify-content:space-between;align-items:center;gap:32px;padding:36px 44px;border-radius:30px;background:radial-gradient(circle at 90% 15%,#ffd9b8 0,transparent 46%),linear-gradient(120deg,var(--cream),#ffe9cf);margin:6px 0 20px}
.hero-dash h1{font-size:clamp(34px,4vw,52px);letter-spacing:-1.5px;margin:0 0 10px;line-height:1.05}
.hd-sub{margin:0 0 22px;max-width:44ch;font-size:15px;color:#555a55}
.namefield{display:grid;gap:6px;font-size:12px;font-weight:700;max-width:320px}
.namefield input{border:1px solid #e6dcc4;border-radius:14px;padding:12px 15px;background:rgba(255,255,255,.85);color:var(--ink);font:inherit}
@property --p{syntax:'<number>';inherits:false;initial-value:0}
@keyframes fill{from{--p:0}}
.ring{flex:none;position:relative;width:176px;aspect-ratio:1;border-radius:50%;display:grid;place-content:center;text-align:center;background:conic-gradient(#e08d57 calc(var(--p)*1%),#eadfca 0);animation:fill 1.2s cubic-bezier(.2,.7,.2,1)}
.ring::before{content:'';position:absolute;inset:16px;border-radius:50%;background:var(--paper)}
.ring b,.ring small{position:relative}.ring b{font-size:38px;line-height:1;letter-spacing:-1px}.ring small{font-size:12px;color:var(--muted);margin-top:4px}
.panel.next{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;background:var(--blue);border-radius:20px;padding:20px 26px;margin:0 0 22px}
.panel.next strong{font-size:12px;color:#3c6c86}.panel.next p{margin:4px 0 0;font-size:16px;font-weight:700}
.kpi{gap:16px;margin:0 0 34px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}
.kpi>div{border:0;border-radius:20px;padding:20px 22px;background:#fff;box-shadow:inset 0 0 0 1px var(--line)}
.kpi>div::before{content:'📚';display:grid;place-items:center;width:46px;height:46px;border-radius:14px;background:var(--sand);font-size:22px;flex:none}
.kpi>div:nth-child(2)::before{content:'💬';background:var(--blue)}.kpi>div:nth-child(3)::before{content:'🏆';background:var(--cream)}
.kpi.t>div:nth-child(1)::before{content:'🧑‍🎓'}.kpi.t>div:nth-child(2)::before{content:'📚';background:var(--sand)}.kpi>div:nth-child(4)::before{content:'🔔';background:var(--am-coral)}
.kpi strong{display:block;font-size:30px;line-height:1.1;letter-spacing:-1px}.kpi small{color:var(--muted);font-size:12px}
.t-banner{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap;padding:32px 36px;border-radius:26px;background:linear-gradient(120deg,var(--blue),#eaf6ff 75%);margin:6px 0 22px}
.t-banner h1{font-size:clamp(30px,3.4vw,44px);letter-spacing:-1.2px;margin:0 0 6px}.t-banner p{margin:0;max-width:44ch;color:#4d5f68;font-size:14px}.t-banner .actions{margin:0}
.actions select{border:1px solid #cfe0ea;border-radius:10px;padding:11px 14px;background:#fff;color:var(--ink);font:inherit;font-size:12px;font-weight:650}
.tgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:14px;margin-bottom:36px}
.tcard{background:#fff;border-radius:20px;padding:18px 20px;box-shadow:inset 0 0 0 1px var(--line)}
.tcard h3{display:flex;align-items:center;gap:10px;margin:0 0 14px;font-size:15px}.tcard h3 span{display:grid;place-items:center;width:34px;height:34px;border-radius:11px;background:var(--cream)}
.bar-row{display:grid;grid-template-columns:62px 1fr 34px;align-items:center;gap:10px;margin:8px 0;font-size:12px}.bar-row small{color:var(--muted);font-size:12px}.bar-row b{text-align:right}
.bar{height:8px;border-radius:6px;background:#f1ede0;overflow:hidden}.bar i{display:block;height:100%;border-radius:6px;background:#d9996b}.bar.hi i{background:#69b383}.bar.mid i{background:#e8b94d}.bar.lo i{background:#e07b68}
.tcard p{margin:12px 0 0;font-size:12px;color:var(--muted)}
.table-wrap{overflow-x:auto;border-radius:20px;background:#fff;box-shadow:inset 0 0 0 1px var(--line);margin-bottom:10px}
.table-wrap table{border-collapse:collapse;width:100%;font-size:13px;white-space:nowrap}
.table-wrap th{padding:14px;text-align:left;font-size:12px;color:var(--muted);font-weight:700;background:#fbf8ee}
.table-wrap td{padding:12px 14px;border-top:1px solid #f0ede2;vertical-align:middle}.table-wrap tbody tr:hover{background:#fffcf2}
.table-wrap td b{display:block}.table-wrap td small{color:var(--muted);font-size:11px}
.avatar{display:grid;place-items:center;width:36px;height:36px;border-radius:50%;background:var(--sand);font-weight:800;font-size:13px}
.mini{display:inline-block;width:70px;height:7px;background:#f1ede0;border-radius:5px;margin-right:9px;vertical-align:middle;overflow:hidden}.mini span{display:block;height:100%;background:#d9996b;border-radius:5px}
.sc{display:inline-block;min-width:38px;padding:4px 10px;border-radius:10px;text-align:center;font-weight:800;font-size:12px;background:#f4f2ea;color:var(--muted)}
.sc.hi{background:var(--am-mint);color:#1f5a33}.sc.mid{background:var(--am-amber);color:#6b4b00}.sc.lo{background:var(--am-coral);color:#8a2f1f}.sc small{font-size:10px;font-weight:600;opacity:.7}
.chip{display:inline-flex;align-items:center;gap:6px;padding:4px 11px;border-radius:20px;font-size:11px;font-weight:700;background:#f1efe4}
.chip::before{content:'';width:7px;height:7px;border-radius:50%;background:#b9b6a5}
.chip.ok{background:var(--am-mint)}.chip.ok::before{background:#3f9a5f}.chip.warn{background:var(--am-coral)}.chip.warn::before{background:#d6523b}.chip.go{background:var(--blue)}.chip.go::before{background:var(--am-deep)}
.x{border:0;background:none;color:var(--muted);padding:5px 9px;border-radius:8px}.x:hover{background:var(--cream);color:var(--ink)}.device .x{margin-left:10px;border:1px solid var(--line);font-size:11px}
.howto{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin-top:22px}
.howto>div{background:#fff;border-radius:20px;padding:22px;box-shadow:inset 0 0 0 1px var(--line)}.howto span{display:grid;place-items:center;width:44px;height:44px;border-radius:14px;background:var(--cream);font-size:22px;margin-bottom:12px}.howto b{display:block;margin-bottom:4px}.howto p{margin:0;font-size:13px;color:var(--muted)}
.gate{min-height:100vh;display:grid;grid-template-columns:1.1fr 1fr}
.gate-art{position:relative;overflow:hidden;display:grid;align-items:end;padding:56px;background:linear-gradient(160deg,#ffcfa6,#ffe4c4 55%,var(--cream))}
.g-blob{position:absolute;border-radius:50%}.g-blob.b1{width:420px;height:420px;right:-120px;top:-120px;background:var(--blue);opacity:.75}.g-blob.b2{width:240px;height:240px;left:-70px;top:34%;background:#ffb98a;opacity:.55}
.g-copy{position:relative}.g-word{display:block;font:700 clamp(56px,8vw,112px)/1.3 'Noto Naskh Arabic',Georgia,serif;margin-bottom:12px}
.g-copy p{max-width:36ch;font-size:17px;margin:0 0 22px}.g-chips{display:flex;flex-wrap:wrap;gap:8px}.g-chips span{background:rgba(255,255,255,.72);border-radius:30px;padding:7px 14px;font-size:12px;font-weight:700}
.gate-side{display:grid;place-items:center;padding:32px;background:var(--paper)}.gate-card{width:min(400px,100%)}.gate-card h1{font-size:34px;letter-spacing:-1px;margin:26px 0 18px}
.gate-card .tabs{display:grid;grid-template-columns:1fr 1fr;gap:6px;padding:5px;margin:0 0 22px;border:0;border-radius:16px;background:#f3efe1}
.gate-card .tabs button{padding:11px 8px;border:0;border-radius:12px;font-weight:700;font-size:13px}.gate-card .tabs button[aria-selected=true]{background:#fff;color:var(--ink);box-shadow:0 1px 4px rgba(46,52,52,.12)}
.gate-card form{display:grid;gap:14px}.gate-card label{display:grid;gap:6px;font-size:12px;font-weight:700}
.gate-card input{border:1.5px solid var(--line);border-radius:14px;padding:13px 15px;background:#fff;color:var(--ink);font:inherit;font-size:15px}.gate-card input:focus{border-color:var(--am-deep);outline:0;box-shadow:0 0 0 4px rgba(72,127,155,.15)}
.gate-card .btn.dark{padding:14px;font-size:14px;border-radius:14px;margin-top:4px}.gate-card .note{margin:20px 0 0;color:var(--muted)}
@media(max-width:860px){.gate{grid-template-columns:1fr}.gate-art{padding:32px 28px;min-height:230px}.g-word{font-size:56px;margin:0}.g-copy p,.g-chips{display:none}}
@media(max-width:760px){.hero-dash{flex-direction:column-reverse;align-items:flex-start;padding:26px}.ring{width:132px}.t-banner{padding:24px}}
@media(prefers-reduced-motion:reduce){.ring{animation:none}}

.history strong.sc{font-size:18px;padding:6px 14px}
.lvl{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;margin-bottom:14px;border-radius:30px;background:rgba(255,255,255,.78);font-size:12px;font-weight:800}
.duo{display:grid;grid-template-columns:1.1fr 1fr;gap:16px;margin:0 0 22px}.duo .panel.next{margin:0}
.wotd{display:flex;align-items:center;gap:18px;padding:18px 22px;border-radius:20px;background:#fff;box-shadow:inset 0 0 0 1px var(--line);font-family:'Plus Jakarta Sans',Inter,'Segoe UI',sans-serif}
.wotd img{width:104px;height:auto;border-radius:14px;background:var(--cream);flex:none}.wotd small{color:var(--muted);font-size:11px;font-weight:700}
.wotd-ar{font:700 34px/1.5 'Noto Naskh Arabic',Georgia,serif}.wotd p{margin:0;font-size:13px}.wotd .btn{margin-left:auto;flex:none}
@media(max-width:900px){.duo{grid-template-columns:1fr}.wotd{flex-wrap:wrap}}

/* ----- animasi ----- */
@keyframes am-rise{from{opacity:0;transform:translateY(16px)}}
@keyframes am-pop{0%{opacity:0;transform:scale(.7)}70%{transform:scale(1.07)}}
@keyframes am-float{50%{transform:translateY(-8px)}}
@keyframes am-drift{50%{transform:translate(-26px,20px) scale(1.07)}}
@keyframes am-grow{from{width:0}}
@keyframes am-pulse{from{box-shadow:0 0 0 0 rgba(214,82,59,.55)}to{box-shadow:0 0 0 9px rgba(214,82,59,0)}}
@keyframes am-glow{from{box-shadow:0 0 0 0 rgba(224,141,87,.4)}to{box-shadow:0 0 0 18px rgba(224,141,87,0)}}
@keyframes am-wave{0%,60%,100%{transform:rotate(0)}10%,30%{transform:rotate(16deg)}20%,40%{transform:rotate(-8deg)}50%{transform:rotate(10deg)}}
@keyframes am-shine{to{background-position:200% center}}
@keyframes am-fall{to{transform:translate(var(--dx),105vh) rotate(720deg)}}
.gate-card{animation:am-rise .7s cubic-bezier(.2,.7,.2,1) backwards}
.g-word{animation:am-rise .9s .15s cubic-bezier(.2,.7,.2,1) backwards}.g-copy p{animation:am-rise .8s .35s backwards}
.g-chips span{animation:am-pop .55s backwards}.g-chips span:nth-child(1){animation-delay:.55s}.g-chips span:nth-child(2){animation-delay:.7s}.g-chips span:nth-child(3){animation-delay:.85s}
.g-blob.b1{animation:am-drift 13s ease-in-out infinite}.g-blob.b2{animation:am-drift 17s ease-in-out infinite reverse}
.gate.still .gate-card,.gate.still .g-word,.gate.still .g-copy p,.gate.still .g-chips span{animation:none}
.hero-dash{animation:am-rise .7s cubic-bezier(.2,.7,.2,1) backwards}.lvl{animation:am-pop .6s .35s backwards}
.wave{display:inline-block;transform-origin:70% 70%;animation:am-wave 2.4s 1s ease-in-out 2}
.ring{animation:fill 1.3s .2s cubic-bezier(.2,.7,.2,1) backwards,am-glow 2.8s 1.6s ease-out infinite}
.duo>*{animation:am-rise .7s backwards}.duo>:nth-child(1){animation-delay:.15s}.duo>:nth-child(2){animation-delay:.25s}
.kpi>div{animation:am-rise .6s backwards}.kpi>div:nth-child(1){animation-delay:.3s}.kpi>div:nth-child(2){animation-delay:.38s}.kpi>div:nth-child(3){animation-delay:.46s}.kpi>div:nth-child(4){animation-delay:.54s}
.dash-grid>*,.tgrid>*{animation:am-rise .6s backwards}.dash-grid>:nth-child(1),.tgrid>:nth-child(1){animation-delay:.45s}.dash-grid>:nth-child(2),.tgrid>:nth-child(2){animation-delay:.52s}.dash-grid>:nth-child(3),.tgrid>:nth-child(3){animation-delay:.59s}.dash-grid>:nth-child(4),.tgrid>:nth-child(4){animation-delay:.66s}.dash-grid>:nth-child(5),.tgrid>:nth-child(5){animation-delay:.73s}.dash-grid>:nth-child(6),.tgrid>:nth-child(6){animation-delay:.8s}
.t-banner{animation:am-rise .6s backwards}
.bar i,.mini span{animation:am-grow 1.1s .5s cubic-bezier(.2,.7,.2,1) backwards}
.table-wrap tbody tr{animation:am-rise .45s backwards}.table-wrap tbody tr:nth-child(1){animation-delay:.1s}.table-wrap tbody tr:nth-child(2){animation-delay:.16s}.table-wrap tbody tr:nth-child(3){animation-delay:.22s}.table-wrap tbody tr:nth-child(4){animation-delay:.28s}.table-wrap tbody tr:nth-child(n+5){animation-delay:.34s}
.chip.warn::before{animation:am-pulse 1.6s infinite}
.wotd img{animation:am-float 4.5s ease-in-out infinite}
.wotd-ar{background:linear-gradient(90deg,#2e3434 0,#2e3434 35%,#e08d57 50%,#2e3434 65%,#2e3434 100%);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:am-shine 6s linear infinite}
@supports not ((background-clip:text) or (-webkit-background-clip:text)){.wotd-ar{background:none;-webkit-text-fill-color:currentColor}}
.kpi>div,.tcard,.wotd{transition:transform .25s ease,box-shadow .25s ease}.kpi>div:hover,.tcard:hover,.wotd:hover{transform:translateY(-4px);box-shadow:0 14px 30px rgba(201,138,94,.16),inset 0 0 0 1px var(--line)}
.confetti{position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:50}.confetti i{position:absolute;top:-18px;width:9px;height:14px;border-radius:2px;animation:am-fall 2.4s cubic-bezier(.3,.1,.6,1) forwards}
@media(prefers-reduced-motion:reduce){.gate *,.gate-card,.hero-dash,.hero-dash *,.duo>*,.kpi>div,.dash-grid>*,.tgrid>*,.t-banner,.table-wrap tbody tr,.ring,.bar i,.mini span,.chip::before,.wotd img,.wotd-ar,.confetti i{animation:none!important}.wotd-ar{background:none;-webkit-text-fill-color:currentColor}}
`}));
let key='arabicmate:v1',progress,session=null;
const okSes=x=>x&&(x.role==='guru'||(x.role==='murid'&&/^[A-Za-z0-9 _-]{1,12}$/.test(x.kelas||'')&&Number.isInteger(x.absen)&&x.absen>=1&&x.absen<=99));
function loadProgress(){progress={learned:[],dialogs:[],attempts:[]};try{const v=JSON.parse(localStorage.getItem(key));if(v&&Array.isArray(v.learned)&&Array.isArray(v.dialogs)&&Array.isArray(v.attempts))progress=v}catch{}progress.profile=progress.profile&&typeof progress.profile==='object'?progress.profile:{name:'',kelas:''};if(session?.role==='murid'){progress.profile.kelas=session.kelas;progress.profile.absen=session.absen;if(!progress.profile.name)progress.profile.name=session.nama||''}}
function setSession(x){session=x;try{x?sessionStorage.setItem('arabicmate:sesi',JSON.stringify(x)):sessionStorage.removeItem('arabicmate:sesi')}catch{}key=x&&x.role==='murid'?`arabicmate:v1:${x.kelas.toLowerCase()}:${x.absen}`:'arabicmate:v1';loadProgress()}
try{const x=JSON.parse(sessionStorage.getItem('arabicmate:sesi'));if(okSes(x))setSession(x)}catch{}
if(!session)loadProgress();
progress.profile=progress.profile||{name:'',kelas:''};let roster=[];try{const r=JSON.parse(localStorage.getItem('arabicmate:guru:v1'));if(Array.isArray(r))roster=r}catch{}
let search='',filter='semua',tab='kosakata',card=0,flipped=false,step=0,chat=[],answers={},submitted=false,current='';
let draft='',recordedUrl='',recorder=null,recordingStream=null,isRecording=false,recognition=null,isRecognizing=false;
function clearRecordedDraft(){if(recordedUrl){URL.revokeObjectURL(recordedUrl);recordedUrl=''}}
function stopRecording(discard=false){
  if(recorder&&recorder.state!=='inactive'){
    if(discard)recorder.onstop=()=>{recordingStream?.getTracks().forEach(track=>track.stop());recordingStream=null};
    recorder.stop();
  }
  isRecording=false;
  if(discard)clearRecordedDraft();
}
function stopDictation(){if(recognition){recognition.onend=null;recognition.abort();recognition=null;}isRecognizing=false}
function clearConversation(){stopRecording(true);stopDictation();clearRecordedDraft();for(const msg of chat)if(msg.audio)URL.revokeObjectURL(msg.audio);chat=[];step=0;draft=''}
function toast(t){$('#toast').textContent=t;$('#toast').classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),3500)}
function save(){try{localStorage.setItem(key,JSON.stringify(progress))}catch{toast('Penyimpanan browser tidak tersedia. Progres hanya bertahan selama sesi ini.')}}
function route(){return location.hash.slice(1)||(session?.role==='guru'?'guru':'beranda')}
function go(r){location.hash=r}
function arab(s,cls=''){return `<span lang="ar" dir="rtl" class="arab ${cls}">${esc(s)}</span>`}
function render(){if(!session){gateRender();return}let r=route();if(session.role==='murid'&&r==='guru')r='beranda';if(session.role==='guru'&&(r==='beranda'||r==='progres'))r='guru';$('#app').innerHTML=`<aside><a class="brand" href="#beranda"><span class="brand-icon">ع</span><span>arabic<span class="light">mate</span><small>TEMAN BELAJAR BAHASA ARAB</small></span></a><div class="menu-label">RUANG BELAJARMU</div><nav>${(session.role==='guru'?[['guru','▤','Ruang guru'],['tema','▦','Pratinjau materi']]:[['beranda','⌂','Beranda'],['tema','▦','Jelajahi tema'],['progres','◷','Progres belajar']]).map(([id,ico,t])=>`<a href="#${id}" class="${r===id||(id==='tema'&&r.startsWith('belajar/'))?'active':''}"><span>${ico}</span>${t}</a>`).join('')}</nav><div class="side-note"><span>✦</span><h3>Sedikit, tapi setiap hari.</h3><p>Satu kata baru hari ini, satu langkah lebih dekat.</p><span lang="ar" dir="rtl">خُطْوَةً بِخُطْوَةٍ</span></div><a class="about-link" href="#tentang">ⓘ Tentang Arabic Mate</a></aside><div class="shell"><header><span>Belajar dengan rasa ingin tahu <span class="spark">✦</span></span><span class="device">${session.role==='guru'?'◉ Guru':`◉ Kelas ${esc(session.kelas)} · No. ${session.absen}${progress.profile.name?' · '+esc(progress.profile.name):''}`} <button class="x" id="logout">Keluar</button></span></header><main id="main" tabindex="-1">${r.startsWith('belajar/')?lesson(r.split('/')[1]):r==='tema'?themePage():r==='progres'?dashboard():r==='guru'?teacher():r==='tentang'?about():home()}</main><footer>Arabic Mate <span>Belajar pelan-pelan. Bertumbuh setiap hari.</span><span>Versi mandiri · Tanpa server</span></footer></div>`;bind();countUp();levelCheck();}
function home(){const last=progress.learned.length?themes.find(t=>t.id===progress.learned.at(-1).split(':')[0])||themes[0]:themes[0];return `<div class="eyebrow">أَهْلًا وَسَهْلًا · SELAMAT DATANG</div><section class="hero"><div><div class="pill">✦ Teman kecil, perjalanan besar</div><h1>Bahasa baru.<br>Cerita <em>baru.</em></h1><p>Kenali bahasa Arab lewat hal-hal yang dekat denganmu. Mulai dari satu kata, lalu berani bercakap.</p><a class="btn dark" href="#belajar/${last.id}">${progress.learned.length?'Lanjutkan belajar':'Mulai petualangan'} <span>↗</span></a><a class="text-link" href="#tema">Lihat semua tema →</a><div class="hero-tags"><span>✓ Untuk pemula</span><span>✓ Belajar sesuai ritmemu</span></div></div><div class="hero-art" aria-label="Ilustrasi buku bahasa Arab"><span class="orb o1"></span><span class="orb o2"></span><div class="float hello">مَرْحَبًا! <small>Halo, teman!</small></div><div class="book"><div class="book-page"><small>PERJALANAN DIMULAI DARI</small><span lang="ar" dir="rtl">أ ب ت</span><strong>Satu kata baru.</strong><div class="book-lines"></div></div></div><div class="float word">✦ <span>كِتَابٌ<small>kitābun · buku</small></span></div><span class="art-star">✳</span></div></section><section class="stats"><div><span class="stat-icon peach">▦</span><div><strong>${themes.length} tema</strong><small>Dekat dengan keseharian</small></div></div><div><span class="stat-icon blue">ع</span><div><strong>${themes.reduce((n,t)=>n+t.words.length,0)} kosakata</strong><small>Langkah kecil yang berarti</small></div></div><div><span class="stat-icon yellow">↗</span><div><strong>${progress.learned.length} dipelajari</strong><small>Perjalananmu sudah dimulai</small></div></div></section><div class="section-head"><div><div class="eyebrow">DUNIA KECIL UNTUK DIJELAJAHI</div><h2>Hari ini, mau belajar apa?</h2><p>Pilih satu tema. Temukan kata dan cerita di dalamnya.</p></div><a class="text-link" href="#tema">Semua tema ↗</a></div><div class="grid">${themes.map(themeCard).join('')}</div><section class="journey"><div><div class="eyebrow">TIDAK PERLU BURU-BURU</div><h2>Empat langkah, banyak cerita.</h2></div><div class="steps">${['Kenali kosakata','Balik flashcard','Coba percakapan','Uji pemahaman'].map((s,i)=>`<div><b>0${i+1}</b><span>${s}</span></div>`).join('')}</div></section>`}
function themeCard(t){const n=progress.learned.filter(id=>id.startsWith(t.id+':')).length;return `<a class="theme-card" href="#belajar/${t.id}"><div class="card-art ${t.color}" style="--scene:url('${esc(t.scene)}')"><span class="scene-icon">${t.icon}</span><span class="scene-word" lang="ar" dir="rtl">${t.arabic}</span><span class="level">Pemula · Fusha</span></div><div class="card-body"><small>${t.words.length} KOSAKATA · ${t.dialog.length} GILIRAN</small><h3>${t.title}<span>↗</span></h3><p>${t.description}</p><div class="card-progress"><span style="width:${n/t.words.length*100}%"></span></div><div class="card-foot"><span>${n}/${t.words.length} kata dipelajari</span><span>± 20 menit</span></div></div></a>`}
function themePage(){return `<div class="eyebrow">PILIH TEMPAT CERITAMU DIMULAI</div><h1 class="page-title">Jelajahi tema.</h1><p class="intro">Dari pasar sampai ruang kelas, bahasa Arab hadir di sekitarmu.</p><div class="toolbar"><input id="search" type="search" placeholder="Cari tema atau kosakata…" value="${esc(search)}" aria-label="Cari tema atau kosakata"><select id="filter" aria-label="Filter progres"><option value="semua" ${filter==='semua'?'selected':''}>Semua tema</option><option value="baru" ${filter==='baru'?'selected':''}>Belum dimulai</option><option value="mulai" ${filter==='mulai'?'selected':''}>Sudah dimulai</option></select></div><div id="theme-results" class="grid">${filtered()}</div>`}
function filtered(){const ts=themes.filter(t=>JSON.stringify(t).toLowerCase().includes(search.toLowerCase())&&(filter==='semua'||(filter==='mulai')===progress.learned.some(id=>id.startsWith(t.id+':'))));return ts.length?ts.map(themeCard).join(''):'<p class="empty">Tema belum ditemukan. Coba kata lain.</p>'}
function lesson(id){const t=themes.find(t=>t.id===id);if(!t)return '<h1>Tema tidak ditemukan</h1><a href="#tema">Kembali ke tema</a>';if(current!==id){clearConversation();current=id;tab='kosakata';card=0;flipped=false;answers={};submitted=false}return `<a class="back" href="#tema">← Semua tema</a><section class="lesson-banner ${t.color}" style="--scene:url('${esc(t.scene)}')"><div><div class="eyebrow">PEMULA · BAHASA ARAB FUSHA</div><h1>${t.title}</h1><p>${t.place}</p></div><div>${arab(t.arabic)}<span class="banner-icon">${t.icon}</span></div></section><div class="tabs" role="tablist">${[['kosakata','01','Kosakata'],['flashcard','02','Flashcard'],['dialog','03','Percakapan'],['kuis','04','Kuis']].map(([k,n,s])=>`<button role="tab" aria-selected="${tab===k}" data-tab="${k}"><small>${n}</small> ${s}</button>`).join('')}</div><section class="lesson-content" role="tabpanel">${tab==='kosakata'?vocab(t):tab==='flashcard'?flash(t):tab==='dialog'?dialog(t):quiz(t)}</section>`}
function vocab(t){return `<div class="section-head"><div><h2>Belajar kosakata lewat gambar.</h2><p>Amati ilustrasinya, baca kosakata Arab, dengarkan contoh pelafalan, lalu tandai yang sudah kamu pahami.</p></div><span class="count-chip">${t.words.length} kata bergambar</span></div><div class="vocab-grid">${t.words.map((w,i)=>{const done=progress.learned.includes(`${t.id}:${i}`);return `<article class="vocab-card"><div class="vocab-illustration"><img src="${esc(w[3])}" alt="Ilustrasi ${esc(w[2])}" loading="lazy" width="220" height="155"></div>${arab(w[0])}<i>${esc(w[1])}</i><strong>${esc(w[2])}</strong><div class="vocab-actions"><button class="audio" data-speak="${i}" aria-label="Dengarkan ${esc(w[2])}">🔊 Dengarkan</button><button class="mark ${done?'marked':''}" data-learn="${i}" aria-pressed="${done}">${done?'✓ Dipelajari':'+ Tandai'}</button></div></article>`}).join('')}</div><p class="note">Gambar membantu menghubungkan kata dengan benda atau aktivitas. Pelafalan otomatis memerlukan suara bahasa Arab pada perangkat.</p><button class="btn dark" data-next="flashcard">Latihan flashcard →</button>`}
function flash(t){const w=t.words[card];return `<div class="center"><div class="eyebrow">KARTU ${card+1} DARI ${t.words.length}</div><h2>Masih ingat artinya?</h2><p>Lihat gambar dan kata Arab, lalu balik kartunya untuk memeriksa jawaban.</p><button class="flash ${flipped?'flipped':''}" id="flip" aria-label="${flipped?'Tampilkan kata Arab':'Tampilkan arti'}"><img class="flash-illustration" src="${esc(w[3])}" alt="Ilustrasi ${esc(w[2])}" width="160" height="112">${flipped?`<strong>${esc(w[2])}</strong><i>${esc(w[1])}</i>`:arab(w[0])}<small>↻ Klik untuk membalik</small></button><div class="flash-controls"><button class="btn" id="prev-card">← Sebelumnya</button><span>${card+1} / ${t.words.length}</span><button class="btn" id="next-card">Berikutnya →</button></div><button class="btn dark" data-next="dialog">Coba percakapan →</button></div>`}
function dialog(t){const done=step>=t.dialog.length;
return `<div class="dialog-layout" style="--scene:url('${esc(t.scene)}')"><div class="scene-view ${t.color}" role="img" aria-label="Suasana ${esc(t.place)}"><div class="scene-chips"><span>${t.icon} ${esc(t.place)}</span><span>Lawan bicara: ${esc(t.role)}</span></div><div class="scene-title">${arab(t.arabic)}</div><div class="badge">Giliran ${Math.min(step+1,t.dialog.length)} dari ${t.dialog.length}</div></div><div class="dialog-workspace"><div class="dialog-topline"><div><h2>Berani bercakap bahasa Arab?</h2><p>Jawaban berasal dari ketikan atau suara siswa, bukan pilihan ganda.</p></div><span class="count-chip">${Math.min(step+1,t.dialog.length)} / ${t.dialog.length}</span></div><div class="dialog-progress"><span style="width:${100*step/t.dialog.length}%"></span></div><div class="chat" id="chat-log" role="log" aria-label="Riwayat percakapan">${chat.map(x=>`<div class="bubble ${x.me?'me':''}"><div class="bubble-label">${x.me?'🧑‍🎓 Siswa':'💬 Teman bicara'}</div>${x.ar?arab(x.ar):''}${x.audio?`<audio controls preload="metadata" src="${esc(x.audio)}" aria-label="Rekaman suara siswa"></audio>`:''}<small>${esc(x.id)}</small></div>`).join('')}${!done?`<div class="bubble"><div class="bubble-label">💬 ${esc(t.role)}</div>${arab(t.dialog[step][0])}<small>${esc(t.dialog[step][1])}</small></div>`:'<div class="complete">✦ Percakapan selesai! Kamu telah berlatih merespons enam kali. Jawabanmu merupakan latihan terbuka yang belum dinilai otomatis.</div>'}</div>${done?'<div class="dialog-end"><button class="btn dark" data-next="kuis">Lanjut ke kuis →</button><button class="btn" id="restart-dialog">Ulang percakapan</button></div>':`<div class="response-composer"><label for="dialog-input">Ketik jawabanmu dalam bahasa Arab</label><textarea id="dialog-input" lang="ar" dir="rtl" maxlength="400" rows="3" placeholder="اُكْتُبْ جَوَابَكَ هُنَا...">${esc(draft)}</textarea><div class="microphone-tools"><button class="btn voice-button ${isRecording?'recording':''}" id="${isRecording?'stop-recording':'start-recording'}" type="button">${isRecording?'⏹ Hentikan rekaman':'🎙 Rekam suara siswa'}</button>${typeof window!=='undefined'&&(window.SpeechRecognition||window.webkitSpeechRecognition)?`<button class="btn" id="${isRecognizing?'stop-dictation':'start-dictation'}" type="button">${isRecognizing?'⏹ Selesai dikte':'🗣 Ucapan → teks'}</button>`:''}</div>${isRecording?'<p class="recording-indicator"><span></span> Sedang merekam suara. Tekan Hentikan rekaman jika sudah selesai.</p>':''}${recordedUrl?`<div class="recording-preview"><strong>Pratinjau rekaman siswa</strong><audio controls preload="metadata" src="${esc(recordedUrl)}" aria-label="Pratinjau rekaman siswa"></audio><button class="clear-audio" id="discard-recording">Hapus rekaman</button></div>`:''}<details class="dialog-examples"><summary>Lihat contoh jawaban bahasa Arab</summary>${t.dialog[step][2].map(c=>`<div>${arab(c[0])}<small>${esc(c[1])}</small></div>`).join('')}</details><div class="send-row"><span>Kirim ketikan, rekaman, atau keduanya.</span><button class="btn dark" id="send-reply" ${isRecording?'disabled':''}>Kirim jawaban ↗</button></div><p class="privacy-note">Rekaman tersimpan sementara di halaman ini dan tidak diunggah oleh aplikasi. Mikrofon memerlukan izin serta HTTPS atau localhost. Fitur dikte, jika tersedia, memakai layanan pengenalan suara dari browser.</p></div>`}</div></div>`}
function quiz(t){const qs=questions(t),score=Math.round(qs.filter(q=>answers[q.id]===q.answer).length/qs.length*100);return `<div class="section-head"><div><h2>${submitted?'Hasil belajarmu.':'Saatnya mencoba sendiri.'}</h2><p>${submitted?'Periksa pembahasannya dan ulangi kata yang belum dikuasai.':'Pilih arti yang sesuai untuk setiap kata. Tidak perlu terburu-buru.'}</p></div>${submitted?`<div class="score">${score}<small>/100</small></div>`:''}</div>${qs.map((q,i)=>`<article class="question"><div><span class="q-num">${i+1}</span> Apa arti ${arab(q.arabic)}?</div><div class="options">${q.options.map(o=>`<button data-question="${q.id}" data-answer="${esc(o)}" ${submitted?'disabled':''} class="${answers[q.id]===o?'selected ':''}${submitted&&o===q.answer?'correct ':''}${submitted&&answers[q.id]===o&&o!==q.answer?'wrong':''}" aria-pressed="${answers[q.id]===o}">${o}</button>`).join('')}</div>${submitted?`<p class="explanation">${answers[q.id]===q.answer?'✓ Benar.':'↻ Mari diingat kembali.'} ${q.explanation}</p>`:''}</article>`).join('')}<div class="actions">${submitted?'<button class="btn dark" id="retry-quiz">Ulangi kuis</button><a class="btn" href="#progres">Lihat progres →</a>':`<button class="btn dark" id="submit-quiz" ${Object.keys(answers).length<qs.length?'disabled':''}>Periksa jawaban (${Object.keys(answers).length}/${qs.length})</button>`}</div>`}
function dashboard(){const avg=progress.attempts.length?Math.round(progress.attempts.reduce((s,a)=>s+a.score,0)/progress.attempts.length):0;return `${studentPanel()}<section class="stats kpi"><div><div><strong>${progress.learned.length} / ${themes.reduce((n,t)=>n+t.words.length,0)}</strong><small>Kosakata dipelajari</small></div></div><div><div><strong>${progress.dialogs.length} / ${themes.length}</strong><small>Simulasi selesai</small></div></div><div><div><strong>${avg}</strong><small>Rata-rata nilai kuis</small></div></div></section><h2 class="history-title">Progres per tema</h2><div class="grid dash-grid">${themes.map(themeCard).join('')}</div><h2 class="history-title">Riwayat kuis</h2>${progress.attempts.length?`<div class="history">${[...progress.attempts].reverse().map(a=>`<div><span>${esc(themes.find(t=>t.id===a.theme)?.title||'Tema')}<small>${new Date(a.date).toLocaleString('id-ID')}</small></span><strong class="sc ${tone(a.score)}">${a.score}<small>/100</small></strong></div>`).join('')}</div>`:'<p class="empty">Belum ada kuis yang diselesaikan. Pilih tema untuk mulai belajar.</p>'}<div class="actions"><button class="btn dark" id="export">↓ Ekspor progres (untuk guru)</button><label class="btn file-label">↑ Impor progres<input type="file" id="import" accept="application/json,.json"></label><button class="btn danger" id="reset">Hapus progres</button></div><p class="note">Progres tidak tersinkron antarperangkat dan dapat hilang ketika data browser dibersihkan. Nilai ditujukan untuk latihan mandiri.</p>`}
const total=themes.reduce((n,t)=>n+t.words.length,0),clean=p=>({name:String(p&&p.name||'').trim().slice(0,60),kelas:String(p&&p.kelas||'').trim().slice(0,30),absen:(n=>Number.isInteger(n)&&n>=1&&n<=99?n:null)(Number(p&&p.absen))});
function saveRoster(){try{localStorage.setItem('arabicmate:guru:v1',JSON.stringify(roster))}catch{toast('Data murid tidak dapat disimpan di browser ini.')}}
function stat(p){
  const per={};for(const t of themes){const sc=p.attempts.filter(a=>a.theme===t.id).map(a=>a.score);per[t.id]={n:p.learned.filter(x=>x.startsWith(t.id+':')).length,d:p.dialogs.includes(t.id),b:sc.length?Math.max(...sc):null}}
  const bs=Object.values(per).map(x=>x.b).filter(x=>x!==null),avg=bs.length?Math.round(bs.reduce((a,b)=>a+b,0)/bs.length):null,n=p.learned.length,pct=Math.round(n/total*100);
  const status=!n&&avg===null?'Belum mulai':avg!==null&&avg<60?'Perlu perhatian':pct>=50&&avg>=75?'Baik':'Berjalan';
  const dates=p.attempts.map(a=>Date.parse(a.date)).concat(Date.parse(p.exportedAt)||[]).filter(Number.isFinite);
  return {per,avg,n,pct,status,d:p.dialogs.length,last:dates.length?Math.max(...dates):null}
}
function valid(v){const ids=new Set(themes.map(t=>t.id)),words=new Set(themes.flatMap(t=>t.words.map((_,i)=>`${t.id}:${i}`)));return !!v&&[1,2].includes(v.version)&&Array.isArray(v.learned)&&v.learned.every(x=>words.has(x))&&Array.isArray(v.dialogs)&&v.dialogs.every(x=>ids.has(x))&&Array.isArray(v.attempts)&&v.attempts.every(a=>a&&ids.has(a.theme)&&Number.isFinite(a.score)&&a.score>=0&&a.score<=100&&Number.isFinite(Date.parse(a.date)))}
function nextStep(){const s=stat(progress);for(const t of themes){const x=s.per[t.id];if(x.n<t.words.length)return [t,`Lanjutkan kosakata tema ${t.title} (${x.n}/${t.words.length} kata).`];if(!x.d)return [t,`Coba percakapan tema ${t.title}.`];if(x.b===null||x.b<70)return [t,x.b===null?`Ikuti kuis tema ${t.title}.`:`Ulangi kuis tema ${t.title}. Nilai terbaikmu ${x.b}.`]}return null}
function countUp(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  document.querySelectorAll('.kpi strong,.ring b').forEach(el=>{const m=el.textContent.match(/^(\D*)(\d+)([\s\S]*)$/);if(!m||!+m[2])return;const to=+m[2],t0=performance.now(),tick=now=>{const k=Math.min(1,(now-t0)/1000);el.textContent=m[1]+Math.round(to*(1-Math.pow(1-k,3)))+m[3];if(k<1)requestAnimationFrame(tick)};tick(t0)})
}
function confetti(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const w=document.createElement('div');w.className='confetti';w.setAttribute('aria-hidden','true');w.innerHTML=Array.from({length:30},(_,i)=>`<i style="left:${Math.round(Math.random()*100)}%;background:${['#ffbe91','#cfebff','#ffdd9e','#69b383','#e8775a'][i%5]};animation-delay:${(Math.random()*.5).toFixed(2)}s;--dx:${Math.round(Math.random()*180-90)}px"></i>`).join('');document.body.appendChild(w);setTimeout(()=>w.remove(),3400)}
function levelCheck(){if(session?.role!=='murid')return;const p=stat(progress).pct,n=p<20?0:p<50?1:p<80?2:3;let old=-1;try{const v=localStorage.getItem(key+':lvl');if(v!==null)old=+v;if(old!==n)localStorage.setItem(key+':lvl',String(n))}catch{}if(old>=0&&n>old){confetti();toast(`Naik level! Sekarang ${lvl(p)} 🎉`)}}
const lvl=p=>p<20?'🌱 Level Pemula':p<50?'🧭 Level Penjelajah':p<80?'🗣️ Level Pencerita':'🏅 Level Mahir';
function wotd(){const all=themes.flatMap(t=>t.words.map(w=>({t,w}))),day=Math.floor((Date.now()-new Date().getTimezoneOffset()*6e4)/864e5);return all[day%all.length]}
function wotdCard(){const {t,w}=wotd();return `<section class="wotd"><img src="${esc(w[3])}" alt="Ilustrasi ${esc(w[2])}" width="104" height="73"><div><small>Kata hari ini · ${t.icon} ${esc(t.title)}</small><div class="wotd-ar" lang="ar" dir="rtl">${esc(w[0])}</div><p><b>${esc(w[1])}</b> berarti ${esc(w[2])}</p></div><button class="btn" id="wotd-say">🔊 Dengarkan</button></section>`}
function studentPanel(){const n=nextStep(),p=progress.profile,s=stat(progress),nm=(p.name||'').trim().split(' ')[0];return `<section class="hero-dash"><div><span class="lvl">${lvl(s.pct)}</span><h1>Ahlan${nm?', '+esc(nm):''}! <span class="wave" aria-hidden="true">👋</span></h1><p class="hd-sub">Kelas ${esc(p.kelas)}, nomor absen ${p.absen??'–'}. ${s.n?`Sudah ${s.n} dari ${total} kata kamu pelajari.`:'Belum ada kata yang kamu tandai. Mulai dari satu kata saja.'}</p><label class="namefield">Nama di berkas progres<input id="p-name" maxlength="60" value="${esc(p.name)}" placeholder="Tulis namamu"></label></div><div class="ring" style="--p:${s.pct}" role="img" aria-label="${s.pct}% kosakata dipelajari"><b>${s.pct}%</b><small>kosakata</small></div></section><div class="duo"><section class="panel next"><div><strong>Langkah berikutnya</strong>${n?`<p>${esc(n[1])}</p>`:'<p>Semua tema sudah selesai dengan nilai baik. Ulangi kuis kapan saja untuk menjaga ingatan.</p>'}</div>${n?`<a class="btn dark" href="#belajar/${n[0].id}">Buka tema ${n[0].icon}</a>`:''}</section>${wotdCard()}</div>`}
async function importRoster(e){
  let ok=0,bad=0;
  for(const f of [...e.target.files].slice(0,200)){
    try{if(f.size>1e6)throw Error();const v=JSON.parse(await f.text());if(!valid(v))throw Error();
      const p=clean(v.profile);if(!p.name)p.name=f.name.replace(/\.json$/i,'').slice(0,60);
      const rec={...p,exportedAt:typeof v.exportedAt==='string'?v.exportedAt:'',learned:[...new Set(v.learned)],dialogs:[...new Set(v.dialogs)],attempts:v.attempts.map(a=>({theme:a.theme,score:a.score,date:a.date}))};
      const k=x=>(x.absen?x.kelas+'|#'+x.absen:x.kelas+'|'+x.name).toLowerCase(),i=roster.findIndex(r=>k(r)===k(rec));
      if(i<0)roster.push(rec);else roster[i]=rec;ok++}catch{bad++}}
  saveRoster();render();toast(`${ok} berkas diimpor${bad?`, ${bad} dilewati (tidak valid)`:''}.`)
}
function exportCsv(){const q=v=>{v=String(v);if(/^[=+\-@\t\r]/.test(v))v="'"+v;return `"${v.replace(/"/g,'""')}"`},head=['No. absen','Nama','Kelas','Kosakata dipelajari','Persen kosakata','Dialog selesai','Rata-rata kuis','Status',...themes.map(t=>'Kuis '+t.title)],body=roster.slice().sort(cmp).map(r=>{const s=stat(r);return [r.absen??'',r.name,r.kelas,s.n,s.pct,s.d,s.avg??'',s.status,...themes.map(t=>s.per[t.id].b??'')]});const url=URL.createObjectURL(new Blob(['\ufeff'+[head,...body].map(r=>r.map(q).join(',')).join('\r\n')],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='arabicmate-kelas.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
function teacher(){
  const all=roster.map((r,i)=>({r,i,s:stat(r)})),kl=[...new Set(all.map(x=>x.r.kelas))].sort((a,b)=>a.localeCompare(b,'id'));
  if(kfilter!=='semua'&&!kl.includes(kfilter))kfilter='semua';
  const rows=all.filter(x=>kfilter==='semua'||x.r.kelas===kfilter).sort((a,b)=>cmp(a.r,b.r)),N=rows.length,all0=all.length,sc=rows.filter(x=>x.s.avg!==null),avg=sc.length?Math.round(sc.reduce((a,x)=>a+x.s.avg,0)/sc.length):'–',dl=rows.reduce((a,x)=>a+x.s.d,0);
  const head=`<section class="t-banner"><div><h1>Ruang guru</h1><p>Impor berkas progres murid untuk melihat gambaran kelas. Data hanya disimpan di browser ini.</p></div><div class="actions"><label class="btn dark file-label">↑ Impor berkas murid<input type="file" id="roster-file" accept="application/json,.json" multiple></label>${all0?'<button class="btn" id="roster-csv">↓ Unduh CSV</button><button class="btn danger" id="roster-clear">Hapus data murid</button>':''}${kl.length>1?`<select id="kls" aria-label="Filter kelas"><option value="semua">Semua kelas</option>${kl.map(k=>`<option value="${esc(k)}" ${k===kfilter?'selected':''}>${k?'Kelas '+esc(k):'Tanpa kelas'}</option>`).join('')}</select>`:''}</div></section>`;
  if(!all0)return head+'<section class="howto"><div><span>🎒</span><b>Murid mengekspor progres</b><p>Setelah masuk dengan kelas dan nomor absen, murid menekan Ekspor progres di halaman Progres belajar.</p></div><div><span>💬</span><b>Kirim berkasnya</b><p>Berkas .json dikirim lewat WhatsApp, email, atau LMS.</p></div><div><span>📊</span><b>Impor di sini</b><p>Pilih banyak berkas sekaligus lewat tombol impor di atas.</p></div></section>';
  return head+`<section class="stats kpi t"><div><div><strong>${N}</strong><small>Murid ditampilkan</small></div></div><div><div><strong>${N?Math.round(rows.reduce((a,x)=>a+x.s.pct,0)/N):0}%</strong><small>Rata-rata kosakata dipelajari</small></div></div><div><div><strong>${avg}</strong><small>Rata-rata kuis (terbaik per tema)</small></div></div><div><div><strong>${rows.filter(x=>x.s.status==='Perlu perhatian').length}</strong><small>Perlu perhatian</small></div></div></section><h2 class="history-title">Per tema</h2><div class="tgrid">${themes.map(t=>{const xs=rows.map(x=>x.s.per[t.id]),q=xs.filter(x=>x.b!==null),kv=N?Math.round(xs.reduce((a,x)=>a+x.n,0)/N/t.words.length*100):0,qa=q.length?Math.round(q.reduce((a,x)=>a+x.b,0)/q.length):null;return `<article class="tcard"><h3><span>${t.icon}</span>${esc(t.title)}</h3><div class="bar-row"><small>Kosakata</small><div class="bar"><i style="width:${kv}%"></i></div><b>${kv}%</b></div><div class="bar-row"><small>Kuis</small><div class="bar ${tone(qa)}"><i style="width:${qa??0}%"></i></div><b>${qa??'–'}</b></div><p>${xs.filter(x=>x.d).length} dari ${N} murid selesai dialog</p></article>`}).join('')}</div><h2 class="history-title">Daftar murid</h2><div class="table-wrap"><table><thead><tr><th>No.</th><th>Murid</th><th>Kosakata</th><th>Dialog</th><th>Kuis</th><th>Terakhir</th><th>Status</th>${themes.map(t=>`<th title="Kuis terbaik: ${esc(t.title)}">${t.icon}</th>`).join('')}<th></th></tr></thead><tbody>${rows.map(({r,i,s})=>`<tr><td><span class="avatar">${r.absen??'?'}</span></td><td><b>${esc(r.name)||'Tanpa nama'}</b><small>${r.kelas?'Kelas '+esc(r.kelas):'Tanpa kelas'}</small></td><td><span class="mini"><span style="width:${s.pct}%"></span></span>${s.n}/${total}</td><td>${s.d}/${themes.length}</td><td><span class="sc ${tone(s.avg)}">${s.avg??'–'}</span></td><td>${s.last?new Date(s.last).toLocaleDateString('id-ID'):'–'}</td><td><span class="chip ${{'Perlu perhatian':'warn',Baik:'ok',Berjalan:'go'}[s.status]||''}">${s.status}</span></td>${themes.map(t=>`<td><span class="sc ${tone(s.per[t.id].b)}">${s.per[t.id].b??'–'}</span></td>`).join('')}<td><button class="x" data-rm="${i}" aria-label="Hapus ${esc(r.name||'murid')}">✕</button></td></tr>`).join('')}</tbody></table></div><p class="note">Urut menurut nomor absen. Kolom ikon tema = nilai kuis terbaik. Status: <b>Perlu perhatian</b> bila rata-rata kuis di bawah 60; <b>Baik</b> bila kosakata ≥ 50% dan kuis ≥ 75. ${dl} penyelesaian dialog tercatat, tetapi ketikan dan rekaman murid tidak ikut tersimpan di berkas progres dan tidak dinilai otomatis, jadi dialog perlu dinilai langsung.</p>`
}
let gateTab='murid',kfilter='semua',gateSeen=false;
const cmp=(a,b)=>a.kelas.localeCompare(b.kelas,'id')||(a.absen??999)-(b.absen??999)||a.name.localeCompare(b.name,'id'),own=p=>session?.role==='murid'?{...p,kelas:session.kelas,absen:session.absen}:p;
const H=t=>{let a=3735928559,b=1103547991;for(const c of 'am:'+t){a=Math.imul(a^c.charCodeAt(0),2654435761);b=Math.imul(b^c.charCodeAt(0),1597334677)}return (a>>>0).toString(16)+(b>>>0).toString(16)},getPin=()=>{try{return localStorage.getItem('arabicmate:guru:pin')}catch{return null}};
const tone=v=>v==null?'':v>=75?'hi':v>=60?'mid':'lo';
function gate(){const pin=getPin();return `<div class="gate${gateSeen?' still':''}"><div class="gate-art"><div class="g-blob b1" style="animation-delay:-${(performance.now()/1000).toFixed(2)}s"></div><div class="g-blob b2" style="animation-delay:-${(performance.now()/1000).toFixed(2)}s"></div><div class="g-copy"><span class="g-word" lang="ar" dir="rtl">أَهْلًا وَسَهْلًا</span><p>Selamat datang di tempat belajar bahasa Arab yang tenang dan menyenangkan.</p><div class="g-chips"><span>📚 Kosakata bergambar</span><span>💬 Latihan percakapan</span><span>📊 Pantauan guru</span></div></div></div><div class="gate-side"><div class="gate-card"><div class="brand"><span class="brand-icon">ع</span><span>arabic<span class="light">mate</span></span></div><h1>Masuk dulu, ya.</h1><div class="tabs" role="tablist"><button role="tab" aria-selected="${gateTab==='murid'}" data-gate="murid">🎒 Saya murid</button><button role="tab" aria-selected="${gateTab==='guru'}" data-gate="guru">🧑‍🏫 Saya guru</button></div>${gateTab==='murid'?'<form id="f-murid"><label>Kelas<input name="kelas" maxlength="12" placeholder="mis. 7A" required autocomplete="off"></label><label>Nomor absen<input name="absen" type="number" min="1" max="99" inputmode="numeric" required></label><label>Nama (opsional)<input name="nama" maxlength="60" autocomplete="off"></label><button class="btn dark">Masuk dashboard →</button></form><p class="note">Progres tersimpan di perangkat ini sesuai kelas dan nomor absen, jadi satu komputer bisa dipakai bergantian.</p>':`<form id="f-guru"><label>${pin?'PIN guru':'Buat PIN guru (4–8 angka)'}<input name="pin" type="password" inputmode="numeric" pattern="[0-9]{4,8}" maxlength="8" required autocomplete="off"></label>${pin?'':'<label>Ulangi PIN<input name="pin2" type="password" inputmode="numeric" pattern="[0-9]{4,8}" maxlength="8" required autocomplete="off"></label>'}<button class="btn dark">${pin?'Masuk':'Simpan PIN dan masuk'} →</button>${pin?'<button type="button" class="text-link" id="pin-reset">Lupa PIN?</button>':''}</form><p class="note">PIN hanya mengunci Ruang guru di browser ini. Ini bukan keamanan tingkat server.</p>`}</div></div></div>`}
function gateRender(){
  $('#app').innerHTML=gate();gateSeen=true;
  document.querySelectorAll('[data-gate]').forEach(b=>b.onclick=()=>{gateTab=b.dataset.gate;gateRender()});
  const fm=$('#f-murid');if(fm)fm.onsubmit=e=>{e.preventDefault();const f=new FormData(fm),kelas=String(f.get('kelas')).trim(),absen=Number(f.get('absen'));if(!/^[A-Za-z0-9 _-]{1,12}$/.test(kelas)||!Number.isInteger(absen)||absen<1||absen>99){toast('Isi kelas (huruf atau angka) dan nomor absen 1–99.');return}setSession({role:'murid',kelas,absen,nama:String(f.get('nama')).trim().slice(0,60)});current='';go('beranda');render()};
  const fg=$('#f-guru');if(fg)fg.onsubmit=e=>{e.preventDefault();const f=new FormData(fg),pin=String(f.get('pin')),ex=getPin();
    if(ex){if(H(pin)!==ex){toast('PIN salah.');return}}else{if(!/^\d{4,8}$/.test(pin)||pin!==String(f.get('pin2'))){toast('PIN harus 4–8 angka dan sama di kedua kolom.');return}try{localStorage.setItem('arabicmate:guru:pin',H(pin))}catch{toast('PIN tidak dapat disimpan di browser ini.');return}}
    setSession({role:'guru'});go('guru');render()};
  if($('#pin-reset'))$('#pin-reset').onclick=()=>{if(confirm('Setel ulang PIN? Data murid yang sudah diimpor di browser ini ikut dihapus.')){try{localStorage.removeItem('arabicmate:guru:pin');localStorage.removeItem('arabicmate:guru:v1')}catch{}roster=[];gateRender()}}
}
function about(){return `<div class="eyebrow">TEMAN BELAJARMU</div><h1 class="page-title">Tentang Arabic Mate.</h1><article class="about"><h2>Belajar dari kehidupan sehari-hari.</h2><p>Arabic Mate adalah media latihan bahasa Arab fusha tingkat pemula. Pelajari kosakata, ingat kembali melalui flashcard, coba simulasi percakapan, lalu evaluasi pemahaman melalui kuis.</p><h2>Ruang latihan mandiri</h2><p>Versi ini berjalan tanpa akun dan database. Percakapan terdiri atas enam giliran per tema. Siswa dapat mengetik dan merekam suara tanpa penilaian otomatis dan tanpa mengunggah rekaman. Dikte memakai layanan pengenalan suara browser jika tersedia. Audio contoh bergantung pada ketersediaan suara bahasa Arab di perangkat. Contoh dialog menggunakan bentuk sapaan maskulin tunggal pada beberapa kalimat.</p><h2>Data dan privasi</h2><p>Progres disimpan secara lokal pada browser. Aplikasi tidak mengirim progres ke server. Tombol impor dan ekspor memungkinkan pemindahan cadangan secara manual. Penyedia hosting tetap dapat mencatat akses website sesuai kebijakannya.</p><h2>Pengembangan selanjutnya</h2><p>Integrasi akun, penyimpanan lintas perangkat, pengelolaan materi, serta AI memerlukan backend dan konfigurasi layanan tersendiri. Materi awal perlu ditinjau pengajar bahasa Arab sebelum digunakan sebagai kurikulum formal.</p><a class="btn dark" href="#tema">Jelajahi tema →</a></article>`}
async function beginRecording(){
  if(isRecording)return;
  if(!navigator.mediaDevices?.getUserMedia||typeof MediaRecorder==='undefined'){
    toast('Rekaman mikrofon tidak didukung. Gunakan browser terbaru pada HTTPS atau localhost.');return;
  }
  try{
    stopDictation();clearRecordedDraft();
    const tId=current;
    const stream=await navigator.mediaDevices.getUserMedia({audio:true});
    if(tId!==current||tab!=='dialog'){stream.getTracks().forEach(track=>track.stop());return}
    recordingStream=stream;
    const parts=[];
    const mediaRecorder=new MediaRecorder(stream);recorder=mediaRecorder;
    recorder.ondataavailable=e=>{if(e.data.size)parts.push(e.data)};
    recorder.onstop=()=>{
      stream.getTracks().forEach(track=>track.stop());
      recordingStream=null;
      isRecording=false;
      if(parts.length){recordedUrl=URL.createObjectURL(new Blob(parts,{type:mediaRecorder.mimeType||'audio/webm'}));toast('Rekaman siap. Putar kembali sebelum mengirim.');}
      else toast('Rekaman suara kosong. Coba lagi.');
      if(tab==='dialog'&&current===tId)render();
    };
    recorder.onerror=()=>toast('Terjadi masalah ketika merekam. Coba lagi.');
    recorder.start();isRecording=true;render();
  }catch(e){recordingStream?.getTracks().forEach(track=>track.stop());recordingStream=null;isRecording=false;toast(e.name==='NotAllowedError'?'Izin mikrofon ditolak. Aktifkan izin mikrofon pada browser.':'Mikrofon tidak dapat digunakan pada perangkat ini.');}
}
function beginDictation(){
  const Recognition=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!Recognition){toast('Fitur dikte bahasa Arab belum tersedia di browser ini.');return}
  try{
    if(isRecording){toast('Hentikan perekaman dahulu sebelum memakai dikte.');return}
    const r=new Recognition();recognition=r;
    r.lang='ar-SA';r.interimResults=false;r.maxAlternatives=1;
    const tId=current;
    r.onresult=e=>{draft=(draft+' '+e.results[0][0].transcript).trim().slice(0,400);if(current===tId&&tab==='dialog')render()};
    r.onerror=e=>{if(e.error!=='aborted')toast('Dikte tidak berhasil. Pastikan izin mikrofon diberikan.')};
    r.onend=()=>{if(recognition===r){recognition=null;isRecognizing=false;if(current===tId&&tab==='dialog')render()}};
    r.start();isRecognizing=true;render();
  }catch{toast('Fitur pengenalan suara tidak bisa dimulai.');}
}
function sendDialogReply(t){
  if(isRecording){toast('Hentikan rekaman sebelum mengirim.');return}
  const text=draft.trim();
  if(!text&&!recordedUrl){toast('Ketik jawaban atau rekam suara terlebih dahulu.');return}
  stopDictation();
  const prompt=t.dialog[step];
  chat.push({ar:prompt[0],id:prompt[1]}, {ar:text,id:recordedUrl?'Jawaban siswa · rekaman suara'+(text?' dan ketikan':''):'Jawaban siswa · ketikan',audio:recordedUrl,me:true});
  recordedUrl='';draft='';step++;
  if(step===t.dialog.length&&!progress.dialogs.includes(t.id)){progress.dialogs.push(t.id);save()}
  render();$('#chat-log')?.scrollTo(0,$('#chat-log').scrollHeight);
}
function speakArabic(text){
  if(!('speechSynthesis' in window)){toast('Audio tidak didukung browser ini.');return}
  const voices=speechSynthesis.getVoices(),voice=voices.find(v=>v.lang.toLowerCase().startsWith('ar'));
  if(!voice){toast('Suara Arab belum tersedia di perangkat ini.');return}
  speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.voice=voice;u.lang='ar';u.rate=.82;speechSynthesis.speak(u);
}
function bind(){
  document.querySelectorAll('[data-tab],[data-next]').forEach(b=>b.onclick=()=>{if(isRecording)stopRecording(true);if(isRecognizing)stopDictation();tab=b.dataset.tab||b.dataset.next;render()});
  const t=themes.find(t=>t.id===current);
  document.querySelectorAll('[data-learn]').forEach(b=>b.onclick=()=>{const id=`${t.id}:${b.dataset.learn}`;progress.learned=progress.learned.includes(id)?progress.learned.filter(x=>x!==id):[...progress.learned,id];save();render()});
  document.querySelectorAll('[data-speak]').forEach(b=>b.onclick=()=>speakArabic(t.words[b.dataset.speak][0]));
  if($('#search'))$('#search').oninput=e=>{search=e.target.value;$('#theme-results').innerHTML=filtered()};
  if($('#filter'))$('#filter').onchange=e=>{filter=e.target.value;$('#theme-results').innerHTML=filtered()};
  if($('#flip'))$('#flip').onclick=()=>{flipped=!flipped;render()};
  ['prev-card','next-card'].forEach(id=>{if($('#'+id))$('#'+id).onclick=()=>{card=(card+(id==='next-card'?1:t.words.length-1))%t.words.length;flipped=false;render()}});
  if($('#dialog-input'))$('#dialog-input').oninput=e=>{draft=e.target.value};
  if($('#start-recording'))$('#start-recording').onclick=beginRecording;
  if($('#stop-recording'))$('#stop-recording').onclick=()=>{stopRecording();render()};
  if($('#discard-recording'))$('#discard-recording').onclick=()=>{clearRecordedDraft();render()};
  if($('#start-dictation'))$('#start-dictation').onclick=beginDictation;
  if($('#stop-dictation'))$('#stop-dictation').onclick=()=>{stopDictation();render()};
  if($('#send-reply'))$('#send-reply').onclick=()=>sendDialogReply(t);
  if($('#restart-dialog'))$('#restart-dialog').onclick=()=>{clearConversation();render()};
  document.querySelectorAll('[data-question]').forEach(b=>b.onclick=()=>{answers[b.dataset.question]=b.dataset.answer;const y=scrollY;render();scrollTo(0,y)});
  if($('#submit-quiz'))$('#submit-quiz').onclick=()=>{const qs=questions(t);if(Object.keys(answers).length!==qs.length)return;submitted=true;progress.attempts.push({theme:t.id,score:Math.round(qs.filter(q=>answers[q.id]===q.answer).length/qs.length*100),date:new Date().toISOString()});save();render();$('.lesson-content').scrollIntoView({behavior:'smooth'})};
  if($('#retry-quiz'))$('#retry-quiz').onclick=()=>{answers={};submitted=false;render()};
  if($('#export'))$('#export').onclick=()=>{const url=URL.createObjectURL(new Blob([JSON.stringify({version:2,exportedAt:new Date().toISOString(),...progress},null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='arabicmate-progres.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};
  if($('#reset'))$('#reset').onclick=()=>{if(confirm('Hapus semua progres pada browser ini? Ekspor cadangan terlebih dahulu jika diperlukan.')){progress={learned:[],dialogs:[],attempts:[],profile:progress.profile};save();render();toast('Progres telah dihapus.')}};
  if($('#import'))$('#import').onchange=async e=>{try{const f=e.target.files[0];if(!f)return;if(f.size>1000000)throw Error();const v=JSON.parse(await f.text());const ids=new Set(themes.map(t=>t.id)),words=new Set(themes.flatMap(t=>t.words.map((_,i)=>`${t.id}:${i}`)));if(![1,2].includes(v.version)||!Array.isArray(v.learned)||!v.learned.every(x=>words.has(x))||!Array.isArray(v.dialogs)||!v.dialogs.every(x=>ids.has(x))||!Array.isArray(v.attempts)||!v.attempts.every(a=>ids.has(a.theme)&&Number.isFinite(a.score)&&a.score>=0&&a.score<=100&&typeof a.date==='string'&&Number.isFinite(Date.parse(a.date))))throw Error();if(session?.role==='murid'&&v.profile&&v.profile.absen&&(Number(v.profile.absen)!==session.absen||String(v.profile.kelas||'').toLowerCase()!==session.kelas.toLowerCase())){toast('Berkas ini milik murid lain.');return}if(!confirm('Ganti progres saat ini dengan progres dari file cadangan?'))return;progress={learned:[...new Set(v.learned)],dialogs:[...new Set(v.dialogs)],attempts:v.attempts.map(a=>({theme:a.theme,score:a.score,date:a.date})),profile:own(v.profile?clean(v.profile):progress.profile)};save();render();toast('Progres berhasil diimpor.')}catch{toast('File progres tidak valid. Gunakan file ekspor Arabic Mate.')}};
  if($('#p-name'))$('#p-name').oninput=e=>{progress.profile.name=e.target.value.slice(0,60);save()};
  if($('#wotd-say'))$('#wotd-say').onclick=()=>speakArabic(wotd().w[0]);
  if($('#logout'))$('#logout').onclick=()=>{clearConversation();current='';setSession(null);location.hash='';render()};
  if($('#kls'))$('#kls').onchange=e=>{kfilter=e.target.value;render()};
  if($('#roster-file'))$('#roster-file').onchange=importRoster;
  if($('#roster-csv'))$('#roster-csv').onclick=exportCsv;
  if($('#roster-clear'))$('#roster-clear').onclick=()=>{if(confirm('Hapus semua data murid dari browser ini?')){roster=[];saveRoster();render()}};
  document.querySelectorAll('[data-rm]').forEach(b=>b.onclick=()=>{roster.splice(+b.dataset.rm,1);saveRoster();render()});
}
window.addEventListener('hashchange',()=>{if(isRecording)stopRecording(true);if(isRecognizing)stopDictation();render();scrollTo(0,0)});render();
