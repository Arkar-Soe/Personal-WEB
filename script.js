/* Theme, navigation, counters, contact form, media gallery, lightbox (with theme icon fix) */
document.documentElement.classList.add('js');

const root=document.documentElement;
const toggle=document.getElementById('themeToggle');
const navToggle=document.querySelector('.nav__toggle');
const navMenu=document.getElementById('nav-menu');
const toTop=document.querySelector('.to-top');
const counters=document.querySelectorAll('[data-counter]');
const yearEl=document.getElementById('year');
yearEl.textContent=new Date().getFullYear();

/* THEME */
function currentThemeSetting(){return localStorage.getItem('theme-pref')||'dark';}
function applyTheme(v){root.setAttribute('data-theme',v);localStorage.setItem('theme-pref',v);}
function nextTheme(cur){const order=['auto','light','dark'];return order[(order.indexOf(cur)+1)%order.length];}
function cycleTheme(){const cur=currentThemeSetting();const nxt=nextTheme(cur);applyTheme(nxt);updateThemeIcon();}
function updateThemeIcon(){
  if(!toggle)return;
  const cur=currentThemeSetting();
  const icon=toggle.querySelector('[data-theme-icon]');
  icon.textContent=cur==='dark'?'🌚':cur==='light'?'🌞':'🌗';
  const nxt=nextTheme(cur);
  toggle.setAttribute('aria-label',`Switch theme (current: ${cur}, next: ${nxt})`);
}
applyTheme(currentThemeSetting());updateThemeIcon();
toggle?.addEventListener('click',cycleTheme);

/* NAV */
navToggle?.addEventListener('click',()=>{
  const open=navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded',open);
});
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1);
    const tgt=document.getElementById(id);
    if(tgt){
      e.preventDefault();
      const top=tgt.getBoundingClientRect().top+window.scrollY-70;
      window.scrollTo({top,behavior:'smooth'});
      navMenu.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded','false');
    }
  });
});

/* SCROLL TO TOP */
window.addEventListener('scroll',()=>{
  if(window.scrollY>650)toTop.classList.add('is-visible');else toTop.classList.remove('is-visible');
});
toTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* COUNTERS */
const io=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el=entry.target;
      const raw=el.dataset.counter;
      const num=parseInt(raw.replace(/\D/g,''),10);
      animateCount(el,num,raw.replace(/[0-9]/g,''));
      el.classList.add('in');
      io.unobserve(el);
    }
  });
},{threshold:.4});
counters.forEach(c=>io.observe(c));
function animateCount(el,target,suffix){
  if(!Number.isFinite(target)){el.textContent=el.dataset.counter;return;}
  let start=null;const dur=1200;
  function step(ts){
    if(!start)start=ts;
    const p=Math.min((ts-start)/dur,1);
    el.textContent=Math.floor(p*target)+suffix;
    if(p<1)requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* CONTACT FORM (demo) */
document.getElementById('contactForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const form=e.target;
  const status=form.querySelector('.form-status');
  const fields=['name','email','message'];
  let ok=true;
  fields.forEach(id=>{
    const field=form.querySelector('#'+id);
    const err=form.querySelector(`[data-error-for="${id}"]`);
    if(!field.value.trim()||(id==='email'&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(field.value))){
      ok=false;err.textContent='Required';
    }else err.textContent='';
  });
  if(!ok)return;
  status.textContent='Sending...';
  setTimeout(()=>{
    status.textContent='Message sent (demo). Connect a backend for real delivery.';
    form.reset();
  },1100);
});

/* MEDIA FILTERS */
const filterButtons=[...document.querySelectorAll('.filter-btn')];
const mediaCards=[...document.querySelectorAll('.media-card')];
filterButtons.forEach(btn=>{
  btn.addEventListener('click',()=>{
    const f=btn.dataset.filter;
    filterButtons.forEach(b=>b.classList.remove('is-active'));
    btn.classList.add('is-active');
    mediaCards.forEach(card=>{
      const cat=card.dataset.category;
      if(f==='all'||cat===f){card.hidden=false;card.style.animation='fadeIn .5s';}
      else card.hidden=true;
    });
  });
});

/* LIGHTBOX */
const lb=document.getElementById('lightbox');
const lbStage=document.getElementById('lightboxStage');
const lbCaption=document.getElementById('lightboxCaption');
const lbClose=document.getElementById('lightboxClose');
const lbPrev=document.getElementById('lightboxPrev');
const lbNext=document.getElementById('lightboxNext');
let galleryItems=[...document.querySelectorAll('.media-card a')];
let currentIndex=-1;
galleryItems.forEach((link,i)=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    openLightbox(i);
  });
});
function openLightbox(i){
  currentIndex=i;
  renderLightboxItem(galleryItems[i]);
  lb.classList.add('is-open');
  lb.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  trapFocus(lb);
}
function closeLightbox(){
  lb.classList.remove('is-open');
  lb.setAttribute('aria-hidden','true');
  lbStage.innerHTML='';
  document.body.style.overflow='';
  releaseFocus();
}
function nextItem(d){
  currentIndex=(currentIndex+d+galleryItems.length)%galleryItems.length;
  renderLightboxItem(galleryItems[currentIndex]);
}
function renderLightboxItem(link){
  const type=link.dataset.type;
  const href=link.getAttribute('href');
  const cap=link.dataset.caption||'';
  lbStage.innerHTML='';
  if(type==='image'){
    const img=document.createElement('img');
    img.src=href;img.alt=link.querySelector('img')?.alt||'';img.decoding='async';
    lbStage.appendChild(img);
  }else if(type==='video'){
    const video=document.createElement('video');
    video.src=href;video.controls=true;video.autoplay=true;video.playsInline=true;
    lbStage.appendChild(video);
  }else if(type==='youtube'){
    const iframe=document.createElement('iframe');
    iframe.src=href;iframe.width='960';iframe.height='540';
    iframe.allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture';
    iframe.allowFullscreen=true;
    iframe.title='Video player';
    lbStage.appendChild(iframe);
  }
  lbCaption.textContent=cap;
}
lbClose?.addEventListener('click',closeLightbox);
lbPrev?.addEventListener('click',()=>nextItem(-1));
lbNext?.addEventListener('click',()=>nextItem(1));
document.addEventListener('keydown',e=>{
  if(!lb.classList.contains('is-open'))return;
  if(e.key==='Escape')closeLightbox();
  if(e.key==='ArrowRight')nextItem(1);
  if(e.key==='ArrowLeft')nextItem(-1);
});

/* Focus trap */
let prevFocus=null;
function trapFocus(modal){
  prevFocus=document.activeElement;
  const focusables=modal.querySelectorAll('button,[href],iframe,video');
  const first=focusables[0];
  const last=focusables[focusables.length-1];
  modal.addEventListener('keydown',function(e){
    if(e.key!=='Tab')return;
    if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();}
  });
  first?.focus();
}
function releaseFocus(){prevFocus?.focus();}

/* Fade-in animation keyframes */
const animStyle=document.createElement('style');
animStyle.textContent='@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}';
document.head.appendChild(animStyle);