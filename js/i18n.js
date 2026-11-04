(function () {
  const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  const lang = browserLang.startsWith('fr') ? 'fr' : 'en';
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  window.__I18N_LANG = lang;

  window.getCharHTML = function (ch) {
    if (ch === ' ') return '&nbsp;';
    if (ch === '🡲' || ch === '🡺') return '<svg style="width: 1.25em; height: 1.25em; vertical-align: -0.25em;" viewBox="0 0 84 85" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11 38H54L37 21H51L73 43L51 65H37L54 48H11Z"/></svg>';
    if (ch === '🡼') return '<svg style="width: 1.25em; height: 1.25em; vertical-align: -0.25em;" viewBox="0 0 84 85" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-135 42 42.5)"><path d="M11 38H54L37 21H51L73 43L51 65H37L54 48H11Z"/></g></svg>';
    if (ch === '🞣') return '<svg style="width: 0.9em; height: 0.9em; vertical-align: -0.1em; transform: translateY(-0.1em);" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"/></svg>';
    return ch;
  };

  const T = {
    'meta.description': 'Aman Singh — Professional Flutter Developer, Full Stack AI Web Developer, Meta & Google Ads Specialist. High-performance cross-platform mobile apps & intelligent web platforms.',

    'index.title': 'Aman Singh — Professional Flutter & AI Developer',
    'index.h1': 'Aman Singh — Professional Flutter Developer, creating scalable mobile applications, AI-powered web solutions, and high-ROI Meta & Google Ads campaigns.',
    'index.hero.tagline': 'Professional Flutter &amp; AI Developer,<br><span class="other-accent">crafting high-performance apps</span>, intelligent web &amp; growth funnels.',
    'index.about.text': 'As a <span class="other-accent">professional Flutter developer</span>, I engineer scalable mobile apps, intelligent web solutions, and <span class="other-accent">high-ROI ad funnels</span>.',
    'index.about.sub': 'My name is Aman Singh. I specialize in cross-platform Flutter development (iOS & Android) with clean architecture, modern web development powered by AI, and end-to-end Meta & Google Ads campaigns that scale businesses.',
    'index.cg.phrase': 'Turning complex ideas into <span class="other-accent">fluid mobile apps</span>, intelligent <span class="other-accent">web systems</span>, and scalable growth.',
    'index.skills.subtitle': 'Skills & Expertise',
    'index.skills.text': 'Cross-platform mobile engineer specializing in Flutter & Dart, AI-driven full-stack web platforms, scalable Node.js/Firebase backends, and growth marketing.',
    'index.skills.frontend': 'Flutter & Mobile',
    'index.skills.animation': 'AI & Modern Web',
    'index.skills.backend': 'Backend & Real-Time',
    'index.skills.database': 'Databases & Cloud',
    'index.skills.devops': 'Meta & Google Ads',
    'index.skills.security': 'DevOps & Tooling',
    'index.skills.design': 'Architecture & Design',
    'index.contact.title': 'Contact',
    'index.contact.dispo1': 'Available for <span class="other-accent">freelance contracts &amp; full-time roles</span> worldwide. Ready to build ambitious, high-performance mobile apps with buttery 60fps UI and robust native integration.',
    'index.contact.dispo2': 'Specialized in <span class="other-accent">Flutter apps, AI full-stack development</span> (Node.js, Express, MongoDB, Firebase, WebRTC), and high-conversion <span class="other-accent">Meta &amp; Google Ads campaigns</span>.',
    'index.proj.label': 'Preview',
    'index.detail.visit': 'VISIT 🡲',
    'index.detail.back': '🡼BACK',

    'info.title': 'Info — Aman Singh',
    'info.eyebrow': 'About Me',
    'info.role': 'Professional Flutter Developer & Full-Stack AI Engineer.',
    'info.desc': 'I craft world-class cross-platform mobile apps in Flutter, build AI-powered web applications and backends, and scale businesses through targeted Meta and Google Ads campaigns. Passionate about clean architecture, speed, and user experience.',
    'info.meta.based': 'Based in',
    'info.meta.status': 'Status',
    'info.meta.based.value': 'India (Available Worldwide / Remote)',
    'info.meta.status.value': 'Available for Freelance & Full-time Roles',
    'info.skills.frontend': 'Mobile (Flutter & Dart)',
    'info.skills.animation': 'AI & Modern Web',
    'info.skills.backend': 'Backend & Real-Time',
    'info.skills.security': 'Cloud & Growth (Ads)',

    'contact.title': 'Contact — Aman Singh',
    'contact.panel.title': "Let's build your next big product.",
    'contact.panel.copy': 'I respond quickly to queries regarding Flutter mobile app development, AI web apps, backend architectures, and Meta/Google ad setups.',
    'contact.meta.base': 'Base',
    'contact.meta.status': 'Status',
    'contact.meta.delay': 'Avg. response',
    'contact.meta.base.value': 'India (Global Remote)',
    'contact.meta.status.value': 'Available for Hire',
    'contact.meta.delay.value': '24h',
    'contact.eyebrow': 'Get in touch',
    'contact.role': 'Professional Flutter Developer, Full Stack AI Web Developer, Meta & Google Ads Specialist.',
    'contact.desc': "Have a product idea, an existing mobile app needing scalability, or looking to run high-converting ad campaigns? Let's connect and make it happen.",
    'contact.shortcuts': 'Direct Channels',
    'contact.brief': 'Project Scope',
    'contact.maildirect': 'xaman282@gmail.com',
    'contact.brief.product': 'Product goal',
    'contact.brief.deadline': 'Target timeline',
    'contact.brief.stack': 'Tech stack',
    'contact.brief.deliverables': 'Deliverables',

    'works.title': 'Work — Aman Singh',
    'works.h1': 'Projects — Aman Singh, Professional Flutter Developer & Full Stack AI Engineer. Explore riding apps, chatting systems, and web platforms.',

    'common.aria.back': 'Back to home',
    'common.aria.menu': 'Main navigation',
    'common.aria.social': 'Social links',
    'common.aria.footer': 'Footer navigation',

    '404.title': '404 — Aman Singh',
    '404.subtitle': 'This page got lost in the void.<br><span class="subtitle-dim">It doesn\'t exist, or no longer does.</span>',
    '404.ticker': '— PAGE NOT FOUND — SIGNAL LOST — ERROR 0x404 — THIS PAGE DOESN\'T EXIST — COORDINATES: NULL — UNKNOWN DESTINATION — ',
    '404.aria.back': 'Back to home',
  };

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (T[key] != null) el.innerHTML = T[key];
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
    el.getAttribute('data-i18n-attr').split('|').forEach(function (pair) {
      const idx = pair.indexOf(':');
      if (idx < 0) return;
      const attr = pair.slice(0, idx).trim();
      const key = pair.slice(idx + 1).trim();
      if (T[key] != null) el.setAttribute(attr, T[key]);
    });
  });

  const titleKey = document.documentElement.getAttribute('data-i18n-title');
  if (titleKey && T[titleKey]) document.title = T[titleKey];

  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta && T['meta.description']) descMeta.setAttribute('content', T['meta.description']);

  window.__t = function (key) { return T[key]; };
})();
