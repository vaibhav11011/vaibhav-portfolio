 # Vaibhav Kumar — Java Backend Engineer Portfolio

A premium, production-ready personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (recommended: 20.x)
- npm 9+

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, ScrollToTop
│   ├── sections/        # All page sections (Hero, About, Skills, etc.)
│   ├── projects/        # Project detail pages
│   └── ui/              # Reusable UI components
├── data/
│   └── portfolio.ts     # All portfolio data (centralized)
├── pages/
│   └── ProjectDetailPage.tsx
├── hooks/               # Custom React hooks
├── assets/              # Static assets
└── App.tsx              # Main app with routing

public/
├── resume.pdf           # Your resume (place here)
└── robots.txt
```

## 📄 Resume Setup

Place your resume PDF at `public/resume.pdf`. This file is served at `/resume.pdf` and linked from the Resume section and hero CTA.

## ✏️ Updating Content

All portfolio content is centralized in `src/data/portfolio.ts`. To update:

- **Personal info**: Edit `siteConfig`
- **About text**: Edit `aboutData`
- **Work experience**: Edit `experiences` array
- **Projects**: Edit `projects` array
- **Skills**: Edit `skillCategories` array
- **Education**: Edit `education` array
- **Case studies**: Edit `caseStudies` array
- **Learning topics**: Edit `learningTopics` array

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Framework: Vite
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy

### Netlify

1. Push your code to GitHub
2. Import on [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

### GitHub Pages

1. Install: `npm install -D gh-pages`
2. Add to `vite.config.ts`: `base: '/<repo-name>/'`
3. Add scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run: `npm run deploy`

### Custom Domain

After deploying to Vercel or Netlify:
1. Add your domain in the platform's domain settings
2. Update DNS records as instructed
3. SSL is automatically provisioned

## 🛠 Tech Stack

- **React 19** — UI framework
- **TypeScript** — Type safety
- **Vite** — Build tool
- **Tailwind CSS v4** — Styling
- **Framer Motion** — Animations
- **Lucide React** — Icons
- **React Router** — Client-side routing

## 📧 Contact Form

The contact form uses a `mailto:` link to open the user's email client. For a backend-powered form, integrate with:
- [Formspree](https://formspree.io)
- [EmailJS](https://emailjs.com)
- [Resend](https://resend.com)

## 📋 Environment Variables

No environment variables are required for the basic setup. If you add analytics or a form backend, create a `.env` file:

```
VITE_FORM_ENDPOINT=your-form-endpoint
```

## License

Personal portfolio — All rights reserved.
# vaibhav-portfolio
# vaibhav-portfolio
# vaibhav-portfolio
# vaibhav-portfolio
