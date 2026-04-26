# 🚀 Portfolio Website — Next.js + Tailwind CSS

## Setup karo (sirf ek baar)

```bash
# 1. Folder mein jao
cd portfolio

# 2. Dependencies install karo
npm install

# 3. Dev server chalao
npm run dev
```

Browser mein kholo: **http://localhost:3000**

---

## Kya kya update karna hai

### `app/page.tsx`
- `YourName` → apna asli naam
- Projects section mein apne real projects add karo
- Contact links (email, WhatsApp, GitHub, LinkedIn) update karo

### `components/Navbar.tsx`
- `YourName.` → apna naam

### `app/layout.tsx`
- `title` aur `description` mein apna naam/tagline likho

---

## Deploy karo (FREE mein)

### Vercel pe (recommended — sabse aasan)
```bash
npm install -g vercel
vercel
```
Ek GitHub account se login karo aur done! Aapko milega:
**https://yourname.vercel.app**

### GitHub Pages pe
```bash
npm run build
npm run export
```

---

## Project structure

```
portfolio/
├── app/
│   ├── layout.tsx      ← fonts, metadata
│   ├── page.tsx        ← main page (hero, skills, services, projects, contact)
│   └── globals.css     ← global styles
├── components/
│   ├── Navbar.tsx      ← navigation bar
│   └── useReveal.ts    ← scroll animation hook
├── tailwind.config.js
└── package.json
```
