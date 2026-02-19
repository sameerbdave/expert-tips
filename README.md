# Expert Tips - Share Knowledge, Get Inspired

A modern social platform for sharing expert tips and tutorials across multiple categories including technology, beauty, and wellness. Users can discover tutorials, beauty trends, product recommendations, and more without creating an account—simply login with Google or Facebook.

## 🚀 Features

- **Social Login**: Google & Facebook authentication without registration
- **Expert Tips**: Share and discover tips across categories:
  - Technology: Mobile, TV, Electronics
  - Beauty & Wellness: Skincare, Hair Care, Makeup, Wellness
- **Engagement**: Comments, likes, sharing, and ratings
- **User Profiles**: View expert profiles and their tips
- **Search & Filter**: Find tips by category and tags
- **Responsive Design**: Works seamlessly on desktop and mobile

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16+ (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: OAuth 2.0 (Google, Facebook)

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: Passport.js + JWT

## 🚀 Getting Started

### Frontend Setup

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

### Backend Setup

See [BACKEND_SETUP.md](./BACKEND_SETUP.md) for complete instructions.

### Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your OAuth credentials:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
NEXT_PUBLIC_FACEBOOK_APP_ID=your_facebook_app_id
```

## 📚 Documentation

- [Backend Setup Guide](./BACKEND_SETUP.md) - Complete backend setup instructions
- [Project Roadmap](./PROJECT_ROADMAP.md) - Development phases and milestones
- [Types Reference](./src/types/index.ts) - TypeScript interfaces

## 🔐 Social Authentication

### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create OAuth 2.0 credentials
3. Add redirect URI: `http://localhost:3000/api/auth/callback/google`
4. Copy credentials to `.env.local`

### Facebook OAuth
1. Go to [Facebook Developers](https://developers.facebook.com)
2. Create a new app and add Facebook Login
3. Configure redirect URIs
4. Copy credentials to `.env.local`

## 📝 Available Scripts

```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
```

## 🗄️ Database

Uses MongoDB. Set up either:
- **MongoDB Atlas** (Cloud): [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
- **Local MongoDB**: `brew install mongodb-community && brew services start mongodb-community`

## 🎯 Next Steps

1. Clone the repo: `git clone https://github.com/sameerbdave/expert-tips.git`
2. Install dependencies: `npm install`
3. Setup `.env.local` with OAuth credentials
4. Start frontend: `npm run dev`
5. Setup backend: Follow [BACKEND_SETUP.md](./BACKEND_SETUP.md)

---

**Happy coding! 🚀**
