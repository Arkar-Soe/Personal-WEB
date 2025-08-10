const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.getElementById('nav-menu');
const toTop = document.querySelector('.to-top');
const counters = document.querySelectorAll('[data-counter]');
const yearEl = document.getElementById('year');

yearEl.textContent = new Date().getFullYear();

function currentThemeSetting(){
  return localStorage.getItem('theme-pref') || 'auto';
}
function applyTheme(value){
  root.setAttribute('data-theme', value);
  localStorage.setItem('theme-pref', value);
}
function cycleTheme(){
  const order = ['auto','light','dark'];
  const cur = currentThemeSetting();
  applyTheme(order[(order.indexOf(cur)+1)%order.length]);
  updateThemeIcon();
}
function updateThemeIcon(){
  if(!toggle) return;
  const cur = currentThemeSetting();
  const icon = toggle.querySelector('[data-theme-icon]');
  if(cur==='dark') icon.textContent='🌚';
  else if(cur==='light') icon.textContent='🌞';
  else icon.textContent='🌗';
}
applyTheme(currentThemeSetting());
updateThemeIcon();
toggle?.addEventListener('click',cycleTheme);

// Mobile nav
navToggle?.addEventListener('click',()=>{
  const open = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded',open);
});

// Scroll to top
window.addEventListener('scroll',()=>{
  if(window.scrollY>650) toTop.classList.add('is-visible'); else toTop.classList.remove('is-visible');
});
toTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// Smooth internal anchors & close mobile menu
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1);
    const tgt=document.getElementById(id);
    if(tgt){
      e.preventDefault();
      const top = tgt.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({top,behavior:'smooth'});
      navMenu.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded','false');
    }
  });
});

// Counter animation
const io = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el = entry.target;
      const raw = el.dataset.counter;
      const numeric = parseInt(raw.replace(/\D/g,''),10);
      animateCount(el, numeric, raw.replace(/[0-9]/g,''));
      el.classList.add('in');
      io.unobserve(el);
    }
  });
},{threshold:.4});
counters.forEach(c=>io.observe(c));

function animateCount(el, target, suffix){
  if(!Number.isFinite(target)){el.textContent = el.dataset.counter; return;}
  let start = null;
  const duration = 1200;
  function step(ts){
    if(!start) start=ts;
    const p = Math.min((ts-start)/duration,1);
    el.textContent = Math.floor(p*target) + suffix;
    if(p<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// Contact form demo (no backend)
document.getElementById('contactForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const form = e.target;
  const status = form.querySelector('.form-status');
  const fields = ['name','email','message'];
  let ok=true;
  fields.forEach(id=>{
    const field=form.querySelector('#'+id);
    const err=form.querySelector(`[data-error-for="${id}"]`);
    if(!field.value.trim() || (id==='email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(field.value))){
      ok=false; err.textContent='Required';
    }else err.textContent='';
  });
  if(!ok) return;
  status.textContent='Sending...';
  setTimeout(()=>{
    status.textContent='Message sent (demo). Connect a service (Formspree / API) for production.';
    form.reset();
  },1200);
});