// Theme handling
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.getElementById('nav-menu');
const toTop = document.querySelector('.to-top');
const counters = document.querySelectorAll('[data-counter]');
const yearEl = document.getElementById('year');

yearEl.textContent = new Date().getFullYear();

function currentThemeSetting() {
  return localStorage.getItem('theme-pref') || 'auto';
}
function applyTheme(value) {
  root.setAttribute('data-theme', value);
  localStorage.setItem('theme-pref', value);
}
function cycleTheme() {
  const order = ['auto','light','dark'];
  const cur = currentThemeSetting();
  const idx = order.indexOf(cur);
  applyTheme(order[(idx + 1) % order.length]);
  updateThemeIcon();
}
function updateThemeIcon() {
  if (!toggle) return;
  const cur = currentThemeSetting();
  const icon = toggle.querySelector('[data-theme-icon]');
  if (cur === 'dark') icon.textContent = '🌚';
  else if (cur === 'light') icon.textContent = '🌞';
  else icon.textContent = '🌗';
}
applyTheme(currentThemeSetting());
updateThemeIcon();
toggle?.addEventListener('click', cycleTheme);

// Mobile nav
navToggle?.addEventListener('click', () => {
  const open = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', open);
});

// Scroll to top button
window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    toTop.classList.add('is-visible');
  } else {
    toTop.classList.remove('is-visible');
  }
});
toTop.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

// Intersection observer for counters
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.counter.replace(/\D/g,''),10);
      animateCount(el, target);
      el.classList.add('in');
      io.unobserve(el);
    }
  });
},{threshold:.35});
counters.forEach(c => io.observe(c));

function animateCount(el, target) {
  if (!Number.isFinite(target)) { el.textContent = el.dataset.counter; return; }
  let start = 0;
  const dur = 1200;
  const step = timestamp => {
    if (!el._start) el._start = timestamp;
    const progress = Math.min((timestamp - el._start)/dur,1);
    el.textContent = Math.floor(progress * target) + el.dataset.counter.replace(/[0-9]/g,'');
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// Contact form (client-side demo only)
document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  const status = form.querySelector('.form-status');
  let valid = true;
  ['name','email','message'].forEach(id => {
    const field = form.querySelector('#' + id);
    const err = form.querySelector(`[data-error-for="${id}"]`);
    if (!field.value.trim() || (id==='email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(field.value))) {
      valid = false;
      err.textContent = 'Required';
    } else {
      err.textContent = '';
    }
  });
  if (!valid) return;
  status.textContent = 'Sending...';
  setTimeout(() => {
    status.textContent = 'Message sent (demo). Integrate a backend or service like Formspree.';
    form.reset();
  }, 1200);
});

// Smooth anchor offset (optional, ensure header offset)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',evt=>{
    const id=a.getAttribute('href').substring(1);
    const target=document.getElementById(id);
    if(target){
      evt.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({top,behavior:'smooth'});
      navMenu.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded','false');
    }
  });
});