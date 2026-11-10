"use strict";
// PERSONALIZACIÓN: escribe aquí tu correo real antes de publicar. Si está vacío, el formulario no enviará nada.
const CONFIG = { email: "" };
const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const nav = $('#nav'); const menuToggle = $('#menuToggle');
menuToggle.addEventListener('click', () => { const opened=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(opened));menuToggle.textContent=opened?'✕':'☰'; });
$$('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰';}));
const themeToggle=$('#themeToggle');
function setTheme(mode){document.body.classList.toggle('light',mode==='light');themeToggle.textContent=mode==='light'?'☾':'☀';themeToggle.setAttribute('aria-label',mode==='light'?'Activar modo oscuro':'Activar modo claro');try{localStorage.setItem('gm-theme',mode)}catch(e){}}
let savedTheme='dark';try{savedTheme=localStorage.getItem('gm-theme')||'dark'}catch(e){}setTheme(savedTheme);
themeToggle.addEventListener('click',()=>setTheme(document.body.classList.contains('light')?'dark':'light'));
const progress=$('#progress'), backTop=$('#backTop'), sections=$$('main section[id]'), links=$$('.nav a');
let scrollQueued=false;
function onScroll(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%';backTop.classList.toggle('show',scrollY>650);let current='inicio';sections.forEach(s=>{if(s.getBoundingClientRect().top<180)current=s.id});links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));scrollQueued=false}
addEventListener('scroll',()=>{if(!scrollQueued){scrollQueued=true;requestAnimationFrame(onScroll)}},{passive:true});onScroll();backTop.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if('IntersectionObserver' in window && !reduced){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.08});$$('.reveal').forEach(el=>observer.observe(el))}else{$$('.reveal').forEach(el=>el.classList.add('visible'))}
const phrases=['crear experiencias digitales','aprender nuevas tecnologías','convertir ideas en proyectos','diseñar para las personas'];const typed=$('#typed');let phrase=0,letter=0,deleting=false;
function typeStep(){if(reduced){typed.textContent=phrases[0];return}const full=phrases[phrase];letter+=deleting?-1:1;typed.textContent=full.slice(0,letter);let delay=deleting?35:70;if(!deleting&&letter===full.length){deleting=true;delay=1800}else if(deleting&&letter===0){deleting=false;phrase=(phrase+1)%phrases.length;delay=400}setTimeout(typeStep,delay)}typeStep();
function setupFilters(buttonSelector,itemSelector,key,attribute){$$(buttonSelector).forEach(btn=>btn.addEventListener('click',()=>{const value=btn.dataset[key];$$(buttonSelector).forEach(b=>{const active=b===btn;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});$$(itemSelector).forEach(item=>{item.hidden=value!=='all'&&item.dataset[attribute]!==value})}))}
setupFilters('.tab','.skill-card','skill','category');setupFilters('.filter','.project-card','filter','type');
$('#storyToggle').addEventListener('click',()=>{const extra=$('#storyExtra'),button=$('#storyToggle');extra.hidden=!extra.hidden;button.setAttribute('aria-expanded',String(!extra.hidden));button.querySelector('span').textContent=extra.hidden?'＋':'−'});
const dialog=$('#researchModal');$$('.modal-open').forEach(btn=>btn.addEventListener('click',()=>dialog.showModal()));$$('.modal-close,.modal-close-bottom').forEach(btn=>btn.addEventListener('click',()=>dialog.close()));dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
let toastTimer;function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),3400)}
$('#contactForm').addEventListener('submit',e=>{e.preventDefault();if(!CONFIG.email||!CONFIG.email.includes('@')){toast('Configura tu correo en script.js antes de usar el formulario.');$('#formHint').textContent='Falta configurar CONFIG.email en script.js para activar el formulario.';return}const data=new FormData(e.currentTarget);const subject='Portafolio: '+data.get('subject');const body='Hola Gedeon,\n\n'+data.get('message')+'\n\nDe: '+data.get('name')+'\nCorreo: '+data.get('email');const mailto='mailto:'+encodeURIComponent(CONFIG.email)+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);location.href=mailto;toast('Se abrirá tu aplicación de correo para revisar el mensaje.')});
$('#year').textContent=new Date().getFullYear();
if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!reduced){const glow=$('.cursor-glow');addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'},{passive:true});const card=$('.tilt');card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(850px) rotateY(${x*12}deg) rotateX(${-y*12}deg)`});card.addEventListener('pointerleave',()=>card.style.transform='')}
