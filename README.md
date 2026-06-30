# Portfolio Website

A modern, responsive portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Inspired by professional developer portfolios with a dark theme, glassmorphism effects, and smooth animations.

## Features

- Responsive design (mobile, tablet, desktop)
- Smooth scroll animations with Framer Motion
- Animated skill proficiency bars with tabbed categories
- Timeline-style experience section
- Project cards with gradient headers
- Contact form (ready to connect to Formspree/EmailJS)
- SEO-friendly metadata
- Dark theme with gradient accents

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Install & Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Customize Your Content

Edit **`src/data/portfolio.ts`** to update:

- Your name, email, social links
- About section paragraphs
- Skills and proficiency levels
- Work experience and volunteering
- Projects with descriptions and tags

## Publish Your Website

### Option 1: Vercel (Recommended — Free)

[Vercel](https://vercel.com) is made by the creators of Next.js and offers free hosting.

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up with GitHub
   - Click **"Add New Project"**
   - Import your `portfolio` repository
   - Click **Deploy** (no configuration needed)
   - Your site will be live at `https://your-project.vercel.app`

3. **Custom Domain (Optional)**
   - In Vercel dashboard → Project → Settings → Domains
   - Add your domain (e.g. `krishnapensalwar.me`)
   - Update DNS records as instructed by Vercel

### Option 2: Netlify (Free)

1. Push code to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Build command: `npm run build`
4. Publish directory: `.next` (or use Netlify's Next.js plugin)

### Option 3: GitHub Pages (Static Export)

Add to `next.config.ts`:
```ts
const nextConfig = {
  output: 'export',
};
```

Then:
```bash
npm run build
# Deploy the `out` folder to GitHub Pages
```

## Connect Contact Form

The contact form currently shows a success message locally. To receive real emails:

### Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Update the form in `src/components/Contact.tsx`:
   ```tsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Follow their React integration guide

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & Tailwind
│   ├── layout.tsx       # Root layout & metadata
│   └── page.tsx         # Main page
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── WhatIDo.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── data/
    └── portfolio.ts     # All your content (edit this!)
```

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## License

MIT — feel free to use this for your own portfolio!
