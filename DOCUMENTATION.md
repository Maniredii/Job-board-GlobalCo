# 📖 JobSphere — Feature Documentation

## Table of Contents

1. [Overview](#1-overview)
2. [Landing Page](#2-landing-page)
3. [Job Search & Filtering](#3-job-search--filtering)
4. [Job Detail Page](#4-job-detail-page)
5. [Job Application Flow](#5-job-application-flow)
6. [Post a Job (Multi-Step Form)](#6-post-a-job-multi-step-form)
7. [Companies Directory](#7-companies-directory)
8. [Company Profile Page](#8-company-profile-page)
9. [Bookmark / Save Jobs](#9-bookmark--save-jobs)
10. [Dark/Light Theme Toggle](#10-darklight-theme-toggle)
11. [Navigation & Routing](#11-navigation--routing)
12. [Responsive Design](#12-responsive-design)
13. [Design System](#13-design-system)
14. [SEO & Metadata](#14-seo--metadata)
15. [Performance Optimizations](#15-performance-optimizations)
16. [CI/CD Pipeline](#16-cicd-pipeline)
17. [Deployment](#17-deployment)
18. [Architecture](#18-architecture)

---

## 1. Overview

**JobSphere** is a modern, full-featured job board platform built with Next.js 16 (App Router), React 19, and a custom vanilla CSS design system. It provides a premium user experience for both job seekers and employers.

### Live Links

| Resource | URL |
|----------|-----|
| 🔗 **Live Site** | [job-board-global-co.vercel.app](https://job-board-global-co.vercel.app) |
| 💻 **GitHub Repo** | [github.com/Maniredii/Job-board-GlobalCo](https://github.com/Maniredii/Job-board-GlobalCo) |
| 🔄 **CI/CD Pipeline** | [GitHub Actions](https://github.com/Maniredii/Job-board-GlobalCo/actions) |

### Key Metrics
- **12** curated job listings across 8 categories
- **8** company profiles with full details
- **27** statically generated pages
- **10+** reusable UI components
- **100%** responsive design coverage

---

## 2. Landing Page

**Route:** `/`  
**File:** `src/app/page.js`

The landing page serves as the primary entry point and is designed to make a strong first impression.

### Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-width dark gradient background with animated floating glow orbs, grid overlay, headline, subtitle, search bar, and popular tags |
| **Stats Bar** | 4-card grid showing key platform metrics (Active Jobs, Companies, Job Seekers, Remote Jobs) with gradient text |
| **Categories** | 8 category cards with icons, job counts, and animated progress bars. Click any to filter jobs |
| **Featured Jobs** | 2-column grid of hand-picked featured job cards with the "Featured" badge |
| **Top Companies** | 3-column grid showcasing company logos, names, industries, and ratings |
| **CTA Section** | Call-to-action card with gradient background encouraging users to browse jobs or post a job |

### Visual Effects
- Floating radial gradient orbs with CSS animation
- Grid background pattern with semi-transparent lines
- Gradient text rendering using `background-clip: text`
- Cards with hover-lift animation (`translateY(-4px)`)
- Staggered fade-in animations on category cards

---

## 3. Job Search & Filtering

**Route:** `/jobs`  
**File:** `src/app/jobs/page.js` + `src/components/JobFilters.js`

### Search Capabilities

The search system operates via URL search parameters, making all filtered views shareable and bookmarkable.

| Filter | Type | Options |
|--------|------|---------|
| **Keyword Search** | Text input | Matches job title, skills, and company name |
| **Category** | Button list | Engineering, Design, Marketing, Sales, Product, Data Science, DevOps, Management |
| **Job Type** | Button list | Full-time, Part-time, Contract |
| **Experience Level** | Button list | Junior, Mid, Senior, Lead |
| **Work Mode** | Button list | Remote, Hybrid, On-site |
| **Sort By** | Dropdown | Newest First, Highest Salary, Lowest Salary, Fewest Applicants |

### Search Implementation
- **Server-Side Filtering:** The `searchParams` prop is used in the server component to filter jobs before rendering
- **URL-Based State:** All filter state is stored in URL parameters via `useSearchParams`
- **Debounced Search:** Keyword input has a 400ms debounce to prevent excessive URL updates
- **Clear All:** One-click button to reset all filters
- **Empty State:** Custom illustration and message when no results match

### Hero Search Bar
The hero search bar (`src/components/SearchBar.js`) provides a dual-input search:
- **Left input:** Job title, keyword, or company name
- **Right input:** City, state, or "remote"
- Both inputs redirect to `/jobs` with appropriate query parameters

---

## 4. Job Detail Page

**Route:** `/jobs/[id]`  
**File:** `src/app/jobs/[id]/page.js`

### Layout
Two-column layout with main content (left) and sticky sidebar (right).

### Main Content Sections

| Section | Content |
|---------|---------|
| **Header** | Company logo, name (linked), job title, location, type, salary, posted date, tags (remote/level/category), Apply & Save buttons |
| **Description** | Multi-paragraph job description with proper spacing |
| **Requirements** | Bulleted list with accent-colored markers |
| **Responsibilities** | Bulleted list of role responsibilities |
| **Skills** | Pill-shaped tags for required technologies |
| **Benefits** | 2-column grid of perks with checkmark icons |

### Sidebar Widgets

| Widget | Content |
|--------|---------|
| **Company Info** | Logo, name, description, industry, size, founded year, rating with review count, and link to company profile |
| **Job Overview** | Posted date, application deadline, applicant count, and salary range |
| **Related Jobs** | Up to 3 other jobs from the same company |

### Technical Details
- **Static Generation:** Uses `generateStaticParams()` to pre-render all job detail pages at build time
- **Dynamic Metadata:** `generateMetadata()` generates unique title and description per job
- **Breadcrumb Navigation:** Home → Jobs → Job Title

---

## 5. Job Application Flow

**Component:** `src/components/ApplyButton.js`

### Application Process
1. User clicks **"Apply Now"** button on any job detail page
2. A modal overlay appears with a backdrop blur effect
3. User fills in the application form
4. On submission, a success confirmation is shown

### Form Fields

| Field | Type | Required |
|-------|------|----------|
| Full Name | Text | ✅ |
| Email Address | Email | ✅ |
| Phone Number | Tel | ❌ |
| Resume | File (PDF/DOC/DOCX) | ✅ |
| Cover Letter | Textarea | ❌ |

### UX Details
- **Modal Animation:** Scale-in animation with backdrop blur
- **File Upload:** Drag-and-drop style area with dashed border and hover effect
- **Success State:** Animated emoji, confirmation message, and close button
- **Accessibility:** Form inputs have proper labels and required validation

---

## 6. Post a Job (Multi-Step Form)

**Route:** `/post-job`  
**File:** `src/app/post-job/page.js`

### Step-by-Step Wizard

#### Step 1: Job Details
| Field | Type |
|-------|------|
| Job Title | Text |
| Category | Select dropdown (8 categories) |
| Job Type | Select (Full-time, Part-time, Contract, Internship) |
| Experience Level | Select (Junior, Mid, Senior, Lead) |
| Work Mode | Select (Remote, Hybrid, On-site) |
| Location | Text |
| Min Salary | Number |
| Max Salary | Number |

#### Step 2: Job Description
| Field | Type |
|-------|------|
| Job Description | Textarea (6 rows) |
| Requirements | Textarea (one per line) |
| Responsibilities | Textarea (one per line) |
| Required Skills | Text (comma-separated) |
| Benefits & Perks | Text (comma-separated) |

#### Step 3: Company Information
| Field | Type |
|-------|------|
| Company Name | Text |
| Company Website | URL |
| Company Description | Textarea |
| Contact Email | Email |

### UX Features
- **Progress Indicator:** Visual step counter with connecting bar and completion states
- **Step Transitions:** Fade-in animation between steps
- **Back Navigation:** Users can go back to previous steps
- **Form Validation:** Required fields with HTML5 validation
- **Success State:** Confirmation card with "Post Another Job" option

---

## 7. Companies Directory

**Route:** `/companies`  
**File:** `src/app/companies/page.js`

### Display
- **2-column responsive grid** of company cards
- Each card shows: logo, name, industry, star rating, description (2-line truncated), culture tags, location, company size, and open position count
- **Hover effect:** Card lifts with shadow glow

### Data per Company
- Company name and logo (emoji representation)
- Industry classification
- Star rating (out of 5) with review count
- Company culture values
- Location and size
- Number of open positions (dynamically counted)

---

## 8. Company Profile Page

**Route:** `/companies/[id]`  
**File:** `src/app/companies/[id]/page.js`

### Layout
Two-column layout: main content + sticky sidebar.

### Sections

| Section | Description |
|---------|-------------|
| **Header** | Large logo, company name, tagline (industry · founded · location), rating, and employee count |
| **About** | Full company description |
| **Culture** | Pill-shaped culture value badges with accent icons |
| **Benefits** | 2-column grid of employee benefits with checkmark icons |
| **Open Positions** | Full job cards for all positions at the company |
| **Sidebar** | Company info card with website, industry, size, founded year, and location |

### Technical Details
- **Static Generation:** `generateStaticParams()` pre-renders all company pages
- **Dynamic Metadata:** Unique title and description per company
- **Breadcrumb Navigation:** Home → Companies → Company Name

---

## 9. Bookmark / Save Jobs

**Component:** `src/components/BookmarkButton.js`

### Functionality
- **Toggle Save:** Click to save/unsave a job
- **Persistence:** Bookmarked job IDs stored in `localStorage` under `jobsphere-bookmarks`
- **Visual Feedback:** Icon fills with color and label changes to "Saved"
- **Animation:** Scale-in bounce animation on bookmark

---

## 10. Dark/Light Theme Toggle

**Component:** `src/components/ThemeProvider.js`

### Implementation
- **React Context:** Theme state shared via `ThemeContext`
- **System Detection:** Automatically detects `prefers-color-scheme: dark`
- **Persistence:** Saves preference to `localStorage` under `jobsphere-theme`
- **Data Attribute:** Sets `data-theme="dark"` on `<html>` for CSS variable switching
- **Smooth Transition:** All colors transition smoothly (250ms)

### CSS Variables Changed (60+ properties)
- Background colors (5 variants)
- Text colors (4 variants)
- Border colors (3 variants)
- Shadow styles (6 variants)
- Gradient overlays

---

## 11. Navigation & Routing

**Component:** `src/components/Navbar.js`

### Features
- **Sticky Header:** Fixed to top with `position: sticky`
- **Glassmorphism on Scroll:** Background becomes translucent with backdrop blur when scrolled
- **Active Link Indicator:** Gradient underline on current page
- **Mobile Menu:** Hamburger toggle with animated icon, dropdown menu, and overlay
- **Theme Toggle:** Moon/sun icon button with rotation animation on hover

### Routes

| Route | Page | Type |
|-------|------|------|
| `/` | Home / Landing Page | Static |
| `/jobs` | Job Listings (with filters) | Dynamic (searchParams) |
| `/jobs/[id]` | Job Detail | SSG (12 pages) |
| `/companies` | Companies Directory | Static |
| `/companies/[id]` | Company Profile | SSG (8 pages) |
| `/post-job` | Post a Job Form | Static (client-side) |

---

## 12. Responsive Design

### Breakpoints

| Breakpoint | Target |
|------------|--------|
| `> 1024px` | Desktop |
| `768px – 1024px` | Tablet |
| `480px – 768px` | Mobile |
| `< 480px` | Small Mobile |

### Responsive Behaviors
- **Grid layouts** collapse from multi-column to single-column
- **Navigation** switches to hamburger menu
- **Search bar** stacks vertically
- **Sidebar** moves below main content
- **Filter pills** switch from vertical list to horizontal wrap
- **CTA buttons** stack vertically
- **Card padding** reduces on smaller screens
- **Font sizes** scale with `clamp()` for fluid typography

---

## 13. Design System

**File:** `src/app/globals.css`

### Color Palette
- **Primary:** Indigo (#6366f1) with light and dark variants
- **Secondary:** Cyan (#06b6d4)
- **Accent:** Amber (#f59e0b)
- **Success:** Emerald (#10b981)
- **Danger:** Red (#ef4444)
- **Neutral:** Slate scale from #f8fafc to #0f172a

### Component Library (CSS)
| Component | Variants |
|-----------|----------|
| **Buttons** | Primary, Secondary, Outline, Ghost + Small, Large, Icon |
| **Cards** | Default, Glass |
| **Badges** | Primary, Success, Warning, Danger, Info, Secondary |
| **Inputs** | Default, With Icon |
| **Tags** | Default with hover state |
| **Modals** | With backdrop blur |
| **Toasts** | With slide-in animation |
| **Tooltips** | With fade-in on hover |
| **Skeleton** | Shimmer loading animation |

### Animations
| Name | Usage |
|------|-------|
| `fadeInUp` | Page elements entrance |
| `fadeIn` | Backdrop appearance |
| `scaleIn` | Modal/success state |
| `slideInRight` | Toast notifications |
| `pulse-glow` | Live indicator dot |
| `float` | Hero glow orbs |
| `shimmer` | Skeleton loading |
| `gradient-shift` | Background animation |
| `spin` | Loading spinner |

---

## 14. SEO & Metadata

### Global Metadata (Root Layout)
- Title template: `%s | JobSphere`
- Default title: `JobSphere — Find Your Dream Job`
- Meta description, keywords, authors
- Open Graph tags (title, description, type, locale, site name)
- Twitter Card metadata
- Robots directive (index, follow)

### Page-Specific Metadata
- **Jobs page:** "Find Jobs" with search description
- **Job detail:** Dynamic title (`{Job Title} at {Company}`) and description
- **Companies page:** "Companies" with directory description
- **Company detail:** Dynamic title (`{Company Name} — Company Profile & Jobs`)

### Semantic HTML
- Proper heading hierarchy (single `<h1>` per page)
- `<nav>`, `<main>`, `<article>`, `<aside>`, `<section>`, `<footer>` elements
- ARIA labels on interactive elements
- Unique IDs on all interactive elements for testing

---

## 15. Performance Optimizations

| Optimization | Implementation |
|-------------|----------------|
| **Static Generation (SSG)** | Job detail and company pages pre-rendered at build time |
| **Font Optimization** | Inter font via `next/font` with `display: swap` |
| **CSS Modules** | Component-scoped CSS prevents style conflicts |
| **Image Optimization** | SVG icons inline (no external image requests) |
| **Prefetching** | Next.js `<Link>` component auto-prefetches routes |
| **Code Splitting** | Automatic per-route code splitting |
| **Client Components** | Only interactive parts marked with `'use client'` |
| **Minimal JS Bundle** | Static elements stay as Server Components |

---

## 16. CI/CD Pipeline

**File:** `.github/workflows/deploy.yml`

### Pipeline Architecture

```
┌─────────────┐     ┌─────────────┐     ┌──────────────────┐
│  Push/PR to │────▶│ Lint & Build │────▶│ Deploy to Vercel │
│    main     │     │   (verify)  │     │  (prod/preview)  │
└─────────────┘     └─────────────┘     └──────────────────┘
```

### Jobs Detail

#### Job 1: Lint & Build
- Checks out code
- Sets up Node.js 20 with npm cache
- Installs dependencies (`npm ci`)
- Runs ESLint (`npm run lint`)
- Builds the application (`npm run build`)

#### Job 2: Deploy Production
- Triggered only on push to `main`
- Installs Vercel CLI
- Pulls Vercel environment config
- Builds with Vercel
- Deploys to production

#### Job 3: Deploy Preview
- Triggered only on pull requests
- Creates a preview deployment URL
- Useful for reviewing changes before merging

### Required Secrets
| Secret | Description |
|--------|-------------|
| `VERCEL_TOKEN` | API token from Vercel dashboard |
| `VERCEL_ORG_ID` | Organization ID from `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | Project ID from `.vercel/project.json` |

---

## 17. Deployment

### Live Production URL

🔗 **https://job-board-global-co.vercel.app**

The application is deployed to Vercel via the CI/CD pipeline. Every push to `main` triggers an automatic production deployment.

### Vercel Deployment Steps

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Link to Vercel:**
   ```bash
   vercel link
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

4. **Set up GitHub Secrets** (for CI/CD):
   - Go to repo → Settings → Secrets → Actions
   - Add `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`

---

## 18. Architecture

### Component Architecture

```
RootLayout (Server Component)
├── ThemeProvider (Client Component - Context)
├── Navbar (Client Component - scroll/menu state)
├── {Page Content} (Server/Client depending on route)
│   ├── SearchBar (Client - form state)
│   ├── JobFilters (Client - URL state management)
│   ├── JobCard (Server - static rendering)
│   ├── ApplyButton (Client - modal state)
│   └── BookmarkButton (Client - localStorage)
└── Footer (Server Component)
```

### Data Flow

```
lib/data.js (Mock Data Layer)
    ├── getJob(id) → Job Detail Page
    ├── getCompany(id) → Company Detail Page
    ├── searchJobs(filters) → Jobs Listing Page
    ├── getFeaturedJobs() → Home Page
    ├── getJobsByCompany(id) → Company Page
    ├── getJobsByCategory(id) → Filtered Jobs
    ├── formatSalary(salary) → Display formatting
    ├── timeAgo(date) → Relative time display
    └── getStats() → Platform statistics
```

### Server vs Client Components

| Component | Type | Reason |
|-----------|------|--------|
| Layout | Server | Static structure, no interactivity |
| Home Page | Server | Static content rendering |
| Job Detail | Server | Data fetching, static generation |
| Company Detail | Server | Data fetching, static generation |
| Jobs Page | Server | Server-side filtering via searchParams |
| Navbar | Client | Scroll detection, mobile menu toggle |
| SearchBar | Client | Form state, router navigation |
| JobFilters | Client | URL parameter management |
| ApplyButton | Client | Modal state management |
| BookmarkButton | Client | localStorage access |
| ThemeProvider | Client | Context, localStorage, DOM manipulation |
| Post Job | Client | Multi-step form state |

---

*Documentation generated for JobSphere v0.1.0*
