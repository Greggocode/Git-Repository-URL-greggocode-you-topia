
# 🚀 You‑topia Deployment Guide

Welcome to **You‑topia** — your personal growth platform. This guide walks you through getting your version live.

---

## 🔧 1. Requirements
Make sure you have these installed:

- Node.js (v18+): https://nodejs.org/
- VS Code or any code editor
- GitHub account (optional)
- Supabase account: https://supabase.com/
- Vercel account: https://vercel.com/

---

## 🛠 2. Local Setup

1. **Unzip this project**
2. Open the folder in VS Code
3. Run:

```bash
npm install
npm run dev
```

4. Visit `http://localhost:5173` to see You‑topia

---

## 🔑 3. Supabase Setup

1. Go to [https://supabase.com/](https://supabase.com/)
2. Create a new project
3. Copy your **Project URL** and **Anon Public Key**
4. Paste them into `.env` (create from `.env.example`)

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-key-here
```

---

## 🧠 4. Deploy to Vercel

1. Go to [https://vercel.com/](https://vercel.com/)
2. Create new project > Import GitHub repo or upload manually
3. Set environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy

---

## 🌍 5. Connect your Domain

If you own `you-topia.co.uk` via GoDaddy:

1. In Vercel, go to your project > Settings > Domains
2. Add `you-topia.co.uk`
3. Follow instructions to update DNS in GoDaddy
4. Done!

---

## ✅ You're Live

Need help? Reach out, and I’ll walk you through any part of this.

Welcome to You‑topia.
