# Aman Singh — Professional Flutter & AI Developer Portfolio

A cutting-edge, award-winning portfolio website for **Aman Singh**, Professional Flutter Developer, Full Stack AI Web Developer, and Meta & Google Ads Specialist.

Built with high-end creative web technologies: **Lenis Smooth Scroll**, **GSAP ScrollTrigger**, **WebGL Ambient Shaders**, interactive 3D Canvas sequences, dynamic ASCII art, and a 3D rotating cube.

---

## 👨‍💻 About Aman Singh

- **Role:** Professional Flutter Developer & Full-Stack AI Engineer
- **Specializations:**
  - **Cross-Platform Mobile Apps:** Flutter & Dart (iOS & Android) with clean architecture, Bloc/Riverpod/Provider, WebRTC, Google Maps SDK, RazorPay.
  - **AI Web Development:** Modern, high-conversion web applications built with AI tools, React, Next.js, HTML5, CSS3, JavaScript, TypeScript, Tailwind CSS.
  - **Backend & Cloud:** Node.js, Express.js, Firebase (Firestore, Realtime DB, FCM, Auth), Supabase, MongoDB, REST APIs, WebRTC calling.
  - **Growth & Performance Marketing:** Meta Ads (Facebook & Instagram), Google Ads (Search, Display, App Install Campaigns), Conversion Tracking & Pixel Setup, App Store Optimization (ASO).
- **Email:** [xaman282@gmail.com](mailto:xaman282@gmail.com)
- **Phone:** [+91 7033759086](tel:+917033759086)
- **LinkedIn:** [linkedin.com/in/aman-kumar-singh-210b481a4/](https://www.linkedin.com/in/aman-kumar-singh-210b481a4/)
- **GitHub:** [github.com/amankrsinghh](https://github.com/amankrsinghh)

---

## 🚀 Featured Projects

1. **Riding App** *(Mobile App)*
   - **Tech:** Flutter, Node.js, MongoDB, RazorPay, Google Maps SDK
   - **Impact:** 10K+ Downloads · 4.8★ Rating
   - **Details:** Fully scalable ride-sharing application for Drivers and Riders with live GPS tracking, route mapping, dynamic pricing, and RazorPay payments.
   - [View Project](https://drive.google.com/file/d/1PfPl2s6qh9vfwYGTTgCs6bRnukVNup84/view?usp=sharing)

2. **Kids Learning App** *(Mobile App & EdTech Game)*
   - **Tech:** Flutter, Firebase, Tracing Game Package, Game Physics
   - **Impact:** 25K+ Downloads · 4.9★ Rating
   - **Details:** Specially designed for 2–6 year old toddlers to enhance early cognitive development through gamified tracing of letters, numbers, shapes, and motor skills activities.
   - [View Project](https://drive.google.com/file/d/1GjjiGpz1HqFyRnR28BE9WubtCYLvUbG5/view?usp=sharing)

3. **Hafor Tech Landing Page** *(Corporate Web App)*
   - **Tech:** HTML5, CSS3, JavaScript, Firebase, REST API
   - **Impact:** 500+ Active Teams · 4.7★ Rating
   - **Details:** High-conversion corporate landing page for tech firm 'Hafor Tech' with responsive layouts, fluid animations, and Firebase integration.
   - [Visit Live Site](https://hafortech.great-site.net/)

4. **Aksient Chat App** *(Real-Time Communication App)*
   - **Tech:** Flutter, Firebase, Firestore, FCM, WebRTC
   - **Impact:** 50K+ Downloads · 4.6★ Rating
   - **Details:** Real-time messaging and conferencing app supporting instant text, high-definition 1-on-1 audio/video calling, and push notifications.
   - [View Project](https://drive.google.com/file/d/1PsJOWlFRkkF752EBMvS2gonwPKmI-RDm/view?usp=sharing)

5. **Hafor Tech Admin Panel** *(Full Stack Enterprise Dashboard)*
   - **Tech:** UI/UX, Node.js, Express.js, MongoDB, REST API, JavaScript
   - **Impact:** 15K+ Views · 2K+ Likes
   - **Details:** Comprehensive administration dashboard for Hafor Tech with user analytics, role-based access control, and real-time database management.
   - [View Project](https://drive.google.com/file/d/1si40Tpxpkilono8Spb1y9NHnOwJuLbC-/view?usp=sharing)

6. **ResQ App** *(Emergency Response Platform)*
   - **Tech:** Flutter, Google Maps SDK, Firebase, Firestore
   - **Impact:** Emergency SOS & Geolocation
   - **Details:** Real-time platform connecting people in need with emergency rescue teams, featuring one-tap SOS alerts and live location tracking.
   - [View Project](https://drive.google.com/file/d/1-8ydMOwVr5shhgT9JvPZwBIt5dXmlyiY/view?usp=sharing)

---

## 🛠️ How to Run Locally

### Option A: Using Node.js
```bash
npm run dev
# Or
npx serve . -l 3000
```
Then open `http://localhost:3000` in your browser.

### Option B: Using Python
```bash
python3 -m http.server 3000
```
Then open `http://localhost:3000` in your browser.

---

## 📂 Project Architecture

```text
├── index.html                 # Main landing page (Preloader, Hero, About, Projects, Skills, Awards, Contact, Footer)
├── works.html                 # 3D interactive projects cube page
├── works/index.html           # Sub-route for works
├── info.html                  # About & experience page
├── info/index.html            # Sub-route for info
├── contact.html               # Contact & client inquiry page
├── contact/index.html         # Sub-route for contact
├── package.json               # Runner scripts
├── styles/
│   ├── index.css              # Main portfolio styling & animations
│   ├── works.css              # 3D cube & ruler styles
│   ├── info.css               # About page layout & cards
│   └── contact.css            # Contact layout & form panels
├── js/
│   ├── index.js               # Main page controller & ScrollTrigger timelines
│   ├── works.js               # 3D cube rotation logic & drag/scroll handling
│   ├── info.js                # About page interactions
│   ├── contact.js             # Contact page interactions
│   ├── core-renderer.js       # WebGL / shader canvas rendering engine
│   ├── hero-project.js        # Shader layer configuration & presets
│   ├── i18n.js                # English / French localization strings
│   └── vendor/
│       ├── gsap.min.js        # GreenSock Animation Platform
│       ├── ScrollTrigger.min.js
│       └── lenis.min.js       # Lenis smooth scroll
└── assets/
    ├── fonts/                 # Breton, Machine, Zirena custom fonts
    ├── favicon/               # Favicon assets
    └── images/
        ├── hero sequence/     # 341 high-res frames (0001.jpg - 0341.jpg)
        ├── projects/          # Covers and screenshot galleries for all projects
        ├── profile/           # Profile picture
        ├── art/               # Background artworks
        └── footer/            # ASCII mask textures
```
