document.documentElement.classList.add('js');

/* =========================================
   DATA CONFIGURATION (EDIT HERE)
   ========================================= */

// 1. HARDWARE & ROBOTICS ARCHIVE
const archiveData = [
  {
    title: "Bluetooth Light Cube & Smart Humidifier",
    year: "2022",
    desc: "IoT device with custom acrylic chassis and Android control app. Features Arduino Nano + HC-05 for RGB lighting and scheduling.",
    tags: ["Arduino", "IoT", "MIT App Inventor"],
    media: [
      { src: "AQbFqLnhJ_Y", caption: "Project Demo Video" },
      { src: "assets/media/NLH/NLHimg2.jpg", caption: "Acrylic chassis assembly" },
      { src: "assets/media/NLH/NLHimg3.jpg", caption: "Internal wiring layout" },
      { src: "assets/media/NLH/NLHimg4.jpg", caption: "Arduino Nano controller" },
      { src: "assets/media/NLH/NLHimg5.jpg", caption: "HC-05 Bluetooth module" },
      { src: "assets/media/NLH/NLHimg7.jpg", caption: "RGB LED array" },
      { src: "assets/media/NLH/NLHimg8.jpg", caption: "Power supply unit" },
      { src: "assets/media/NLH/NLHimg6.jpg", caption: "Circuit board closeup" },
      { src: "assets/media/NLH/NLHimg9.jpg", caption: "Humidifier module integration" },
      { src: "assets/media/NLH/NLHimg10.jpg", caption: "Final assembly - front view" },
      { src: "assets/media/NLH/NLHimg11.jpg", caption: "Final assembly - side view" },
      { src: "assets/media/NLH/NLHimg12.jpg", caption: "Light cube in operation" },
      { src: "assets/media/NLH/NLHappimg.jpg", caption: "Android app - main screen" },
      { src: "assets/media/NLH/NLHappimg1.jpg", caption: "Android app - color picker" },
      { src: "assets/media/NLH/NLHappimg2.jpg", caption: "Android app - scheduling" },
      { src: "assets/media/NLH/NLHappimg3.jpg", caption: "Android app - settings" },
      { src: "assets/media/NLH/NLHappimg4.jpg", caption: "Android app - presets" },
      { src: "assets/media/NLH/NLHappimg5.jpg", caption: "Android app - about" }
    ]
  },
  {
    title: "Bike Signal Indicators",
    year: "2021",
    desc: "Custom signal control unit on Zero PCB using 555 Timer for oscillation and Hall Effect sensors for brake triggering.",
    tags: ["555 Timer", "PCB", "Automotive"],
    media: [
      { src: "mKsYcZC8w_M", caption: "Bike signal demo video" },
      { src: "assets/media/BSN/BikeSignalimg1.jpg", caption: "Complete signal unit" },
      { src: "assets/media/BSN/BikeSignalimg2.jpg", caption: "555 Timer circuit" },
      { src: "assets/media/BSN/BikeSignalimg3.jpg", caption: "Hall Effect sensor" },
      { src: "assets/media/BSN/BikeSignalimg4.jpg", caption: "PCB layout" },
      { src: "assets/media/BSN/BikeSignalimg5.jpg", caption: "LED indicators" },
      { src: "assets/media/BSN/BikeSignalimg6.jpg", caption: "Wiring connections" },
      { src: "assets/media/BSN/BikeSignalimg7.jpg", caption: "Mounted on bike" },
      { src: "assets/media/BSN/BikeSignalimg8.jpg", caption: "Testing setup" }
    ]
  },
  {
    title: "Bluetooth Controlled Robot Arm",
    year: "2020",
    desc: "Multi-axis robotic arm with record/replay function. Controlled via custom Android app.",
    tags: ["Robotics", "Servo", "Android"],
    media: [
      { src: "MJYnwYXgJ5Q", caption: "Robot arm YouTube demo" },
      { src: "assets/media/RobotArm/Robot_Arm_vdo2.mp4", caption: "Record & replay function demo" },
      { src: "assets/media/RobotArm/Robot_Arm_img1.jpg", caption: "Robot arm full view" },
      { src: "assets/media/RobotArm/Robot_Arm_img2.jpg", caption: "Servo motor assembly" },
      { src: "assets/media/RobotArm/Robot_Arm_img3.jpg", caption: "Base rotation mechanism" },
      { src: "assets/media/RobotArm/Robot_Arm_img4.jpg", caption: "Gripper closeup" },
      { src: "assets/media/RobotArm/Robot_Arm_img5.jpg", caption: "Arduino control board" },
      { src: "assets/media/RobotArm/Robot_Arm_img6.jpg", caption: "Bluetooth module wiring" },
      { src: "assets/media/RobotArm/Robot_Arm_app1.jpg", caption: "Android control app" }
    ]
  },
  {
    title: "Transistor Logic Gate Demo",
    year: "2020",
    desc: "Educational board demonstrating AND, OR, NOT, NAND logic using discrete transistors.",
    tags: ["Electronics", "Logic", "Educational"],
    media: [
      { src: "Fvg1I9oV2kw", caption: "Logic gate demonstration video" },
      { src: "assets/media/LOG/logicgateImg1.jpg", caption: "Complete demo board" }
    ]
  },
  {
    title: "Smart Home Integrated System",
    year: "2019",
    desc: "Team Leader. Comprehensive model with smart lock, clap-switch, motion alarm, and fire safety systems.",
    tags: ["Automation", "Sensors", "Leadership"],
    media: [
      { src: "assets/media/SHIS/SHISvdo1.mp4", caption: "Smart home system demo" },
      { src: "assets/media/SHIS/SHISimg1.jpg", caption: "Smart home model overview" }
    ]
  },
  {
    title: "Light Tracking Robot",
    year: "2018",
    desc: "Analog solar-tracker robot using LDRs and comparators without a microcontroller.",
    tags: ["Analog", "L293D", "Solar"],
    media: [
      { src: "mvPUJtOHeak", caption: "Light tracking robot in action" }
    ]
  },
  {
    title: "Line Following Robot",
    year: "2018",
    desc: "IR-guided autonomous robot using Op-Amps for path detection.",
    tags: ["IR", "Autonomous", "Robotics"],
    media: [
      { src: "UUrouKXXIpg", caption: "Line following robot demo" }
    ]
  },
  {
    title: "Useless Machine",
    year: "2017",
    desc: "Electromechanical box that turns itself off immediately after being switched on.",
    tags: ["Mechanical", "Fun"],
    media: [
      { src: "cqrkXZgOC_I", caption: "Useless machine in action" },
      { src: "assets/media/useless/Useless Machineimg1.jpg", caption: "Useless machine internals" }
    ]
  },
  {
    title: "Laser Security Alarm",
    year: "2017",
    desc: "Perimeter security system using laser diode and LDR latching circuit.",
    tags: ["Security", "Laser"],
    media: [
      { src: "0WTkQL9YXLY", caption: "Laser alarm demonstration" },
      { src: "assets/media/LSR/Layserimg1.jpg", caption: "Laser diode setup" },
      { src: "assets/media/LSR/Layserimg2.jpg", caption: "LDR receiver circuit" }
    ]
  },
  {
    title: "RC Vehicle Conversion",
    year: "2015",
    desc: "Converting 4-wheel RC toys into 2-wheel balanced vehicles.",
    tags: ["Modding", "RC"],
    media: [
      { src: "assets/media/RC/RCv1v2vdo1.mp4", caption: "RC conversion demo" },
      { src: "assets/media/RC/RCv1v2img1.jpg", caption: "Converted RC vehicle" }
    ]
  }
];

// 2. SKILLS SHOWCASE DATA (No year displayed)
const showcaseData = [
  {
    title: "Precision Soldering Skills",
    desc: "Demonstrating soldering techniques on various PCB projects.",
    tags: ["Soldering", "SMD", "PCB Assembly"],
    media: [
      { src: "assets/media/MIX/Soldering/solderingvdo1.mp4", caption: "Precision Soldering Skills" },
      { src: "assets/media/MIX/Soldering/solderingvdo2.mp4", caption: "Precision Soldering Skills" },
      { src: "assets/media/MIX/Soldering/solderingimg1.jpg", caption: "Precision Soldering Skills" },
      { src: "assets/media/MIX/Soldering/solderingimg2.jpg", caption: "Precision Soldering Skills" },
      { src: "assets/media/MIX/Soldering/solderingimg3.jpg", caption: "Precision Soldering Skills" },
      { src: "assets/media/MIX/Soldering/solderingimg4.jpg", caption: "Precision Soldering Skills" },
      { src: "assets/media/MIX/Soldering/solderingimg5.jpg", caption: "Precision Soldering Skills" },
      { src: "assets/media/MIX/Soldering/solderingimg6.jpg", caption: "Precision Soldering Skills" },
      { src: "assets/media/MIX/Soldering/solderingimg7.jpg", caption: "Precision Soldering Skills" },
      { src: "assets/media/MIX/Soldering/solderingimg8.jpg", caption: "Precision Soldering Skills" },
      { src: "assets/media/MIX/Soldering/solderingimg9.jpg", caption: "Precision Soldering Skills" },
      { src: "assets/media/MIX/Soldering/solderingimg10.jpg", caption: "Precision Soldering Skills" }
    ]
  },
  {
  title: "Milestones & Community Impact",
  desc: "Competitions won, knowledge shared, and skills demonstrated through active industry participation.",
  tags: ["Awards", "Training", "Leadership"],
  media: [
    { src: "assets/media/MIX/Achievements/ACPimg1.jpg", caption: "Access Point Installation Project" },
    { src: "assets/media/MIX/Achievements/pjshowimg1.jpg", caption: "Project Show Competition Entry" },
    { src: "assets/media/MIX/Achievements/secuimg1.jpg", caption: "Security Systems Training Session" },
    { src: "assets/media/MIX/Achievements/secuimg2.jpg", caption: "CCTV Workshop Presentation" },
    { src: "assets/media/MIX/Achievements/secuimg3.jpg", caption: "Industry Knowledge Exchange" }
  ]
}
];

/* =========================================
   HELPER FUNCTIONS
   ========================================= */

// Get source from media item (handles both old string format and new object format)
function getMediaSrc(mediaItem) {
  if (typeof mediaItem === 'string') return mediaItem;
  if (typeof mediaItem === 'object' && mediaItem.src) return mediaItem.src;
  return '';
}

// Get caption from media item
function getMediaCaption(mediaItem, fallbackTitle) {
  if (typeof mediaItem === 'object' && mediaItem.caption) return mediaItem.caption;
  return fallbackTitle || '';
}

// Check if a string is a YouTube video ID (11 characters, no slashes or dots)
function isYouTubeId(str) {
  if (!str || typeof str !== 'string') return false;
  return str.length === 11 && !str.includes('/') && !str.includes('.');
}

// Check if a string is a local video file
function isLocalVideo(str) {
  if (!str || typeof str !== 'string') return false;
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv'];
  return videoExtensions.some(ext => str.toLowerCase().endsWith(ext));
}

// Check if a string is an image file
function isImageFile(str) {
  if (!str || typeof str !== 'string') return false;
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp'];
  return imageExtensions.some(ext => str.toLowerCase().endsWith(ext));
}

// Get thumbnail URL for media item
function getThumbUrl(media) {
  const src = getMediaSrc(media);
  if (isYouTubeId(src)) {
    return `https://img.youtube.com/vi/${src}/mqdefault.jpg`;
  }
  if (isLocalVideo(src)) {
    return 'assets/media/video-placeholder.jpg';
  }
  return src;
}

// Get embed/link URL for media item
function getMediaUrl(media) {
  const src = getMediaSrc(media);
  if (isYouTubeId(src)) {
    return `https://www.youtube.com/embed/${src}`;
  }
  return src;
}

// Get media type
function getMediaType(media) {
  const src = getMediaSrc(media);
  if (isYouTubeId(src)) return 'youtube';
  if (isLocalVideo(src)) return 'video';
  if (src && src.startsWith('VIDEO:')) return 'youtube';
  return 'image';
}

/* =========================================
   RENDERING LOGIC
   ========================================= */

// Generic function to render archive-style cards
function renderArchiveCards(data, containerId, dataSource, showYear = true) {
  const container = document.getElementById(containerId);
  if (!container) return;

  data.forEach((item, itemIndex) => {
    let thumb = "assets/media/placeholder.jpg"; 
    let type = "image";
    let link = "#";

    if (item.media && item.media.length > 0) {
      const first = item.media[0];
      const firstSrc = getMediaSrc(first);
      type = getMediaType(first);
      link = getMediaUrl(first);
      
      if (type === 'video') {
        const imageInMedia = item.media.find(m => isImageFile(getMediaSrc(m)));
        thumb = imageInMedia ? getMediaSrc(imageInMedia) : 'assets/media/video-placeholder.jpg';
      } else {
        thumb = getThumbUrl(first);
      }
    }

    const tagsHtml = item.tags.map(t => `<span class="tag tech-tag">${t}</span>`).join('');
    
    let dotsHtml = '';
    if (item.media && item.media.length > 1) {
      dotsHtml = `<div class="media-dots">`;
      item.media.forEach((m, idx) => {
        const mType = getMediaType(m);
        const mLink = getMediaUrl(m);
        const mCaption = getMediaCaption(m, item.title);
        let mThumb;
        
        if (mType === 'video') {
          const imageInMedia = item.media.find(med => isImageFile(getMediaSrc(med)));
          mThumb = imageInMedia ? getMediaSrc(imageInMedia) : 'assets/media/video-placeholder.jpg';
        } else {
          mThumb = getThumbUrl(m);
        }
        
        const activeClass = idx === 0 ? 'active' : '';
        const isVideo = mType === 'youtube' || mType === 'video';
        dotsHtml += `<button class="media-dot ${activeClass} ${isVideo ? 'is-video' : ''}" data-src="${mLink}" data-thumb="${mThumb}" data-type="${mType}" data-index="${idx}" data-item="${itemIndex}" data-source="${dataSource}" data-caption="${mCaption}" aria-label="View media ${idx + 1}${isVideo ? ' (video)' : ''}"></button>`;
      });
      dotsHtml += `</div>`;
    }

    const isVideoType = type === 'youtube' || type === 'video';
    
    // Year badge - only show if showYear is true and year exists
    const yearBadgeHtml = (showYear && item.year) ? `<span class="year-badge-floating">${item.year}</span>` : '';
    
    // Get caption for the first media item
    const firstCaption = item.media && item.media.length > 0 ? getMediaCaption(item.media[0], item.title) : item.title;

    const html = `
      <article class="archive-item" data-item-index="${itemIndex}" data-source="${dataSource}">
        <div class="project-media">
          ${yearBadgeHtml}
          <a href="${link}" data-type="${type}" data-caption="${firstCaption}" data-item="${itemIndex}" data-source="${dataSource}" class="project-main-link">
            <img src="${thumb}" alt="${item.title}" loading="lazy" class="project-thumb">
            <span class="badge-video" style="display: ${isVideoType ? 'block' : 'none'}">▶</span>
          </a>
          ${dotsHtml}
        </div>
        <div class="project-content">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <div class="tags-list">${tagsHtml}</div>
        </div>
      </article>
    `;
    container.insertAdjacentHTML('beforeend', html);
  });
}

function renderArchive() {
  renderArchiveCards(archiveData, 'archive-container', 'archive', true);
}

function renderShowcase() {
  // Pass false for showYear to hide year badges in showcase section
  renderArchiveCards(showcaseData, 'showcase-container', 'showcase', false);
}

// Init
window.addEventListener('DOMContentLoaded', () => {
  renderArchive();
  renderShowcase();
  initLightbox();
  initMediaDots();
});


/* =========================================
   SHARED UTILS
   ========================================= */

const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.getElementById('nav-menu');
const toTop = document.querySelector('.to-top');
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Theme
function currentTheme() { 
  return localStorage.getItem('theme-pref') || 'dark'; 
}

function applyTheme(v) { 
  root.setAttribute('data-theme', v); 
  localStorage.setItem('theme-pref', v); 
}

function cycleTheme() { 
  const nxt = currentTheme() === 'dark' ? 'light' : 'dark'; 
  applyTheme(nxt); 
  updateIcon(); 
}

function updateIcon() { 
  if (toggle) toggle.querySelector('span').textContent = currentTheme() === 'dark' ? '🌚' : '🌞'; 
}

applyTheme(currentTheme()); 
updateIcon();
toggle?.addEventListener('click', cycleTheme);

// Nav
navToggle?.addEventListener('click', () => {
  const open = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', open);
});

// Scroll Top
window.addEventListener('scroll', () => { 
  toTop?.classList.toggle('is-visible', window.scrollY > 500);
});

toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* =========================================
   MEDIA DOTS - Switch thumbnail in card
   ========================================= */

function initMediaDots() {
  document.body.addEventListener('click', e => {
    const dot = e.target.closest('.media-dot');
    if (!dot) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const card = dot.closest('.archive-item');
    if (!card) return;
    
    const thumb = dot.dataset.thumb;
    const src = dot.dataset.src;
    const type = dot.dataset.type;
    const caption = dot.dataset.caption;
    
    const img = card.querySelector('.project-thumb');
    if (img) {
      img.src = thumb;
    }
    
    const link = card.querySelector('.project-main-link');
    if (link) {
      link.href = src;
      link.dataset.type = type;
      link.dataset.caption = caption;
      
      const badge = link.querySelector('.badge-video');
      if (badge) {
        const isVideo = type === 'youtube' || type === 'video';
        badge.style.display = isVideo ? 'block' : 'none';
      }
    }
    
    const allDots = card.querySelectorAll('.media-dot');
    allDots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
}

/* =========================================
   LIGHTBOX
   ========================================= */

const lb = document.getElementById('lightbox');
const lbStage = document.getElementById('lightboxStage');
const lbCaption = document.getElementById('lightboxCaption');
const lbClose = document.getElementById('lightboxClose');
const lbPrev = document.getElementById('lightboxPrev');
const lbNext = document.getElementById('lightboxNext');

let currentLightboxData = {
  items: [],
  currentIndex: 0,
  title: ''
};

// Helper function to get the correct data source
function getDataSource(source) {
  if (source === 'showcase') return showcaseData;
  return archiveData;
}

function initLightbox() {
  document.body.addEventListener('click', e => {
    const link = e.target.closest('a[data-type]');
    if (link) {
      e.preventDefault();
      
      const itemIndex = link.dataset.item;
      const caption = link.dataset.caption;
      const source = link.dataset.source || 'archive';
      const dataArray = getDataSource(source);
      
      if (itemIndex !== undefined && dataArray[itemIndex]) {
        const mediaItems = dataArray[itemIndex].media;
        const itemTitle = dataArray[itemIndex].title;
        currentLightboxData.items = mediaItems;
        currentLightboxData.title = itemTitle;
        
        const currentSrc = link.href;
        let foundIndex = 0;
        mediaItems.forEach((m, idx) => {
          const mediaUrl = getMediaUrl(m);
          const mediaSrc = getMediaSrc(m);
          if (currentSrc.includes(mediaSrc) || currentSrc === mediaUrl || currentSrc.endsWith(mediaSrc)) {
            foundIndex = idx;
          }
        });
        currentLightboxData.currentIndex = foundIndex;
        
        // Get the caption for the current media item
        const currentCaption = getMediaCaption(mediaItems[foundIndex], itemTitle);
        openLightbox(link.href, link.dataset.type, currentCaption);
        updateNavButtons();
      } else {
        currentLightboxData.items = [{ src: link.href, caption: caption }];
        currentLightboxData.currentIndex = 0;
        currentLightboxData.title = caption || '';
        openLightbox(link.href, link.dataset.type, caption);
        updateNavButtons();
      }
    }
  });
  
  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  
  lb?.addEventListener('click', e => { 
    if (e.target === lb) closeLightbox(); 
  });
  
  document.addEventListener('keydown', e => { 
    if (e.key === 'Escape') closeLightbox();
    if (lb?.classList.contains('is-open')) {
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    }
  });
  
  if (lbPrev) lbPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(-1);
  });
  
  if (lbNext) lbNext.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateLightbox(1);
  });
}

function openLightbox(src, type, caption) {
  if (!lb) return;
  
  lbStage.innerHTML = '';
  lbCaption.textContent = caption || '';
  
  if (type === 'image') {
    const img = document.createElement('img');
    img.src = src;
    img.alt = caption || 'Image';
    img.loading = 'eager';
    lbStage.appendChild(img);
  } else if (type === 'youtube') {
    const iframe = document.createElement('iframe');
    let embedUrl = src;
    if (!embedUrl.includes('?')) {
      embedUrl += '?autoplay=1&rel=0&modestbranding=1&enablejsapi=1';
    } else {
      embedUrl += '&autoplay=1&rel=0&modestbranding=1&enablejsapi=1';
    }
    iframe.src = embedUrl;
    iframe.width = "960";
    iframe.height = "540";
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.style.border = 'none';
    iframe.style.borderRadius = '10px';
    lbStage.appendChild(iframe);
  } else if (type === 'video') {
    const video = document.createElement('video');
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.style.maxWidth = '100%';
    video.style.maxHeight = '75vh';
    video.style.borderRadius = '10px';
    video.style.boxShadow = '0 8px 24px -8px rgba(0, 0, 0, 0.5)';
    
    video.onerror = function() {
      lbStage.innerHTML = `
        <div class="video-error">
          <p>⚠️ Unable to load video</p>
          <p style="font-size: 0.8rem; opacity: 0.7;">${src}</p>
        </div>
      `;
    };
    
    lbStage.appendChild(video);
  }
  
  lb.classList.add('is-open');
  lb.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lb) return;
  
  lb.classList.remove('is-open');
  lb.setAttribute('aria-hidden', 'true');
  
  const video = lbStage.querySelector('video');
  if (video) {
    video.pause();
    video.src = '';
  }
  
  lbStage.innerHTML = '';
  document.body.style.overflow = '';
  
  currentLightboxData = {
    items: [],
    currentIndex: 0,
    title: ''
  };
}

function navigateLightbox(direction) {
  const items = currentLightboxData.items;
  if (items.length <= 1) return;
  
  let newIndex = currentLightboxData.currentIndex + direction;
  
  if (newIndex < 0) newIndex = items.length - 1;
  if (newIndex >= items.length) newIndex = 0;
  
  currentLightboxData.currentIndex = newIndex;
  
  const media = items[newIndex];
  const type = getMediaType(media);
  const src = getMediaUrl(media);
  const caption = getMediaCaption(media, currentLightboxData.title);
  
  openLightbox(src, type, caption);
  updateNavButtons();
}

function updateNavButtons() {
  const hasMultiple = currentLightboxData.items.length > 1;
  
  if (lbPrev) {
    lbPrev.style.display = hasMultiple ? 'flex' : 'none';
  }
  if (lbNext) {
    lbNext.style.display = hasMultiple ? 'flex' : 'none';
  }
}
