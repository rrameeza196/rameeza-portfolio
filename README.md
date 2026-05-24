# Rameeza Rahim — Portfolio

Built with **Next.js 14** + TypeScript + CSS Modules. Zero external UI libraries.

---

## Run Locally

Make sure you have **Node.js 18+** installed. Check with:
```bash
node -v
```

Then:

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deploy to Vercel (Free — no domain needed)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → sign up with GitHub
3. Click **"Add New Project"** → import your repo
4. Click **Deploy** — done!

You'll get a free URL like `rameeza-portfolio.vercel.app` instantly.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css       ← design tokens & base styles
│   ├── layout.tsx        ← root layout + SEO metadata
│   └── page.tsx          ← assembles all sections
└── components/
    ├── Navbar.tsx / .css
    ├── Hero.tsx / .css
    ├── Skills.tsx / .css
    ├── Experience.tsx / .css
    ├── Projects.tsx / .css
    ├── Education.tsx / .css
    ├── Contact.tsx / .css
    ├── shared.module.css  ← shared utilities (buttons, fade-up)
    └── useFadeUp.ts       ← scroll animation hook
```

## Customization

- **Colors**: Edit CSS variables in `src/app/globals.css`
- **Content**: Edit data arrays directly in each component
- **Resume link**: Update `RESUME_LINK` in `Hero.tsx` and `Contact.tsx`
