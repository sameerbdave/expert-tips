# 🔐 Authentication Setup Guide

This guide will help you set up Google and Facebook OAuth authentication for the Expert Tips application.

## Prerequisites

- MongoDB running locally (or MongoDB Atlas account)
- Node.js v18+
- A Google Cloud account (for Google OAuth)
- A Facebook Developers account (for Facebook OAuth)

## 1️⃣ MongoDB Setup

### Option A: Local MongoDB
```bash
# Install MongoDB Community Edition
# macOS:
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community

# Verify it's running (should connect to mongodb://localhost:27017)
mongosh
```

### Option B: MongoDB Atlas (Cloud)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string: `mongodb+srv://username:password@cluster.mongodb.net/expert-tips`
5. Update `.env.local` with your connection string

## 2️⃣ Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Enable the Google+ API:
   - Search for "Google+ API"
   - Click "Enable"
4. Create OAuth credentials:
   - Go to "Credentials" in the left sidebar
   - Click "Create Credentials" → "OAuth 2.0 Client ID"
   - Select "Web application"
   - Add Authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google`
     - `http://localhost:3000` (for production, use your domain)
   - Click "Create"
5. Copy your **Client ID** and **Client Secret**
6. Update `.env.local`:
   ```env
   GOOGLE_CLIENT_ID=your_client_id_here
   GOOGLE_CLIENT_SECRET=your_client_secret_here
   ```

## 3️⃣ Facebook OAuth Setup

1. Go to [Facebook Developers](https://developers.facebook.com)
2. Create a new app or select an existing one
3. Add "Facebook Login" product to your app
4. Go to Settings → Basic and copy your **App ID** and **App Secret**
5. Configure OAuth redirect URI:
   - Go to Facebook Login → Settings
   - Add Valid OAuth Redirect URIs:
     - `http://localhost:3000/api/auth/callback/facebook`
     - For production, add your domain
6. Update `.env.local`:
   ```env
   FACEBOOK_APP_ID=your_app_id_here
   FACEBOOK_APP_SECRET=your_app_secret_here
   ```

## 4️⃣ NextAuth Secret Generation

Generate a secure NextAuth secret:

```bash
# Generate a random secret
openssl rand -base64 32
```

Update `.env.local`:
```env
NEXTAUTH_SECRET=paste_generated_secret_here
NEXTAUTH_URL=http://localhost:3000
```

## 5️⃣ Environment File Setup

Your `.env.local` should look like this:

```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/expert-tips

# NextAuth
NEXTAUTH_SECRET=your_generated_secret
NEXTAUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Facebook OAuth
FACEBOOK_APP_ID=your_facebook_app_id
FACEBOOK_APP_SECRET=your_facebook_app_secret

# Backend API
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

## 6️⃣ Testing the Setup

1. Start MongoDB:
   ```bash
   # If using local MongoDB
   mongosh
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Navigate to [http://localhost:3000/login](http://localhost:3000/login)

4. Test both Google and Facebook login buttons

5. Check MongoDB for user data:
   ```bash
   mongosh
   > use expert-tips
   > db.users.find()
   ```

## 🐛 Troubleshooting

### "Invalid credentials" error
- Verify your Client ID and Client Secret are correct
- Check that redirect URIs match exactly (including protocol and port)
- Ensure OAuth is enabled/approved

### "Connection refused - MongoDB"
- Make sure MongoDB is running: `mongosh` should connect
- Check MONGODB_URI in `.env.local`

### "NEXTAUTH_SECRET not set"
- Generate a new secret: `openssl rand -base64 32`
- Add to `.env.local` and restart dev server

### Login button redirects but doesn't authenticate
- Check `.env.local` for typos in credentials
- Verify OAuth app is published/in development mode
- Check browser console for error messages

## 📱 Features

After setup, users can:
- ✅ Login with Google
- ✅ Login with Facebook  
- ✅ View their profile
- ✅ Create and manage tips
- ✅ Save favorite tips
- ✅ Comment on tips
- ✅ Like and share tips

## 🚀 Production Deployment

Before deploying to production:

1. Update `NEXTAUTH_URL` to your production domain
2. Add production MongoDB URI
3. Register production callback URLs in Google Cloud & Facebook Developer apps
4. Generate a new `NEXTAUTH_SECRET`
5. Set strong environment variables on your hosting platform

---

Need help? Check the [NextAuth.js Docs](https://next-auth.js.org/)
