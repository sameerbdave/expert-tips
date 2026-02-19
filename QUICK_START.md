# Expert Tips - Quick Start Guide

## ✅ What's Been Set Up

Your Expert Tips project is ready! Here's what's been created:

### Frontend (Next.js + React + TypeScript + Tailwind)
✅ Next.js app initialized  
✅ TypeScript configured  
✅ Tailwind CSS ready  
✅ ESLint configured  
✅ Base components (Header, Footer, TipCard, CategoryGrid)  
✅ TypeScript types defined (User, ExpertTip, Comment, etc.)  
✅ Project structure organized  
✅ Git repository initialized  

### Documentation
✅ README.md - Complete project overview  
✅ BACKEND_SETUP.md - Backend setup guide  
✅ PROJECT_ROADMAP.md - Development phases & milestones  

### Environment
✅ .env.local.example - Environment template  
✅ Node.js v25.6.1 installed  
✅ All npm dependencies installed  

---

## 🚀 Start Development Right Now

### 1. Start Frontend Development Server

```bash
cd /Users/sameer.dave/Library/CloudStorage/OneDrive-YRBrands/Documents/projects/expert-tips
npm run dev
```

Then open: **http://localhost:3000**

### 2. Setup Google OAuth (Optional but recommended)

1. Go to: https://console.cloud.google.com
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials (Web app)
5. Add redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy your Client ID to `.env.local`:
   ```
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_client_id_here
   ```

### 3. Setup Backend (Express + MongoDB)

```bash
cd backend
npm init -y
npm install express mongoose cors dotenv bcryptjs jsonwebtoken passport passport-google-oauth20 passport-facebook
npm install -D nodemon typescript @types/node @types/express
```

Then follow [BACKEND_SETUP.md](./BACKEND_SETUP.md) for complete backend setup.

---

## 📁 Project Structure Overview

```
expert-tips/
├── src/
│   ├── app/                    # Next.js pages & layouts
│   ├── components/             # Reusable React components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Footer
│   │   ├── TipCard.tsx        # Individual tip card
│   │   └── CategoryGrid.tsx   # Category Grid
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces
│   ├── hooks/                 # Custom React hooks (empty - add as needed)
│   ├── lib/                   # Utility libraries (empty - add as needed)
│   └── utils/                 # Helper functions (empty - add as needed)
├── backend/                    # Backend (Express + MongoDB)
├── public/                     # Static assets
├── BACKEND_SETUP.md           # Backend documentation
├── PROJECT_ROADMAP.md         # Development roadmap
├── README.md                  # Project overview
├── .env.local                 # Environment (create from example)
└── .env.local.example         # Environment template
```

---

## 🔑 Environment Variables Setup

Copy the template and fill in your credentials:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local`:

```env
# Backend API
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# Social Auth (Add your credentials)
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id_here
NEXT_PUBLIC_FACEBOOK_APP_ID=your_facebook_app_id_here
```

---

## 📚 Available Commands

### Frontend Development
```bash
npm run dev              # Start dev server (hot reload)
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint checker
```

### Git Commands
```bash
git status              # Check changes
git add .               # Stage changes
git commit -m "message" # Commit changes
git push origin main    # Push to GitHub
```

---

## 🎯 Next Steps (Recommended Order)

### Phase 1: Frontend Pages (This Week)
1. **Update home page** - Display categories and featured tips
2. **Create layout** - Layout with Header & Footer
3. **Category page** - Show tips by category
4. **Tip detail page** - Full tip view

### Phase 2: Backend Setup (Next Week)
1. Setup MongoDB (Atlas or local)
2. Create Express server
3. Setup authentication (Google/Facebook OAuth)
4. Create API endpoints

### Phase 3: Integration (Week 3)
1. Connect frontend to backend API
2. Implement authentication
3. Add comments & interactions
4. User profile page

---

## 🐛 Common Issues & Solutions

### Port 3000 already in use
```bash
# Find process on port 3000
lsof -i :3000

# Kill it
kill -9 <PID>
```

### Node/npm issues
```bash
# Check Node version
node --version

# Use correct Node version with nvm
nvm use node
npm --version
```

### Git not configured
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## 📞 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [MongoDB Docs](https://docs.mongodb.com)
- [Express Docs](https://expressjs.com)

---

## ✨ You're All Set!

Your expert tips platform is initialized and ready for development. Start by:

1. Running `npm run dev` to see the app
2. Following the **Next Steps** above
3. Reading [PROJECT_ROADMAP.md](./PROJECT_ROADMAP.md) for detailed planning

**Happy coding! 🚀**

---

**Last Updated**: February 19, 2026  
**Repository**: https://github.com/sameerbdave/expert-tips
