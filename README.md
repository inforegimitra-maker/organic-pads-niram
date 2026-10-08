# NIRAM Organic Pads — Official Website

> Premium Organic Cotton Anion Sanitary Pads, Disposable Period Panties & Baby Diapers.
> Biocompatible • Rash-Free • Hypoallergenic • Certified Purity

---

## 🚀 Quick Deployment Guide

This project is pre-configured and optimized for **1-click automated deployment** on:
- **Vercel**
- **Netlify**
- **GitHub Pages**

---

### Step 1: Push Code to GitHub

Open your terminal in the project directory and run:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Add all project files
git add .

# 3. Create initial commit
git commit -m "feat: complete NIRAM Organic Pads website"

# 4. Set branch to main
git branch -M main

# 5. Link to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 6. Push to GitHub
git push -u origin main
```

---

### Step 2: Choose Your Hosting Provider

#### Option A: Deploy to Vercel (Recommended — 30 seconds)

1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Select your GitHub repository (`niram-organic-pads`).
4. Vercel will automatically detect **Vite** and read `vercel.json`.
5. Click **"Deploy"**.
6. Your website is live with free HTTPS and automatic deployment on every git push!

---

#### Option B: Deploy to Netlify (1 minute)

1. Go to [netlify.com](https://netlify.com) and log in with GitHub.
2. Click **"Add new site"** → **"Import an existing project"**.
3. Select your GitHub repository.
4. Netlify will automatically detect settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy site"**.
6. Done! Free SSL certificate and custom domain support included.

---

#### Option C: Deploy to GitHub Pages (100% Free & Automated)

The repository includes a ready-to-run GitHub Actions workflow (`.github/workflows/deploy.yml`).

1. Push your code to GitHub.
2. Go to your repository on GitHub:
   - Navigate to **Settings** → **Pages** (in the left sidebar).
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Go to the **Actions** tab in your repository:
   - You will see the workflow **"Deploy to GitHub Pages"** running.
   - Within 1–2 minutes, your website will be live at:
     `https://<your-username>.github.io/<your-repo-name>/`
4. Any future `git push` to `main` will automatically build and deploy your updates!

---

## 🛠 Local Development

To run the project locally on your machine:

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
# Server runs at http://localhost:3000

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Pre-Configured Hosting Files Included

- `vite.config.ts`: Configured with `base: './'` for relative asset paths (avoids 404s on GitHub Pages subpaths).
- `vercel.json`: Pre-configured build command, output directory, and SPA rewrites.
- `netlify.toml` & `public/_redirects`: Pre-configured redirect rules and cache control headers.
- `.github/workflows/deploy.yml`: Automated GitHub Actions deployment pipeline for GitHub Pages.
- `public/404.html`: Client-side fallback for GitHub Pages.
- `public/robots.txt` & `public/sitemap.xml`: SEO crawl directives.
- `public/favicon.jpg`: High-resolution circular brand icon.

---

## 📞 Brand Information & Contact

- **Brand:** NIRAM ORGANIC PADS
- **Phone / WhatsApp:** +91 8610195690
- **Email:** sreenaveena028@gmail.com
- **GSTIN:** 33NAAPS0348A1ZO
- **Instagram:** [@niram.organic_pads](https://instagram.com/niram.organic_pads)
- **Logistics Hub:** Coimbatore, Tamil Nadu, India
