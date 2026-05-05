# 🌐 JobSphere — Modern Job Board Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![CSS](https://img.shields.io/badge/Vanilla_CSS-Design_System-blue?style=for-the-badge&logo=css3)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions)

**A premium, feature-rich job board built with Next.js 16, React 19, and vanilla CSS. Featuring a stunning glassmorphism UI, dark/light mode, advanced search & filtering, multi-step job posting, and full CI/CD deployment to Vercel.**

[🔗 Live Demo](#) · [📖 Documentation](./DOCUMENTATION.md) · [🐛 Report Bug](../../issues) · [✨ Request Feature](../../issues)

</div>

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🏠 **Landing Page** | Animated hero with gradient effects, floating glows, and grid background |
| 🔍 **Advanced Job Search** | Real-time search with keyword, location, and multi-filter support |
| 🏷️ **Smart Filtering** | Filter by category, job type, experience level, work mode, and sort options |
| 📋 **Job Detail Pages** | Comprehensive job pages with requirements, responsibilities, skills, and benefits |
| 📝 **Multi-Step Job Posting** | 3-step wizard form for employers to post jobs with progress indicator |
| 🏢 **Company Profiles** | Dedicated company pages with culture, benefits, ratings, and open positions |
| 📑 **Job Application** | Modal-based application form with resume upload and cover letter |
| 🔖 **Bookmark Jobs** | Save/bookmark jobs with localStorage persistence |
| 🌙 **Dark/Light Mode** | Toggle theme with system preference detection and localStorage persistence |
| 📱 **Fully Responsive** | Mobile-first design that works perfectly on all screen sizes |
| 🎨 **Premium Design** | Glassmorphism, gradients, micro-animations, and premium color palette |
| 🔧 **SEO Optimized** | Full metadata, Open Graph tags, semantic HTML, and structured data |
| 🚀 **CI/CD Pipeline** | GitHub Actions with lint, build, and auto-deploy to Vercel |

---

## 🏗️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** Vanilla CSS with custom design system
- **Fonts:** [Inter](https://fonts.google.com/specimen/Inter) via `next/font`
- **Deployment:** [Vercel](https://vercel.com/)
- **CI/CD:** [GitHub Actions](https://github.com/features/actions)

---

## 📁 Project Structure

```
job-board/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD pipeline
├── src/
│   ├── app/
│   │   ├── layout.js           # Root layout with metadata
│   │   ├── page.js             # Home page
│   │   ├── page.module.css     # Home page styles
│   │   ├── globals.css         # Design system & global styles
│   │   ├── jobs/
│   │   │   ├── page.js         # Job listings with search/filter
│   │   │   ├── page.module.css
│   │   │   └── [id]/
│   │   │       ├── page.js     # Job detail page
│   │   │       └── page.module.css
│   │   ├── companies/
│   │   │   ├── page.js         # Companies listing
│   │   │   ├── page.module.css
│   │   │   └── [id]/
│   │   │       ├── page.js     # Company detail page
│   │   │       └── page.module.css
│   │   └── post-job/
│   │       ├── page.js         # Post a job (multi-step form)
│   │       └── page.module.css
│   ├── components/
│   │   ├── Navbar.js           # Navigation bar
│   │   ├── Navbar.module.css
│   │   ├── Footer.js           # Footer
│   │   ├── Footer.module.css
│   │   ├── SearchBar.js        # Search bar component
│   │   ├── SearchBar.module.css
│   │   ├── JobCard.js          # Job listing card
│   │   ├── JobCard.module.css
│   │   ├── JobFilters.js       # Sidebar filters
│   │   ├── JobFilters.module.css
│   │   ├── ApplyButton.js      # Application modal
│   │   ├── ApplyButton.module.css
│   │   ├── BookmarkButton.js   # Save/bookmark jobs
│   │   ├── BookmarkButton.module.css
│   │   └── ThemeProvider.js    # Dark/Light mode provider
│   └── lib/
│       └── data.js             # Mock data & utility functions
├── public/                     # Static assets
├── package.json
├── next.config.mjs
├── DOCUMENTATION.md            # Detailed feature documentation
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ installed
- **npm** or **yarn** package manager

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/job-board.git
cd job-board

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 🔄 CI/CD Pipeline

The project uses **GitHub Actions** for continuous integration and deployment.

### Pipeline Overview

```
Push to main → Lint → Build → Deploy to Vercel (Production)
Pull Request  → Lint → Build → Deploy to Vercel (Preview)
```

### Pipeline Jobs

| Job | Trigger | Description |
|-----|---------|-------------|
| **Lint & Build** | Push/PR to `main` | Runs ESLint and builds the app |
| **Deploy Production** | Push to `main` | Deploys to Vercel production |
| **Deploy Preview** | Pull Request | Creates a preview deployment |

### Setup Instructions

1. **Create a Vercel project** and link it to your repository
2. **Add secrets** to your GitHub repository:
   - `VERCEL_TOKEN` — Your Vercel API token
   - `VERCEL_ORG_ID` — Your Vercel organization ID
   - `VERCEL_PROJECT_ID` — Your Vercel project ID

---

## 🎨 Design System

The app uses a custom design system built with CSS custom properties:

- **Colors:** Curated palette with primary (indigo), secondary (cyan), and accent (amber) colors
- **Typography:** Inter font family with 10 size scales
- **Shadows:** 8 shadow levels from `xs` to `2xl` plus glow effects
- **Animations:** 10+ keyframe animations including fadeInUp, scaleIn, shimmer, float
- **Components:** Buttons, Cards, Badges, Inputs, Modals, Tags, Tooltips

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p>Built with ❤️ using AI-assisted development</p>
</div>
