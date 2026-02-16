document.documentElement.classList.add('js');

/* =========================================
   CLOUDINARY CONFIGURATION
   ========================================= */

const CLOUDINARY_CLOUD = 'dmdl2pdly';
const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUDINARY_CLOUD}`;

/* =========================================
   DATA CONFIGURATION
   ========================================= */

// 1. HARDWARE & ROBOTICS ARCHIVE
const archiveData = [
  {
    title: "Bluetooth Light Cube & Smart Humidifier",
    year: "2022",
    desc: "IoT device with custom acrylic chassis and Android control app. Features Arduino Nano + HC-05 for RGB lighting and scheduling.",
    tags: ["Arduino", "IoT", "MIT App Inventor"],
    media: [
      { src: "AQbFqLnhJ_Y", caption: "Night Light Humidifier - Full Demo" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263295/NLHimg1_ej8fhy.jpg", caption: "Completed Light Cube - Illuminated" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263345/NLHimg2_uvtskn.jpg", caption: "Acrylic Chassis Assembly" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263338/NLHimg3_s9eust.jpg", caption: "Internal Component Layout" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263337/NLHimg4_jmz7js.jpg", caption: "Arduino Nano & HC-05 Bluetooth Module" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263341/NLHimg5_kyvbsq.jpg", caption: "RGB LED Strip Installation" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263329/NLHimg6_ykxabu.jpg", caption: "Power Supply & Wiring" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263334/NLHimg7_defgfu.jpg", caption: "Humidifier Module Integration" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263313/NLHimg8_gvewte.jpg", caption: "Circuit Board Connections" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263341/NLHimg9_xktdcs.jpg", caption: "Water Tank Assembly" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263296/NLHimg10_unlx1y.jpg", caption: "Final Assembly - Front View" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263325/NLHimg11_qiosc9.jpg", caption: "Final Assembly - Side View" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263322/NLHimg12_j4lycs.jpg", caption: "Light Cube in Operation - Blue Mode" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263320/NLHimg13_s8wky3.jpg", caption: "Light Cube in Operation - RGB Mode" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263314/NLHimg14_qjloaf.jpg", caption: "Light Cube in Operation - Ambient Mode" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263341/NLHappimg_rkl2lk.jpg", caption: "Android App - Main Dashboard" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263289/NLHappimg1_iyfshn.jpg", caption: "Android App - Color Selection" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263294/NLHappimg2_qvmuqg.jpg", caption: "Android App - Brightness Control" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263293/NLHappimg3_emgpyu.jpg", caption: "Android App - Timer Settings" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263293/NLHappimg4_seajtg.jpg", caption: "Android App - Mode Selection" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263290/NLHappimg5_ppztjo.jpg", caption: "Android App - About & Info" }
    ]
  },
  {
    title: "Bike Signal Indicators",
    year: "2021",
    desc: "Custom signal control unit on Zero PCB using 555 Timer for oscillation and Hall Effect sensors for brake triggering.",
    tags: ["555 Timer", "PCB", "Automotive"],
    media: [
      { src: "mKsYcZC8w_M", caption: "Bike Signal Indicators - Demo Video" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263325/BikeSignalimg1_lfxj5x.jpg", caption: "Complete Signal Control Unit" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263329/BikeSignalimg2_r0y8bt.jpg", caption: "555 Timer Oscillator Circuit" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263320/BikeSignalimg3_fmytuw.jpg", caption: "Hall Effect Brake Sensor" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263328/BikeSignalimg4_muiydn.jpg", caption: "Zero PCB Layout & Soldering" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263321/BikeSignalimg5_migsh0.jpg", caption: "LED Indicator Array" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263317/BikeSignalimg6_jjqgug.jpg", caption: "Wiring & Power Connections" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263328/BikeSignalimg7_kds0n6.jpg", caption: "Unit Mounted on Motorcycle" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263325/BikeSignalimg8_nw6sv3.jpg", caption: "Signal Indicators in Action" }
    ]
  },
  {
    title: "Bluetooth Controlled Robot Arm",
    year: "2020",
    desc: "Multi-axis robotic arm with record/replay function. Controlled via custom Android app.",
    tags: ["Robotics", "Servo", "Android"],
    media: [
      { src: "MJYnwYXgJ5Q", caption: "Robot Arm - YouTube Demo" },
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771263406/Robot_Arm_vdo2_ianxce.mp4", caption: "Record & Replay Function Demo" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263309/Robot_Arm_img1_j0y4ex.jpg", caption: "Complete Robot Arm Assembly" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263347/Robot_Arm_img2_lq8ml7.jpg", caption: "Servo Motor Mechanism" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263319/Robot_Arm_img3_awnhrj.jpg", caption: "Base Rotation Joint" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263311/Robot_Arm_img4_vuq1qg.jpg", caption: "Gripper Claw Mechanism" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263310/Robot_Arm_img5_szsqvf.jpg", caption: "Arduino Controller Board" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263310/Robot_Arm_img6_t4mxfu.jpg", caption: "Bluetooth Module & Wiring" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263302/Robot_Arm_app1_xffe0g.jpg", caption: "Android Control Application" }
    ]
  },
  {
    title: "Transistor Logic Gate Demo",
    year: "2020",
    desc: "Educational board demonstrating AND, OR, NOT, NAND logic using discrete transistors.",
    tags: ["Electronics", "Logic", "Educational"],
    media: [
      { src: "Fvg1I9oV2kw", caption: "Logic Gate Demonstration Video" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263334/logicgateImg1_jq2lug.jpg", caption: "Complete Logic Gate Demo Board" }
    ]
  },
  {
    title: "Smart Home Integrated System",
    year: "2019",
    desc: "Team Leader. Comprehensive model with smart lock, clap-switch, motion alarm, and fire safety systems.",
    tags: ["Automation", "Sensors", "Leadership"],
    media: [
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771266305/SHISvdo1_fwlpk1.mp4", caption: "Smart Home System - Full Demo" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263305/SHISimg1_rh7axj.png", caption: "Smart Home Model Overview" }
    ]
  },
  {
    title: "Light Tracking Robot",
    year: "2018",
    desc: "Analog solar-tracker robot using LDRs and comparators without a microcontroller.",
    tags: ["Analog", "L293D", "Solar"],
    media: [
      { src: "mvPUJtOHeak", caption: "Light Tracking Robot in Action" }
    ]
  },
  {
    title: "Line Following Robot",
    year: "2018",
    desc: "IR-guided autonomous robot using Op-Amps for path detection.",
    tags: ["IR", "Autonomous", "Robotics"],
    media: [
      { src: "UUrouKXXIpg", caption: "Line Following Robot Demo" }
    ]
  },
  {
    title: "Useless Machine",
    year: "2017",
    desc: "Electromechanical box that turns itself off immediately after being switched on.",
    tags: ["Mechanical", "Fun"],
    media: [
      { src: "cqrkXZgOC_I", caption: "Useless Machine in Action" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263299/Useless_Machineimg1_ponjul.jpg", caption: "Internal Mechanism & Switch" }
    ]
  },
  {
    title: "Laser Security Alarm",
    year: "2017",
    desc: "Perimeter security system using laser diode and LDR latching circuit.",
    tags: ["Security", "Laser"],
    media: [
      { src: "0WTkQL9YXLY", caption: "Laser Alarm Demonstration" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263291/Layserimg1_jbtt1e.jpg", caption: "Laser Diode Transmitter Setup" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263298/Layserimg2_krp4ph.jpg", caption: "LDR Receiver & Alarm Circuit" }
    ]
  },
  {
    title: "RC Vehicle Conversion",
    year: "2015",
    desc: "Converting 4-wheel RC toys into 2-wheel balanced vehicles.",
    tags: ["Modding", "RC"],
    media: [
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771266418/RCv1v2vdo1_oadkno.mp4", caption: "RC Conversion - Test Run" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263301/RCv1v2img1_qphtcm.png", caption: "Converted 2-Wheel RC Vehicle" }
    ]
  }
];

// 2. SKILLS SHOWCASE DATA (No year displayed)
const showcaseData = [
  {
    title: "Precision Soldering Skills",
    desc: "Demonstrating professional soldering techniques including SMD work, through-hole components, and PCB assembly.",
    tags: ["Soldering", "SMD", "PCB Assembly"],
    media: [
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771263383/solderingvdo1_fqfp3r.mp4", caption: "Through-Hole Soldering Technique" },
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771266212/solderingvdo2_r4jlg4.mp4", caption: "SMD Component Soldering" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263350/solderingimg1_ox06o8.jpg", caption: "Soldering Station Setup" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263350/solderingimg2_fiwnpy.jpg", caption: "PCB Component Placement" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263330/solderingimg3_ywfqxt.jpg", caption: "Flux Application Process" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263327/solderingimg4_f7cpsp.jpg", caption: "Clean Solder Joint Close-up" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263331/solderingimg5_puxmqg.jpg", caption: "Multi-Pin IC Soldering" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263330/solderingimg6_hmvgvr.jpg", caption: "Wire Tinning & Preparation" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263348/solderingimg7_lampof.jpg", caption: "Fine Pitch Component Work" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263350/solderingimg8_e8ej0a.jpg", caption: "Completed PCB - Top Side" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263341/solderingimg9_ilfjy7.jpg", caption: "Completed PCB - Bottom Side" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263336/solderingimg10_hymjzu.jpg", caption: "Quality Inspection & Testing" }
    ]
  },
  {
    title: "Milestones & Community Impact",
    desc: "Competitions won, knowledge shared, and skills demonstrated through active industry participation and training sessions.",
    tags: ["Awards", "Training", "Leadership"],
    media: [
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263312/ACPimg1_aoxuge.jpg", caption: "Enterprise Access Point Installation" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263288/pjshowimg1_q6po4i.jpg", caption: "Technical Project Exhibition" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263297/secuimg1_xphz2a.jpg", caption: "Security Systems Workshop - Presentation" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263300/secuimg2_kovxll.jpg", caption: "CCTV & Security Training - Live Demo" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263298/secuimg3_jr4fso.jpg", caption: "Industry Knowledge Exchange Session" }
    ]
  },
  {
    title: "Electronics Repair & Troubleshooting",
    desc: "Diagnosing and repairing various electronic devices including phones, sensors, and consumer electronics.",
    tags: ["Repair", "Troubleshooting", "Electronics"],
    media: [
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771263387/phrepairvdo1_lvhdwp.mp4", caption: "Phone Repair - Component Level Fix" },
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771267603/IRsensorvdo1_kjct6y.3gp", caption: "IR Sensor Testing & Calibration" }
    ]
  }
];

/* =========================================
   HELPER FUNCTIONS
   ========================================= */

function getMediaSrc(mediaItem) {
  if (typeof mediaItem === 'string') return mediaItem;
  if (typeof mediaItem === 'object' && mediaItem.src) return mediaItem.src;
  return '';
}

function getMediaCaption(mediaItem, fallbackTitle) {
  if (typeof mediaItem === 'object' && mediaItem.caption) return mediaItem.caption;
  return fallbackTitle || '';
}

function isYouTubeId(str) {
  if (!str || typeof str !== 'string') return false;
  if (str.length !== 11) return false;
  if (str.includes('/') || str.includes('.') || str.includes('http')) return false;
  return true;
}

function isLocalVideo(str) {
  if (!str || typeof str !== 'string') return false;
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv', '.3gp'];
  return videoExtensions.some(ext => str.toLowerCase().endsWith(ext));
}

function isImageFile(str) {
  if (!str || typeof str !== 'string') return false;
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp'];
  return imageExtensions.some(ext => str.toLowerCase().endsWith(ext));
}

function getThumbUrl(media) {
  const src = getMediaSrc(media);
  if (isYouTubeId(src)) {
    return `https://img.youtube.com/vi/${src}/mqdefault.jpg`;
  }
  if (isLocalVideo(src)) {
    // For Cloudinary videos, generate a thumbnail from first frame
    if (src.includes('cloudinary.com') && src.includes('/video/upload/')) {
      return src.replace('/video/upload/', '/video/upload/so_0,w_400,h_300,c_fill,f_jpg/').replace(/\.(mp4|webm|mov|3gp)$/i, '.jpg');
    }
    return 'assets/media/video-placeholder.jpg';
  }
  return src;
}

function getMediaUrl(media) {
  const src = getMediaSrc(media);
  if (isYouTubeId(src)) {
    return `https://www.youtube.com/embed/${src}`;
  }
  return src;
}

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

function renderArchiveCards(data, containerId, dataSource, showYear = true) {
  const container = document.getElementById(containerId);
  if (!container) return;

  data.forEach((item, itemIndex) => {
    let thumb = "assets/media/placeholder.jpg"; 
    let type = "image";
    let link = "#";

    if (item.media && item.media.length > 0) {
      const first = item.media[0];
      type = getMediaType(first);
      link = getMediaUrl(first);
      
      if (type === 'video') {
        const imageInMedia = item.media.find(m => isImageFile(getMediaSrc(m)));
        thumb = imageInMedia ? getMediaSrc(imageInMedia) : getThumbUrl(first);
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
          mThumb = imageInMedia ? getMediaSrc(imageInMedia) : getThumbUrl(m);
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
    const yearBadgeHtml = (showYear && item.year) ? `<span class="year-badge-floating">${item.year}</span>` : '';
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

navToggle?.addEventListener('click', () => {
  const open = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', open);
});

window.addEventListener('scroll', () => { 
  toTop?.classList.toggle('is-visible', window.scrollY > 500);
});

toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* =========================================
   MEDIA DOTS
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
    if (img) img.src = thumb;
    
    const link = card.querySelector('.project-main-link');
    if (link) {
      link.href = src;
      link.dataset.type = type;
      link.dataset.caption = caption;
      
      const badge = link.querySelector('.badge-video');
      if (badge) {
        badge.style.display = (type === 'youtube' || type === 'video') ? 'block' : 'none';
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
  
  if (lbPrev) lbPrev.style.display = hasMultiple ? 'flex' : 'none';
  if (lbNext) lbNext.style.display = hasMultiple ? 'flex' : 'none';
}
