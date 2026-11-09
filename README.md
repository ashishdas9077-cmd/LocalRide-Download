# LocalRide – Your Local Ride Booking App

The official website and APK download distribution portal for **LocalRide**, a community-focused local ride-booking Android application connecting passengers with nearby auto-rickshaws, e-rickshaws, and local taxis.

- **Public Website URL:** [https://ashishdas9077-cmd.github.io/LocalRide-Download/](https://ashishdas9077-cmd.github.io/LocalRide-Download/)
- **Public Website Repository:** `ashishdas9077-cmd/LocalRide-Download`
- **Private Android Source Code Repository:** `ashishdas9077-cmd/LocalRide-AI`

---

## 🚀 Website Overview

This website is a modern, responsive, high-performance static web application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. It is architected specifically to run on **GitHub Pages** with zero backend infrastructure requirements.

### Key Features
1. **Dynamic APK Releases:** Automatically queries the public GitHub Releases API (`https://api.github.com/repos/ashishdas9077-cmd/LocalRide-Download/releases`) to display the latest stable release, download links, file sizes, and full version history without manual website code updates.
2. **HashRouter Navigation:** Ensures that internal page refreshes work reliably on GitHub Pages without requiring server-side 404 URL rewriting.
3. **Responsive & Mobile-First:** Clean blue-and-white visual identity optimized for high clarity, fast loading on budget Android devices, and low cellular data usage.
4. **Lightweight Custom SVG Visuals:** Handcrafted SVG illustrations for auto-rickshaws, e-rickshaws, taxis, and app interaction flows with zero external broken image dependencies.
5. **SEO & Social Optimization:** Pre-configured with meta tags, OpenGraph cards, Twitter cards, `robots.txt`, `sitemap.xml`, and Schema.org `SoftwareApplication` JSON-LD.

---

## 📄 Website Pages

The website includes all 8 core pages:
1. **Home (`/`)**: Value proposition, Passenger & Driver feature cards, 3-step "How LocalRide Works", vehicle categories breakdown, why choose LocalRide, and Download CTA.
2. **Download (`/#/download`)**: Real-time GitHub Releases integration, latest stable APK download, version history, release notes viewer, and 4-step Android APK installation instructions.
3. **Features (`/#/features`)**: Transparent breakdown categorized into **Available Now**, **In Active Development**, and **Planned Future Roadmap**.
4. **About (`/#/about`)**: The genuine story and mission behind LocalRide, local transportation focus, and open development principles.
5. **FAQ (`/#/faq`)**: Searchable accordion addressing Android compatibility, APK sideloading, troubleshooting, and safety.
6. **Contact & Support (`/#/contact`)**: Guidance for reporting technical issues via GitHub Issues with a structured bug report checklist.
7. **Privacy Policy (`/#/privacy-policy`)**: Honest disclosure covering static hosting, GitHub API queries, and device permissions.
8. **Terms & Conditions (`/#/terms`)**: Transparent terms covering development-stage software, testing, and user installation responsibility.

---

## 📦 How to Publish New APK Versions (Automatic Workflow)

The website dynamically retrieves published releases from GitHub. You do **not** need to modify or rebuild the website when you release a new version of the app.

Follow this standard 6-step workflow:

1. **Build the Android APK** in your private `LocalRide-AI` repository (e.g. running `./gradlew assembleRelease`).
2. Go to your public website repository on GitHub: `https://github.com/ashishdas9077-cmd/LocalRide-Download/releases`.
3. Click **"Draft a new release"** and create a meaningful version tag (for example, `v1.0.0` or `v1.1.0`).
4. Attach the generated APK binary and ensure it is named exactly:
   ```text
   LocalRide.apk
   ```
5. Enter genuine release notes in the description describing What's New, bug fixes, or compatibility updates.
6. Click **"Publish release"**.

*(Optional: If the release is a testing milestone or beta build, check the "Set as a pre-release" box. The website will automatically label it as a Prerelease while preserving the latest stable release at the top).*

Once published, the download portal will automatically detect and display the new version, file size, publication date, and download button for users.

---

## 🌐 Deploying the Website to GitHub Pages

### 1. Build the Static Files
```bash
npm install
npm run build
```
This builds the production assets into the `dist/` directory configured with the base path `/LocalRide-Download/`.

### 2. Deployment Options

#### Option A: GitHub Pages via GitHub Actions (Recommended)
Create `.github/workflows/deploy.yml` in your repository:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          VITE_BASE: /LocalRide-Download/

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### Option B: Deploy `dist` directory to `gh-pages` branch
Alternatively, build locally and push the `dist/` folder to the `gh-pages` branch using the `gh-pages` package:
```bash
npx gh-pages -d dist
```

### 3. Enable GitHub Pages in Repository Settings
1. Open `https://github.com/ashishdas9077-cmd/LocalRide-Download/settings/pages`.
2. Under **Build and deployment > Source**:
   - Choose **GitHub Actions** (if using Option A), OR
   - Choose **Deploy from a branch** and select branch `gh-pages` / `/ (root)`.
3. Your site will be published at `https://ashishdas9077-cmd.github.io/LocalRide-Download/`.

---

## 🔒 Security & Repository Separation

- **Public Repository (`LocalRide-Download`)**: Contains only the public website code, public assets, and GitHub Releases distribution binaries.
- **Private Repository (`LocalRide-AI`)**: Contains the proprietary Android application source code, keystores, and build pipelines.
- **No Secrets**: The frontend code communicates solely with public unauthenticated GitHub endpoints and contains no private access tokens or API keys.
