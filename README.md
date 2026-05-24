<div align="center">

# Rameeza Rahim — Portfolio

### 🌐 [rameeza-portfolio.vercel.app](https://rameeza-portfolio.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

Personal portfolio website built with **Next.js 14**, **TypeScript**, and **CSS Modules** — no UI libraries, no boilerplate.

</div>

---

## 📸 Preview

> **Live site:** [https://rameeza-portfolio.vercel.app](https://rameeza-portfolio.vercel.app)

The portfolio features a clean, minimalistic light theme with a forest green + warm gold accent palette, smooth scroll animations, and a fully responsive layout.

---

## ✨ Sections

| Section | Description |
|---|---|
| **Hero** | Introduction with animated badge, name, title, bio, and CTA buttons |
| **Skills** | Categorized skill cards — AI/ML, Programming, Web Dev, Cloud & Hardware |
| **Experience** | Vertical timeline of internships and teaching assistant roles |
| **Projects** | Card grid of 6 projects with tags and category labels |
| **Education** | BS Computer Engineering (ITU Lahore) & ICS (PGC Lahore) |
| **Contact** | Email, LinkedIn, and Resume download links |

---

## 🛠 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules (zero external UI libraries)
- **Fonts:** DM Serif Display + DM Sans (Google Fonts)
- **Animations:** Custom `useFadeUp` hook with IntersectionObserver
- **Deployment:** [Vercel](https://vercel.com)

---

## 🚀 Run Locally

**Prerequisites:** Node.js 18+

```bash
# 1. Clone the repo
git clone https://github.com/rrameeza196/rameeza-portfolio.git
cd rameeza-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
rameeza-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css        # Design tokens & base styles
│   │   ├── layout.tsx         # Root layout + SEO metadata
│   │   └── page.tsx           # Main page (assembles sections)
│   └── components/
│       ├── Navbar.tsx          # Sticky nav with mobile menu
│       ├── Hero.tsx            # Hero / About section
│       ├── Skills.tsx          # Skills grid
│       ├── Experience.tsx      # Timeline
│       ├── Projects.tsx        # Project cards
│       ├── Education.tsx       # Education cards
│       ├── Contact.tsx         # Contact + footer
│       ├── shared.module.css   # Shared utilities (buttons, fade-up)
│       └── useFadeUp.ts        # Scroll animation hook
├── public/
├── package.json
├── tsconfig.json
└── next.config.js
```

---

## 🎨 Design Tokens

All colors and spacing live in `src/app/globals.css` as CSS variables — easy to customize:

```css
--primary:       #2d6a4f;   /* Forest green */
--accent:        #d4a847;   /* Warm gold */
--bg:            #fafaf8;   /* Off-white */
--text:          #1a1a18;   /* Near black */
--text-muted:    #6b6b65;   /* Muted gray */
```

---

## ☁️ Deploy to Vercel

This site is deployed on Vercel. To deploy your own fork:

1. Fork this repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your forked repo
4. Click **Deploy** — no configuration needed

Vercel auto-deploys on every push to `main`.

---

## 📬 Contact

| Platform | Link |
|---|---|
| 📧 Email | [rrameeza196@gmail.com](mailto:rrameeza196@gmail.com) |
| 💼 LinkedIn | [linkedin.com/in/rameeza-rahim](https://linkedin.com/in/rameeza-rahim) |
| 🌐 Portfolio | [rameeza-portfolio.vercel.app](https://rameeza-portfolio.vercel.app) |

---

<div align="center">

Built with care in Lahore, Pakistan 🇵🇰

</div>
