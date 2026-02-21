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
    title: "3D Printing & Smart Device Projects",
    year: "2025",
    desc: "Exploring additive manufacturing with FDM 3D printing, creating smart IoT devices, and practical repair solutions. Includes decorative prints, smart night light, and custom smartwatch charger rebuild.",
    tags: ["3D Printing", "IoT", "Smart Home", "Repair"],
    media: [
      // 3D Printed Heart
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771659239/3dHeart_vdo_jxhhu0.mp4", caption: "3D Printed Heart - Printing Process Showcase" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771659060/3dHeart_img_nwrbuu.jpg", caption: "3D Printed Heart - Finished Model Display" },
      // 3D Printing Process
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771659207/3dprint_Vdo1_jxoz4i.mp4", caption: "FDM Printer in Operation - Live Print Session" },
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771659184/3dprint_img4_xleyeh.mp4", caption: "Print Head Movement - Precision Layer Deposition" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771659061/3dprint_img1_j5sbgo.jpg", caption: "Freshly Printed Part on Build Plate" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771659059/3dprint_img2_qqpj3k.jpg", caption: "Batch Production - Multiple Printed Components" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771659079/3dprint_img3_xsgbuo.jpg", caption: "Print Quality Inspection - Layer Adhesion" },
      // Smart Night Light
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771659094/smartNlight_vdo1_rwypha.mp4", caption: "Smart Night Light - 3D Printing Process" },
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771659166/smartNlight_vdo2_pglxee.mp4", caption: "Smart Night Light - Printing in Progress" },
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771659130/smartNlight_vdo3_ix6s2c.mp4", caption: "Smart Night Light - 3D Design Process in Fusion 360" },
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771664098/smartNlight_vdo4_udsv9p.mp4", caption: "Smart Night Light - After 3D Print & Assembly" },
      // Smartwatch Charger Rebuild
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771659152/swatchCH_vdo_a893z1.mp4", caption: "Smartwatch Charger Rebuild - Complete Process" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771659060/swatchCH_img1_oog0zr.jpg", caption: "Broken Charging Cable - Original Smartwatch Charger" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771659067/swatchCH_img5_mhbcho.jpg", caption: "Charger Rebuild - Custom 3D Design in Blender" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771659072/swatchCH_img4_sipeea.jpg", caption: "Charger Rebuild - Preparing in 3D Slicer Software" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771659051/swatchCH_img2_cxurft.jpg", caption: "Charger Rebuild - After 3D Print" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771659055/swatchCH_img3_ry2wrv.jpg", caption: "Charger Rebuild - Functionality Test with Smartwatch" },
      // My Interest / Workspace
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771659079/myinterest_c5ab2v.jpg", caption: "Maker Workspace - Tools & Equipment Setup" }
    ]
  },
  {
    title: "Bluetooth Light Cube & Smart Humidifier",
    year: "2022",
    desc: "IoT device with custom acrylic chassis and Android control app. Features Arduino Nano + HC-05 for RGB lighting and scheduling.",
    tags: ["Arduino", "IoT", "MIT App Inventor"],
    media: [
      { src: "AQbFqLnhJ_Y", caption: "Night Light Humidifier - Complete Demo & Features" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263295/NLHimg1_ej8fhy.jpg", caption: "Finished Light Cube Glowing in Dark Room" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263345/NLHimg2_uvtskn.jpg", caption: "Transparent Acrylic Enclosure Design" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263338/NLHimg3_s9eust.jpg", caption: "Internal Components Layout & Wiring" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263337/NLHimg4_jmz7js.jpg", caption: "Arduino Nano Microcontroller Board" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263341/NLHimg5_kyvbsq.jpg", caption: "RGB LED Strip Wrapped Inside Cube" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263329/NLHimg6_ykxabu.jpg", caption: "5V Power Supply & Voltage Regulator" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263334/NLHimg7_defgfu.jpg", caption: "Ultrasonic Humidifier Module Installed" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263313/NLHimg8_gvewte.jpg", caption: "HC-05 Bluetooth Module for Wireless Control" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263341/NLHimg9_xktdcs.jpg", caption: "Water Reservoir Tank Assembly" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263296/NLHimg10_unlx1y.jpg", caption: "Cube Assembly - Top View" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263325/NLHimg11_qiosc9.jpg", caption: "Cube Assembly - Side Angle View" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263322/NLHimg12_j4lycs.jpg", caption: "Blue LED Mode Active" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263320/NLHimg13_s8wky3.jpg", caption: "Rainbow RGB Color Cycling Mode" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263314/NLHimg14_qjloaf.jpg", caption: "Soft Ambient Warm White Mode" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263341/NLHappimg_rkl2lk.jpg", caption: "MIT App Inventor - Main Control Dashboard" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263289/NLHappimg1_iyfshn.jpg", caption: "App - RGB Color Wheel Picker" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263294/NLHappimg2_qvmuqg.jpg", caption: "App - Brightness Slider Control" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263293/NLHappimg3_emgpyu.jpg", caption: "App - Timer & Schedule Settings" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263293/NLHappimg4_seajtg.jpg", caption: "App - Preset Color Modes Selection" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263290/NLHappimg5_ppztjo.jpg", caption: "App - Device Connection Status" }
    ]
  },
  {
    title: "Bike Signal Indicators",
    year: "2021",
    desc: "Custom signal control unit on Zero PCB using 555 Timer for oscillation and Hall Effect sensors for brake triggering.",
    tags: ["555 Timer", "PCB", "Automotive"],
    media: [
      { src: "mKsYcZC8w_M", caption: "Bike Signal System - Working Demo on Road" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263325/BikeSignalimg1_lfxj5x.jpg", caption: "Complete Signal Control Unit Box" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263329/BikeSignalimg2_r0y8bt.jpg", caption: "555 Timer IC Oscillator Circuit" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263320/BikeSignalimg3_fmytuw.jpg", caption: "Hall Effect Sensor for Brake Detection" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263328/BikeSignalimg4_muiydn.jpg", caption: "Zero PCB Hand-Soldered Circuit Board" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263321/BikeSignalimg5_migsh0.jpg", caption: "High-Brightness LED Indicator Array" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263317/BikeSignalimg6_jjqgug.jpg", caption: "Wiring Harness & Power Connections" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263328/BikeSignalimg7_kds0n6.jpg", caption: "Signal Unit Mounted on Motorcycle Rear" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263325/BikeSignalimg8_nw6sv3.jpg", caption: "Turn Signals & Brake Light Active at Night" }
    ]
  },
  {
    title: "Bluetooth Controlled Robot Arm",
    year: "2020",
    desc: "Multi-axis robotic arm with record/replay function. Controlled via custom Android app.",
    tags: ["Robotics", "Servo", "Android"],
    media: [
      { src: "MJYnwYXgJ5Q", caption: "Robot Arm - Full Range of Motion Demo" },
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771263406/Robot_Arm_vdo2_ianxce.mp4", caption: "Record & Replay Movement Sequence" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263309/Robot_Arm_img1_j0y4ex.jpg", caption: "Complete 4-Axis Robot Arm Assembly" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263347/Robot_Arm_img2_lq8ml7.jpg", caption: "MG996R Servo Motors at Each Joint" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263319/Robot_Arm_img3_awnhrj.jpg", caption: "Base Rotation Platform Mechanism" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263311/Robot_Arm_img4_vuq1qg.jpg", caption: "Gripper Claw with Gear Mechanism" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263310/Robot_Arm_img5_szsqvf.jpg", caption: "Arduino Mega Controller Board" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263310/Robot_Arm_img6_t4mxfu.jpg", caption: "Bluetooth HC-05 & Wiring Setup" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263302/Robot_Arm_app1_xffe0g.jpg", caption: "Custom Android App Control Interface" }
    ]
  },
  {
    title: "Transistor Logic Gate Demo",
    year: "2020",
    desc: "Educational board demonstrating AND, OR, NOT, NAND logic using discrete transistors.",
    tags: ["Electronics", "Logic", "Educational"],
    media: [
      { src: "Fvg1I9oV2kw", caption: "Logic Gates Explanation & Live Demo" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263334/logicgateImg1_jq2lug.jpg", caption: "Complete Logic Gate Demonstration Board" }
    ]
  },
  {
    title: "Smart Home Integrated System",
    year: "2019",
    desc: "Team Leader. Comprehensive model with smart lock, clap-switch, motion alarm, and fire safety systems.",
    tags: ["Automation", "Sensors", "Leadership"],
    media: [
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771266305/SHISvdo1_fwlpk1.mp4", caption: "Smart Home System - All Features Demo" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263305/SHISimg1_rh7axj.png", caption: "Miniature Smart Home Model Overview" }
    ]
  },
  {
    title: "Light Tracking Robot",
    year: "2018",
    desc: "Analog solar-tracker robot using LDRs and comparators without a microcontroller.",
    tags: ["Analog", "L293D", "Solar"],
    media: [
      { src: "mvPUJtOHeak", caption: "Light Tracking Robot Following Flashlight" }
    ]
  },
  {
    title: "Line Following Robot",
    year: "2018",
    desc: "IR-guided autonomous robot using Op-Amps for path detection.",
    tags: ["IR", "Autonomous", "Robotics"],
    media: [
      { src: "UUrouKXXIpg", caption: "Line Following Robot Navigating Track" }
    ]
  },
  {
    title: "Useless Machine",
    year: "2017",
    desc: "Electromechanical box that turns itself off immediately after being switched on.",
    tags: ["Mechanical", "Fun"],
    media: [
      { src: "cqrkXZgOC_I", caption: "Useless Machine - The Box That Turns Itself Off" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263299/Useless_Machineimg1_ponjul.jpg", caption: "Internal Servo & Lever Mechanism" }
    ]
  },
  {
    title: "Laser Security Alarm",
    year: "2017",
    desc: "Perimeter security system using laser diode and LDR latching circuit.",
    tags: ["Security", "Laser"],
    media: [
      { src: "0WTkQL9YXLY", caption: "Laser Alarm System Triggered Demo" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263291/Layserimg1_jbtt1e.jpg", caption: "Laser Diode Transmitter Module" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263298/Layserimg2_krp4ph.jpg", caption: "LDR Receiver & Alarm Trigger Circuit" }
    ]
  },
  {
    title: "RC Vehicle Conversion",
    year: "2015",
    desc: "Converting 4-wheel RC toys into 2-wheel balanced vehicles.",
    tags: ["Modding", "RC"],
    media: [
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771266418/RCv1v2vdo1_oadkno.mp4", caption: "Converted 2-Wheel RC - Balance Test Run" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263301/RCv1v2img1_qphtcm.png", caption: "Modified RC Vehicle Final Build" }
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
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771263383/solderingvdo1_fqfp3r.mp4", caption: "Through-Hole Component Soldering Technique" },
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771266212/solderingvdo2_r4jlg4.mp4", caption: "Fine-Pitch SMD Soldering with Flux" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263350/solderingimg1_ox06o8.jpg", caption: "Professional Soldering Station Setup" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263350/solderingimg2_fiwnpy.jpg", caption: "Component Placement on PCB" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263330/solderingimg3_ywfqxt.jpg", caption: "Applying Flux Before Soldering" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263327/solderingimg4_f7cpsp.jpg", caption: "Clean Shiny Solder Joint Close-up" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263331/solderingimg5_puxmqg.jpg", caption: "Multi-Pin IC Chip Soldering" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263330/solderingimg6_hmvgvr.jpg", caption: "Wire Stripping & Tinning Process" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263348/solderingimg7_lampof.jpg", caption: "Desoldering & Rework Technique" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263350/solderingimg8_e8ej0a.jpg", caption: "Completed PCB - Component Side" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263341/solderingimg9_ilfjy7.jpg", caption: "Completed PCB - Solder Side Traces" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263336/solderingimg10_hymjzu.jpg", caption: "Visual Inspection & Quality Check" }
    ]
  },
  {
    title: "Milestones & Community Impact",
    desc: "Competitions won, knowledge shared, and skills demonstrated through active industry participation and training sessions.",
    tags: ["Awards", "Training", "Leadership"],
    media: [
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263312/ACPimg1_aoxuge.jpg", caption: "Enterprise Wi-Fi Access Point Installation" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263288/pjshowimg1_q6po4i.jpg", caption: "Technical Project Exhibition - 1st Place" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263297/secuimg1_xphz2a.jpg", caption: "Security Systems Workshop Presentation" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263300/secuimg2_kovxll.jpg", caption: "CCTV Installation Training Session" },
      { src: "https://res.cloudinary.com/dmdl2pdly/image/upload/v1771263298/secuimg3_jr4fso.jpg", caption: "Industry Knowledge Sharing Event" }
    ]
  },
  {
    title: "Electronics Repair & Troubleshooting",
    desc: "Diagnosing and repairing various electronic devices including phones, sensors, and consumer electronics.",
    tags: ["Repair", "Troubleshooting", "Electronics"],
    media: [
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771263387/phrepairvdo1_lvhdwp.mp4", caption: "Mobile Phone Component-Level Repair" },
      { src: "https://res.cloudinary.com/dmdl2pdly/video/upload/v1771267603/IRsensorvdo1_kjct6y.3gp", caption: "IR Sensor Module Testing & Calibration" }
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

/* =========================================
   INITIALIZATION
   ========================================= */

window.addEventListener('DOMContentLoaded', () => {
  // Render dynamic content
  renderArchive();
  renderShowcase();
  
  // Initialize all features
  initThemeToggle();
  initNavToggle();
  initLightbox();
  initMediaDots();
  initContactForm();
  initFloatingSocial();
  initScrollToTop();
  
  // Set copyright year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* =========================================
   THEME TOGGLE - Fixed with SVG icons
   ========================================= */

function initThemeToggle() {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  
  function currentTheme() { 
    return localStorage.getItem('theme-pref') || 'dark'; 
  }

  function applyTheme(theme) { 
    root.setAttribute('data-theme', theme); 
    localStorage.setItem('theme-pref', theme);
    updateThemeIcon(theme);
  }

  function updateThemeIcon(theme) {
    if (!toggle) return;
    
    const iconContainer = toggle.querySelector('.theme-toggle__icon');
    if (!iconContainer) return;
    
    const sunIcon = iconContainer.querySelector('.icon-sun');
    const moonIcon = iconContainer.querySelector('.icon-moon');
    
    if (sunIcon && moonIcon) {
      if (theme === 'dark') {
        // Dark mode: show sun icon (to switch to light)
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      } else {
        // Light mode: show moon icon (to switch to dark)
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      }
    }
  }

  function cycleTheme() { 
    const nxt = currentTheme() === 'dark' ? 'light' : 'dark'; 
    applyTheme(nxt);
  }

  // Apply theme on load
  const savedTheme = currentTheme();
  applyTheme(savedTheme);

  // Theme toggle click
  if (toggle) {
    toggle.addEventListener('click', cycleTheme);
  }
}

/* =========================================
   NAVIGATION TOGGLE
   ========================================= */

function initNavToggle() {
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open);
    });
  }
}

/* =========================================
   SCROLL TO TOP
   ========================================= */

function initScrollToTop() {
  const toTop = document.getElementById('toTop');
  if (!toTop) return;

  window.addEventListener('scroll', () => { 
    toTop.classList.toggle('is-visible', window.scrollY > 500);
  }, { passive: true });

  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

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
  const lb = document.getElementById('lightbox');
  const lbStage = document.getElementById('lightboxStage');
  const lbCaption = document.getElementById('lightboxCaption');
  const lbClose = document.getElementById('lightboxClose');
  const lbPrev = document.getElementById('lightboxPrev');
  const lbNext = document.getElementById('lightboxNext');

  document.body.addEventListener('click', e => {
    const link = e.target.closest('a[data-type]');
    if (link) {
      e.preventDefault();
      
      const itemIndex = link.dataset.item;
      const caption = link.dataset.caption;
      const source = link.dataset.source || 'archive';
      const dataArray = getDataSource(source);
      
      if (itemIndex !== undefined && dataArray && dataArray[itemIndex]) {
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
  
  if (lbClose) {
    lbClose.addEventListener('click', closeLightbox);
  }
  
  if (lb) {
    lb.addEventListener('click', e => { 
      if (e.target === lb) closeLightbox(); 
    });
  }
  
  document.addEventListener('keydown', e => { 
    const lb = document.getElementById('lightbox');
    if (e.key === 'Escape') closeLightbox();
    if (lb && lb.classList.contains('is-open')) {
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    }
  });
  
  if (lbPrev) {
    lbPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(-1);
    });
  }
  
  if (lbNext) {
    lbNext.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox(1);
    });
  }
}

function openLightbox(src, type, caption) {
  const lb = document.getElementById('lightbox');
  const lbStage = document.getElementById('lightboxStage');
  const lbCaption = document.getElementById('lightboxCaption');
  
  if (!lb || !lbStage) return;
  
  lbStage.innerHTML = '';
  if (lbCaption) lbCaption.textContent = caption || '';
  
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
          <p>Unable to load video</p>
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
  const lb = document.getElementById('lightbox');
  const lbStage = document.getElementById('lightboxStage');
  
  if (!lb) return;
  
  lb.classList.remove('is-open');
  lb.setAttribute('aria-hidden', 'true');
  
  if (lbStage) {
    const video = lbStage.querySelector('video');
    if (video) {
      video.pause();
      video.src = '';
    }
    
    const iframe = lbStage.querySelector('iframe');
    if (iframe) {
      iframe.src = '';
    }
    
    lbStage.innerHTML = '';
  }
  
  document.body.style.overflow = '';
  
  currentLightboxData = {
    items: [],
    currentIndex: 0,
    title: ''
  };
}

function navigateLightbox(direction) {
  const lbStage = document.getElementById('lightboxStage');
  const items = currentLightboxData.items;
  if (items.length <= 1) return;
  
  // Stop current video/iframe before navigating
  if (lbStage) {
    const video = lbStage.querySelector('video');
    if (video) video.pause();
    
    const iframe = lbStage.querySelector('iframe');
    if (iframe) iframe.src = '';
  }
  
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
  const lbPrev = document.getElementById('lightboxPrev');
  const lbNext = document.getElementById('lightboxNext');
  const hasMultiple = currentLightboxData.items.length > 1;
  
  if (lbPrev) lbPrev.style.display = hasMultiple ? 'flex' : 'none';
  if (lbNext) lbNext.style.display = hasMultiple ? 'flex' : 'none';
}

/* =========================================
   CONTACT FORM - Mailto Handler
   ========================================= */

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const subjectInput = form.querySelector('#subject');
    const messageInput = form.querySelector('#message');
    
    const name = nameInput?.value.trim() || '';
    const email = emailInput?.value.trim() || '';
    const subject = subjectInput?.value.trim() || 'Message from Portfolio Website';
    const message = messageInput?.value.trim() || '';
    
    // Clear previous errors
    form.querySelectorAll('.error').forEach(el => el.textContent = '');
    
    // Validate
    let hasError = false;
    
    if (!name) {
      const nameError = form.querySelector('[data-error-for="name"]');
      if (nameError) nameError.textContent = 'Please enter your name';
      hasError = true;
    }
    
    if (!email) {
      const emailError = form.querySelector('[data-error-for="email"]');
      if (emailError) emailError.textContent = 'Please enter your email';
      hasError = true;
    } else if (!isValidEmail(email)) {
      const emailError = form.querySelector('[data-error-for="email"]');
      if (emailError) emailError.textContent = 'Please enter a valid email address';
      hasError = true;
    }
    
    if (!message) {
      const msgError = form.querySelector('[data-error-for="message"]');
      if (msgError) msgError.textContent = 'Please enter a message';
      hasError = true;
    }
    
    if (hasError) return;
    
    // Build mailto link
    const mailtoSubject = encodeURIComponent(subject);
    const mailtoBody = encodeURIComponent(
      `Hello Phyo Arkar Soe,\n\n` +
      `${message}\n\n` +
      `---\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Sent from: Portfolio Website`
    );
    
    const mailtoLink = `mailto:phyoarkarsoee@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    // Open email client
    window.location.href = mailtoLink;
  });
}

// Email validation helper
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/* =========================================
   FLOATING SOCIAL BUTTONS with Water Drop Animation
   ========================================= */

function initFloatingSocial() {
  const floatingSocial = document.getElementById('floatingSocial');
  const footerSocial = document.getElementById('footerSocial');
  const footer = document.getElementById('siteFooter');
  
  if (!floatingSocial || !footer) return;
  
  let isHidden = false;
  let ticking = false;
  
  function triggerWaterDropAnimation() {
    // Trigger water drop animation on floating buttons
    const floatingBtns = floatingSocial.querySelectorAll('.floating-social__btn');
    floatingBtns.forEach((btn, index) => {
      const drop = btn.querySelector('.water-drop');
      if (drop) {
        drop.classList.remove('animate');
        void drop.offsetWidth; // Trigger reflow
        setTimeout(() => {
          drop.classList.add('animate');
        }, index * 100);
      }
    });
  }
  
  function triggerFooterRipple() {
    // Trigger ripple animation on footer buttons
    if (footerSocial) {
      const footerBtns = footerSocial.querySelectorAll('.footer-social__btn');
      footerBtns.forEach((btn, index) => {
        const rings = btn.querySelectorAll('.ripple-ring');
        rings.forEach(ring => {
          ring.classList.remove('animate');
          void ring.offsetWidth;
          setTimeout(() => {
            ring.classList.add('animate');
          }, index * 150);
        });
      });
    }
  }
  
  function updateFloatingSocial() {
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Check if footer is visible in viewport
    const footerVisible = footerRect.top < windowHeight && footerRect.bottom > 0;
    
    // Hide when footer is visible
    if (footerVisible) {
      if (!isHidden) {
        // Trigger water drop animation before hiding
        triggerWaterDropAnimation();
        
        setTimeout(() => {
          floatingSocial.classList.add('is-hidden');
          // Trigger footer ripple after floating buttons hide
          setTimeout(triggerFooterRipple, 300);
        }, 200);
        
        isHidden = true;
      }
    } else {
      // Show when footer is not visible
      if (isHidden) {
        floatingSocial.classList.remove('is-hidden');
        isHidden = false;
        
        // Re-trigger pop-in animation
        const buttons = floatingSocial.querySelectorAll('.floating-social__btn');
        buttons.forEach((btn, index) => {
          btn.style.animation = 'none';
          btn.offsetHeight;
          btn.style.animation = `popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards`;
          btn.style.animationDelay = `${index * 0.1}s`;
        });
      }
    }
    
    ticking = false;
  }
  
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateFloatingSocial);
      ticking = true;
    }
  }
  
  // Initial check
  updateFloatingSocial();
  
  // Listen to scroll
  window.addEventListener('scroll', onScroll, { passive: true });
  
  // Also check on resize
  window.addEventListener('resize', updateFloatingSocial, { passive: true });
}
