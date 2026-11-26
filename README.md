# HiraKata (平片)

<div align="center">

```
  ____ ___ _       __    __ __      __        
 / / // (_)_______/ /__ / //_/__ _ / /____ _  
/ _  // // __/ _  / _ // ,< / _ `// __/ _ `/  
/_//_//_/_/  \_,_/\_//_/_/|_|\_,_/ \__/\_,_/   
```

**A modern, offline-first Japanese Kana learning web application inspired by traditional Edo-era craftsmanship.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-b91c1c?style=for-the-badge&logo=github)](https://adii-builds.github.io/HiraKata/)
[![React 19](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![PWA Ready](https://img.shields.io/badge/PWA-Offline_First-10b981?style=for-the-badge&logo=pwa)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

[**Launch Web App**](https://adii-builds.github.io/HiraKata/) • [Features](#key-features) • [Keyboard Shortcuts](#keyboard-shortcuts) • [Architecture](#technical-architecture) • [Local Setup](#local-development)

</div>

---

## Overview

**HiraKata (平片 - ひらかた)** is a fast, responsive Japanese syllabary study application designed to replace dated flashcard tools. Built with React 19, TypeScript, and modern CSS, HiraKata pairs an authentic **medieval Japanese Washi & Sumi-e ink aesthetic** with ergonomic mobile gestures, offline continuous stroke order animations, on-the-fly IME conversion, and speed drills.

---

## Key Features

### 1. Complete 244-Kana Dataset & Cross-Script Selection
* **Full Coverage**:
  * **Basic (Gojūon)**: Vowels, k-, s-, t-, n-, h-, m-, y-, r-, w-, and n rows (including voiced dakuon and handakuon).
  * **Combos (Yōon)**: Contracted digraphic sounds (kya, sha, cha, rya...).
  * **Extended Loanwords**: Modern Katakana loanword combinations (fa, ti, di, she, je, we, wi...).
* **Simultaneous Cross-Script Drilling**: Select any combination of Hiragana and Katakana rows and test them together in a single consolidated study queue.

### 2. Traditional Japanese Aesthetics (和紙 & 墨絵)
* **Handmade Mulberry Washi Paper**: Subtle, lightweight SVG fiber texture embedded in the parchment canvas.
* **Deep Sumi-e Ink Typography**: Calligraphic charcoal black (`#181512`) that replicates authentic brushstrokes on parchment.
* **Cinnabar Seal Stamps (*Hanko* 朱色・印鑑)**: Authentic seal stamps for branding, study tabs, and progress counters.
* **Dual Theme Engine**:
  * **Light Theme**: Warm unbleached mulberry Washi paper with aged bamboo/gold trims.
  * **Dark Theme**: Deep nocturnal Japanese Urushi black lacquerware (*漆*) with gold-dust flecks (*蒔絵 Makie*).
* **Japanese Font Selector**: Seamlessly switch between **Gothic (Sans)**, **Mincho (Serif)**, and **Klee One (Handwritten Brush)**.

### 3. Continuous Calligraphic Stroke Order Animations
* **Zero External Dependencies**: Continuous stroke order animation powered by embedded, pre-processed KanjiVG vector path data stored locally.
* **Synchronized Playback**: Displays stroke progression directly underneath the active character, with faint guide paths and animated drawing loops.

### 4. On-The-Fly Kana Conversion Mode (IME)
* **Instant Transliteration**: Toggle `[かな / ROMAJI]` mode to automatically convert your keystrokes into native Japanese script as you type (e.g. typing `k` + `a` instantly produces `か` / `カ`).
* **Smart Disambiguation**: Handles loanwords, double consonants (sokuon `っ`), and nasal `ん` characters accurately.

### 5. 60-Second Speed Blitz Mode
* **Standalone Speed Run**: Dedicated one-click standalone speed drilling mode.
* **Real-Time KPM Metric**: Calculates Kana-Per-Minute recall velocity, accuracy percentage, and persists all-time high scores in `localStorage`.
* **Celebratory Confetti**: Interactive particle animations for new personal records.

### 6. Weak Spots Smart Filter Deck
* **Intelligent Error Tracking**: Logs mistake frequencies across study sessions.
* **One-Click Targeted Drilling**: Drill only your struggled characters with a single tap until mastered.

### 7. Rock-Solid Mobile Keyboard Ergonomics
* **Visual Viewport Auto-Dock**: Powered by the modern `window.visualViewport` API — the mobile bottom dock smoothly tucks away while typing and instantly restores the millisecond the keyboard is dismissed.
* **Dynamic Viewport Scaling**: Uses CSS viewport ratios (`clamp(...)`, `dvh`) so the flashcard dynamically resizes to fit comfortably above on-screen keyboards without being pushed off-screen or cut off.

### 8. Offline PWA (Progressive Web App)
* **Installable**: Add HiraKata to your home screen on iOS, Android, macOS, Windows, and Linux.
* **Service Worker Caching**: Fully functional without an active internet connection.

---

## Keyboard Shortcuts

Designed for high-speed desktop study sessions:

| Key Binding | Action |
| :--- | :--- |
| **`Type (a-z)`** | Input rōmaji or converted kana |
| **`Enter`** | Submit current answer (or advance after reviewing a mistake) |
| **`Ctrl + Enter`** / **`Cmd + Enter`** | Play authentic Japanese native audio pronunciation (`ja-JP`) |
| **`Tab`** | Reveal answer & log character into **Weak Spots** (or skip card) |
| **`Space`** | Advance after reviewing a mistake |

---

## Technical Architecture

```
HiraKata/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD pipeline
├── public/
│   ├── icon.svg                  # Vector application emblem
│   ├── manifest.webmanifest      # PWA application manifest
│   ├── sw.js                     # Offline Service Worker cache engine
│   └── strokes/                  # 244 KanjiVG vectorized stroke SVGs
├── src/
│   ├── components/
│   │   ├── ContinuousStrokeAnimation.tsx  # Calligraphic SVG stroke engine
│   │   ├── KanaColumnView.tsx             # Column deck header & grouped tiles
│   │   ├── KanaGridView.tsx               # Matrix view, script & category filters
│   │   ├── KanaTile.tsx                   # Tactile squircle buttons
│   │   ├── Navbar.tsx                     # Top header & mobile floating dock
│   │   └── StudyView.tsx                  # Flashcard arena, HUD & Blitz engine
│   ├── data/
│   │   └── kanaData.ts           # 244-kana dataset (single, double, extended)
│   ├── store/
│   │   └── useKanaStore.tsx      # React Context state & persistent storage
│   ├── utils/
│   │   ├── kanaIme.ts            # On-the-fly kana IME transliteration engine
│   │   └── sound.ts              # Web Audio chimes & Web Speech synthesis
│   ├── App.tsx                   # Main root container & visualViewport listener
│   ├── index.css                 # Japanese Washi & Ink design tokens & layout
│   └── main.tsx                  # Application entry point
├── index.html                    # HTML shell & font definitions
├── package.json                  # Dependencies & build scripts
├── tsconfig.json                 # TypeScript strict configuration
└── vite.config.ts                # Vite build pipeline & base URL
```

---

## Local Development

### Prerequisites
* **Node.js** (v18 or higher recommended)
* **npm** (v9 or higher)

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone git@github.com:adii-builds/HiraKata.git
   cd HiraKata
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/` (or the URL displayed in the terminal).

4. **Build for production:**
   ```bash
   npm run build
   ```
   Generates optimized static assets in the `dist/` directory.

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## Deployment

Continuous Deployment is managed automatically via **GitHub Actions** ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

Every push to the `main` branch triggers:
1. `npm ci` clean dependency installation.
2. `npm run build` TypeScript compilation and Vite minification.
3. Automated artifact upload and zero-downtime deployment to **GitHub Pages**.

Live URL: **[https://adii-builds.github.io/HiraKata/](https://adii-builds.github.io/HiraKata/)**

---

## Credits & Acknowledgments

* **KanjiVG**: Stroke order vector data by Ulrich Apel, licensed under Creative Commons Attribution-Share Alike 3.0.
* **Google Fonts**:
  * [Noto Sans JP](https://fonts.google.com/specimen/Noto+Sans+JP) (Gothic)
  * [Noto Serif JP](https://fonts.google.com/specimen/Noto+Serif+JP) (Mincho)
  * [Klee One](https://fonts.google.com/specimen/Klee+One) (Handwritten Brush)
  * [Inter](https://fonts.google.com/specimen/Inter) (Latin UI Typography)
* **Lucide Icons**: Crisp open-source interface icons.
* **Canvas Confetti**: Celebration particle physics by Kiril Vatev.

---

## License

This project is open-source under the [MIT License](LICENSE).
