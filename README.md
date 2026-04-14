# SalesDendrite Marketing Website

**Map the org. Own the deal.**  
Sales Execution Intelligence Platform — [salesdendrite.com](https://salesdendrite.com)

## Quick Start (Local Development)

```bash
npm install
npm run dev
```

Site runs at `http://localhost:5173`

## Deploy to Netlify (One-Time Setup)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — SalesDendrite marketing site"
git remote add origin https://github.com/salesdendrite-ux/salesdendrite-site.git
git push -u origin main
```

### Step 2: Connect Netlify

1. Go to [app.netlify.com](https://app.netlify.com) → Sign up / Log in with GitHub
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **GitHub** → Find `salesdendrite-ux/salesdendrite-site`
4. Build settings auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **"Deploy site"**

### Step 3: Connect Your Domain

1. In Netlify dashboard → **Domain management** → **Add custom domain**
2. Enter `salesdendrite.com`
3. Netlify will give you nameservers (or you can use DNS records):
   
   **Option A — Netlify DNS (recommended):**
   Update your domain registrar's nameservers to:
   ```
   dns1.p03.nsone.net
   dns2.p03.nsone.net
   dns3.p03.nsone.net
   dns4.p03.nsone.net
   ```
   (Netlify will show you the exact nameservers for your site)

   **Option B — External DNS:**
   Add these records at your registrar:
   ```
   Type: A      Name: @    Value: 75.2.60.5
   Type: CNAME  Name: www  Value: [your-site-name].netlify.app
   ```

4. Enable **HTTPS** (auto-provisioned, free) in Netlify → Domain management → HTTPS

### Step 4: Enable Email Notifications for Form Submissions

1. In Netlify dashboard → **Forms** → You'll see the "contact" form
2. Click **"Form notifications"** → **"Add notification"**
3. Select **"Email notification"**
4. Enter your email address
5. Done! You'll get an email every time someone submits the demo request form

You can also add:
- **Slack notification** — posts to a Slack channel
- **Webhook** — sends to Zapier, Make, or any URL

## Making Changes

### Quick text/content changes:
1. Open `src/App.jsx` in VS Code or any editor
2. Find the text you want to change (Ctrl+F)
3. Edit and save
4. Push to GitHub:
   ```bash
   git add .
   git commit -m "Updated homepage copy"
   git push
   ```
5. Netlify auto-deploys in ~30 seconds

### Design/feature changes:
Come back to the Claude Website Build Agent chat and describe what you want changed.

## Tech Stack

- **React 18** — UI framework
- **Vite 6** — Build tool (fast dev + production builds)
- **Netlify** — Hosting, forms, SSL
- **Outfit** — Headline font
- **DM Sans** — Body font  
- **JetBrains Mono** — Data/code font

## Project Structure

```
salesdendrite-site/
├── index.html          ← HTML entry + Netlify form detection
├── netlify.toml        ← Netlify build config
├── package.json        ← Dependencies
├── vite.config.js      ← Vite build config
├── public/             ← Static assets (favicons)
│   ├── favicon.svg
│   ├── favicon-32.png
│   ├── favicon-16.png
│   └── apple-touch-icon.png
└── src/
    ├── main.jsx        ← React entry point
    └── App.jsx         ← The entire website (single file)
```
