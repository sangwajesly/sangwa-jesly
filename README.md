# Sangwa Jesly - Portfolio Website

Personal portfolio website for **Sangwa Jesly**, Designer & Software Engineer. Built with **Next.js (App Router)**, **Tailwind CSS**, and **TypeScript**.

- **Live URL:** [https://sangwajesly.vercel.app](https://sangwajesly.vercel.app)
- **Primary conversions:** Direct WhatsApp chat, Email inquiry, and Project detail exploration.

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### 3. Production Build
```bash
npm run build
```
Generates optimized static pages for production deployment on Vercel.

---

## How to Add or Edit a Project

Adding a new project to the portfolio is straightforward and does not require touching page layouts.

### Step 1: Add Project Images
Create a directory under `public/work/` using the project's URL slug:
```
public/
  work/
    my-new-project/
      cover.jpg      # Card thumbnail (recommended: 4:3 or 16:9, min 1200px wide)
      hero.jpg       # Detail page header image (recommended: 16:9, min 1920px wide)
      1.jpg          # Gallery image 1
      2.jpg          # Gallery image 2
```

### Step 2: Add Entry in `src/content/projects.ts`
Open `src/content/projects.ts` and append a new object to the `projects` array:

```typescript
{
  slug: "my-new-project",
  number: "09", // Monospace index
  title: "Client Name: Project Title",
  category: "Websites", // Options: "Brand identity" | "Websites" | "Event branding" | "Flyers, icons and social media"
  client: "Client Name",
  role: "Web designer and developer",
  summary: "A plain-language description of what this project accomplished.",
  year: "2026",
  liveUrl: "https://example.com", // Optional
  images: {
    cover: "/work/my-new-project/cover.jpg",
    hero: "/work/my-new-project/hero.jpg",
    gallery: [
      { src: "/work/my-new-project/1.jpg", alt: "Preview of feature" },
      { src: "/work/my-new-project/2.jpg", alt: "Mobile layout preview" },
    ],
  },
  about: "Background context on the client and their challenge.",
  need: "What the client needed and why.",
  madeList: [
    "Full responsive design in Figma",
    "Next.js web application with FastAPI backend",
    "AI-powered search integration",
  ],
  result: "How the finished work solved their problem.",
}
```

The site will automatically:
- Render the project card on the homepage in the correct category section
- Generate a dedicated static detail page at `/work/my-new-project`
- Add the project to the XML sitemap (`/sitemap.xml`)
- Compute related projects and next/previous links

---

## How to Update Profile, Socials, & Contact Info

All personal and contact details are centralized in `src/lib/config.ts`:

```typescript
export const siteConfig = {
  name: "Sangwa Jesly",
  title: "Designer & Software Engineer",
  email: "sangwajesly82@gmail.com",
  phone: "+237 682 833 601",
  whatsappNumber: "237682833601",
  whatsappLink: "https://wa.me/237682833601?text=...",
  socials: {
    github: "https://github.com/sangwajesly",
    linkedin: "https://www.linkedin.com/in/sangwa-jesly-a0a202283",
    facebook: "https://facebook.com/sangwajesly",
    twitter: "https://x.com/sangwajesly",
    tiktok: "https://www.tiktok.com/@jeslysangwa",
  },
  availability: "Available for new projects",
  clients: ["NervTek", "CivilSalt", "Klarify", "Bongbine Ltd", "Traitz Tech"],
};
```

Updating this file automatically updates:
- Header and Footer links
- Floating WhatsApp Contact Button
- SEO and Open Graph metadata
- Social media icon buttons

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4 (Theme tokens in `src/app/globals.css`)
- **Icons:** `react-icons/fa6` & `lucide-react`
- **Fonts:** Inter & Newsreader (`next/font/google`)
- **Deployment:** Vercel
