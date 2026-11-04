# 🚀 Complete Master Guide: Awwwards-Level Interactive Website Prompts for AI

This guide contains production-tested prompts, architectural blueprints, and prompt formulas to generate ultra-premium, dynamic, animated websites (Awwwards / FWA / Webby style) using **Gemini / AI Assistants**.

---

## 📑 Table of Contents
1. [The 5-Pillar Universal Prompt Formula](#the-5-pillar-universal-prompt-formula)
2. [Master Prompt 1: Creative Developer & Designer Portfolio](#master-prompt-1-creative-developer--designer-portfolio)
3. [Master Prompt 2: Universal Multi-Category Template](#master-prompt-2-universal-multi-category-template)
4. [Category-Specific Ready-Made Prompts](#category-specific-ready-made-prompts)
   - [A. B2B SaaS & AI Startup (Linear / Apple Style)](#a-b2b-saas--ai-startup-linear--apple-style)
   - [B. Luxury E-Commerce & Fashion Brand](#b-luxury-e-commerce--fashion-brand)
   - [C. Creative Studio & Production Agency](#c-creative-studio--production-agency)
   - [D. Premium Real Estate & Architectural Showcase](#d-premium-real-estate--architectural-showcase)
   - [E. Fine Dining, Luxury Café & Hospitality](#e-fine-dining-luxury-café--hospitality)
   - [F. 3D Product Launch & Keynote Event](#f-3d-product-launch--keynote-event)
5. [The "Secret Keywords" Cheat Sheet](#the-secret-keywords-cheat-sheet)
6. [Common Pitfalls & How to Avoid Them](#common-pitfalls--how-to-avoid-them)

---

## 🏛️ The 5-Pillar Universal Prompt Formula

Jab bhi kisi category ki interactive website banwani ho, hamesha ye 5 elements prompt me zaroor include karein:

```
[1. Elite Persona & Role]
       +
[2. Category, Brand & Aesthetic Vibe]
       +
[3. Core Tech & Interaction Stack (Lenis + GSAP + WebGL)]
       +
[4. Section Breakdown & Scroll Choreography]
       +
[5. Mobile Polish & 60fps Performance Rules]
```

---

## 🎨 Master Prompt 1: Creative Developer & Designer Portfolio

```markdown
Act as an elite Creative Front-end Developer and Awwwards-winning Web Designer.

I want to build an ultra-premium, interactive portfolio website for:
- Name: [Your Name, e.g., Aman Singh]
- Title / Role: [e.g., Senior Flutter Developer & Full-Stack AI Engineer]
- Core Skills / Focus: [e.g., Flutter, Dart, Node.js, WebGL, Firebase, Meta & Google Ads]
- Brand Aesthetic: [Minimalist Brutalism, Editorial Typography, Dark Luxury]

### 1. TECH STACK & LIBRARIES
- Semantic HTML5 & Modern CSS3 (CSS Variables, clamp(), Flexbox/Grid).
- Smooth Scrolling: Use Lenis.js for momentum scrolling.
- Animation Engine: GSAP (GreenSock) + ScrollTrigger plugin.
- Visual FX: WebGL/Canvas GLSL shader background (subtle glowing liquid/aura gradient) and ASCII art background.
- Custom Cursor: Fluid cursor follower with magnetic attraction to links and `mix-blend-mode: difference`.

### 2. COLOR PALETTE & TYPOGRAPHY
- Colors: Deep luxury black (#0a0a0a, #000000), crisp off-white text (#f0f0f0), subtle gray borders (rgba(255,255,255,0.12)), and an electric signature accent color ([#ff1e00 / Neon Red]).
- Typography Pairing: 
  - Primary: High-end geometric sans-serif (e.g., 'Inter' or 'Breton').
  - Secondary / Accent: High-contrast luxury italic editorial serif (for key words and name emphasis).
  - Responsive Font Sizing: Fluid typography using `clamp()` and `vw` units so text scales seamlessly without breaking.

### 3. SECTIONS & SCROLL INTERACTIONS
1. Hero Section:
   - Interactive WebGL/Canvas gradient aura that reacts to mouse movement.
   - Massive editorial headline with split-character text reveal animation on page load.
   - Floating interactive status pill (e.g., "🟢 Available for Freelance & Full-Time").
2. Projects Showcase:
   - Pinned/sticky scroll deck with horizontal scrub or layered card stacking.
   - Hover preview: Cursor-following thumbnail preview with 3D tilt micro-interaction on hover.
3. Services / Tech Stack:
   - Interactive accordion or card grid with glassmorphism / soft-lighting borders.
4. Awards / Experience List:
   - Clean editorial list with magnetic hover states and background sweep animation.
5. Contact & Grand Finale Footer:
   - Pin-reveal transition where footer smoothly uncurtains from behind the main page.
   - ASCII canvas art animation.
   - Massive signature footer typography spanning across the screen, where individual letters reveal themselves proportionally as you scroll to the bottom.

### 4. MOBILE & PERFORMANCE REQUIREMENTS
- 100% responsive across mobile (360px+), tablet, and ultra-wide screens.
- Mobile Layout Polish: Keep text centered with balanced letter/word spacing (`gap: 1.15em`), ensuring long descender letters (like 'g', 'y', 'p') have adequate bottom clearance and never clip.
- Buttery 60fps/120fps performance: Use `will-change: transform`, avoid layout thrashing, and disable heavy canvas effects gracefully on lower-end mobile devices.

Please provide complete, fully production-ready code with clean file structure (`index.html`, `styles/index.css`, `js/index.js`), including all CDN links and comments explaining the animation triggers.
```

---

## 🌐 Master Prompt 2: Universal Multi-Category Template

*(Use this template for **any business, brand, or idea** — just replace the bracketed `[ ... ]` values).*

```markdown
Act as an elite Creative Front-end Developer and Awwwards Judge.

I want to build a world-class, highly dynamic interactive website for:
- Category / Industry: [e.g. B2B SaaS / Luxury E-commerce / Creative Agency / Real Estate / FinTech]
- Brand / Product Name: [Brand Name]
- One-line Concept: [What does it do / sell?]
- Target Audience: [e.g. Modern founders / High-end shoppers / Gen-Z creators]
- Visual Aesthetic: [e.g. Dark Minimalist Brutalism / Clean Apple-style Glassmorphism / Cyberpunk Neo-Tokyo]

### CORE TECH & ANIMATION STACK:
1. Smooth Scroll: Lenis.js for momentum scrolling.
2. Animation Engine: GSAP 3 + ScrollTrigger (scrub: true, pins, and timeline sequences).
3. Micro-interactions: Custom magnetic cursor with `mix-blend-mode: difference`, button physics, smooth accordion/drawers.
4. Visual FX: Interactive HTML5 Canvas / WebGL (glow aura, particle grid, or interactive shader).
5. Typography: Fluid clamp() sizing, pairing a clean geometric sans with an editorial luxury serif or mono accent.

### SECTION REQUIREMENTS & SCROLL CHOREOGRAPHY:
1. Hero: Bold cinematic entrance animation, split-text reveal, and interactive background that tracks mouse/touch.
2. [Section 2 - Main Feature/Product showcase]: Sticky pinned scroll deck where cards stack or scrub as you scroll.
3. [Section 3 - Proof / Value Proposition]: Interactive Bento Grid with hover glow borders and micro-metrics.
4. [Section 4 - Interactive Feature Demo / Pricing / Gallery]: [Specify interactive component, e.g. toggle, slider, or horizontal scrub].
5. Grand Finale Footer: Pinned curtain reveal animation with massive kinetic typography.

### POLISH & PERFORMANCE:
- Full responsive fidelity across mobile (360px+), tablet, and desktop.
- Mobile text must not clip descenders (letters like 'g', 'p', 'y') and maintain balanced word gaps.
- 60fps buttery smooth performance without layout shift.

Provide complete, runnable production code (HTML, CSS, JS) with modern CDNs and clean modular architecture.
```

---

## ⚡ Category-Specific Ready-Made Prompts

### A. B2B SaaS & AI Startup (Linear / Apple Style)
```markdown
Build an Apple/Linear.app inspired ultra-modern landing page for an AI Productivity SaaS called 'NexusAI'. 

Key requirements:
1. Libraries: Lenis smooth scroll and GSAP ScrollTrigger.
2. Theme: Dark mode with ambient subtle purple/cyan glow shaders and micro-grid background.
3. Hero Section: Split-text headline reveal, floating glowing app screenshot with 3D mouse-tilt effect, and magnetic CTA button.
4. Feature Walkthrough: Sticky pinned scroll-deck where left-side text stays pinned while 3 interactive UI mockups slide up smoothly.
5. Bento Grid: 6 interactive feature tiles with spotlight cursor border glow effect.
6. Interactive Pricing: Monthly/Annual billing switcher with smooth GSAP price numbers counter animation.
7. Footer: Pinned curtain reveal with glowing newsletter subscription form and social links.
```

---

### B. Luxury E-Commerce & Fashion Brand
```markdown
Build a high-fashion editorial e-commerce website for a luxury streetwear brand called 'AURA'. Design inspired by Balenciaga and Awwwards Site of the Year.

Key requirements:
1. Libraries: Lenis momentum scroll and GSAP 3.
2. Look & Feel: High-contrast monochromatic black/white, editorial serif typography (Playfair/Ogg style), and asymmetric whitespace.
3. Hero Section: Full-height video background with masked typography and animated brand tagline scrub.
4. Lookbook Showcase: Full-screen horizontal scroll gallery scrubbed via vertical page scroll using GSAP ScrollTrigger.
5. Product Cards: Minimalist cards that expand into high-res details on hover with magnetic 'Add to Bag' button physics.
6. Cart Drawer: Smooth overlay slide-in mini cart with spring-physics dismiss.
7. Footer: Massive brand signature reveal with ASCII watermark graphics.
```

---

### C. Creative Studio & Production Agency
```markdown
Build an award-winning creative digital agency website called 'HyperSpace Studio'.

Key requirements:
1. Libraries: Lenis smooth scroll, GSAP ScrollTrigger, and Three.js / Canvas particle wave.
2. Design Style: Dark brutalist editorial layout with oversized typography and bright orange/volt accent.
3. Custom Cursor: Blend-mode cursor that expands and shows "VIEW CASE STUDY" text when hovering over project cards.
4. Case Studies Section: Stacked card transition where previous project card scales down (scale: 0.9, opacity: 0.4) as the next card scrolls directly over it.
5. Marquee Tickers: Dual-direction smooth infinite running text tickers with client logos and agency philosophy.
6. Contact Drawer: Slide-up full-screen contact overlay with interactive inquiry form.
```

---

### D. Premium Real Estate & Architectural Showcase
```markdown
Build an ultra-luxurious architectural and penthouse showcase website called 'Vanguard Residences'.

Key requirements:
1. Design: Editorial Swiss architectural layout with cream/sand (#f7f5f0), deep bronze (#8c6d48), and obsidian black palette.
2. Smooth Navigation: Pinned split-screen layout (left side holds apartment details and architectural specs; right side scrolls through floor-to-ceiling imagery).
3. Interactive Floor Plan: SVG floorplan viewer with clickable hotspots revealing panoramic room renders.
4. Virtual Tour Preview: Smooth image sequence scrubber driven by page scroll position.
5. Inquiry Form: Elegant floating consultation scheduler with subtle blur backdrop (backdrop-filter: blur(16px)).
```

---

### E. Fine Dining, Luxury Café & Hospitality
```markdown
Build an evocative, moody website for a Michelin-star contemporary restaurant called 'Solstice'.

Key requirements:
1. Aesthetic: Cinematic dark mood (deep forest green #0d1a14, gold accent #d4af37, and charcoal).
2. Hero: Ambient slow-motion culinary video with elegant typography reveal.
3. Interactive Menu: Tabbed tasting menu with smooth price/ingredient expand transitions and chef's wine pairing notes.
4. Reservation Experience: Sticky booking widget that remains accessible as user scrolls past ambiance galleries.
5. Footer: Pinned location showcase with custom dark-themed interactive map embed and reservation CTA.
```

---

### F. 3D Product Launch & Keynote Event
```markdown
Build a futuristic product launch microsite for a next-generation neural audio device called 'ECHO-1'.

Key requirements:
1. Theme: Sci-fi minimal with glowing neon accents and sound-wave canvas visualizations.
2. Scroll-Scrubbed Exploded View: Step-by-step product breakdown where internal components (chassis, driver, battery) separate as user scrolls down.
3. Interactive Spec Matrix: Sticky comparison table highlighting acoustic benchmarks and battery metrics.
4. Audio Player Widget: Floating ambient sound demo player with audio frequency visualizer bar.
5. Pre-Order CTA: High-urgency countdown timer and live stock badge with interactive preorder button.
```

---

## 🔑 The "Secret Keywords" Cheat Sheet

Jab bhi aap prompt likhein, ye specific phrases use karein — ye AI ko standard generic code likhne ke bajaye high-end production code generate karne par majboor karte hain:

| Desired Effect | Exact Prompt Keyword to Use |
| :--- | :--- |
| **Buttery smooth scrolling** | `"Lenis.js momentum scrolling with wrapper sync"` |
| **Scroll-driven animations** | `"GSAP ScrollTrigger with scrub: true and pin: true"` |
| **Staggered letter reveals** | `"SplitType / character splitting with overflow: hidden masks"` |
| **Mouse-attracted buttons** | `"Magnetic button physics using GSAP quickTo()"` |
| **Card stacking effect** | `"Layered sticky card stack scrub with scale & opacity falloff"` |
| **Liquid / Aura backgrounds** | `"HTML5 WebGL Fragment Shader with u_time and u_mouse uniforms"` |
| **Curtain footer reveal** | `"Pinned fixed curtain footer reveal via scroll transition trigger"` |
| **Dark luxury blending** | `"mix-blend-mode: difference custom cursor follower"` |

---

## ⚠️ Common Pitfalls & How to Avoid Them

1. **Character Cutoff in Scroll Masks:**
   - *Problem:* Calligraphic letters with hanging descenders (like `g`, `y`, `p`, `j`) get horizontally sliced at the bottom.
   - *Fix:* Ensure the letter wrapper has generous bottom padding:
     ```css
     padding: 0.1em 0.3em 0.65em 0.3em;
     margin: -0.1em -0.3em -0.65em -0.3em;
     ```
   - In GSAP, use `yPercent: 180` instead of `yPercent: 110` so descenders are fully hidden initially.

2. **Mobile Viewport Font Overflow:**
   - *Problem:* Hardcoded `vw` units causing text to wrap awkwardly or clip on 360px–390px screens.
   - *Fix:* Always clamp fonts:
     ```css
     font-size: clamp(1.8rem, 8.5vw, 3.8rem);
     ```

3. **Footer Gap Balance on Mobile:**
   - *Problem:* Using `justify-content: space-between` on small screens pushes words to extreme screen bezels, leaving a gaping void.
   - *Fix:* Use centered flex with explicit typographic gap:
     ```css
     display: flex;
     justify-content: center;
     gap: 1.15em;
     ```

---
*Created for Aman Singh Portfolio & Creative Projects • 2026*

