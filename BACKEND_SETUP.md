# Backend Setup Guide - Expert Tips API

## Stack: Node.js + Express + MongoDB

### Prerequisites
- Node.js v18+ (using nvm)
- MongoDB (local or Atlas cloud)
- Git

### QuickStart

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm init -y
npm install express mongoose cors dotenv bcryptjs jsonwebtoken passport passport-google-oauth20 passport-facebook

# Install dev dependencies
npm install -D nodemon typescript @types/node @types/express

# Create .env file
cp .env.example .env
```

### Project Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── database.ts        # MongoDB connection
│   │   └── oauth.ts           # Passport strategies
│   ├── models/
│   │   ├── User.ts
│   │   ├── ExpertTip.ts
│   │   ├── Comment.ts
│   │   └── Category.ts
│   ├── routes/
│   │   ├── auth.ts
│   │   ├── tips.ts
│   │   ├── comments.ts
│   │   ├── users.ts
│   │   └── categories.ts
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── tipController.ts
│   │   ├── commentController.ts
│   │   └── userController.ts
│   ├── middleware/
│   │   ├── auth.ts            # JWT verification
│   │   └── errorHandler.ts
│   ├── utils/
│   │   ├── validators.ts
│   │   └── helpers.ts
│   └── index.ts              # Main server file
├── .env.example
├── package.json
└── tsconfig.json
```

### Environment Variables (.env)

```
PORT=3001
MONGODB_URI=mongodb://localhost:27017/expert-tips
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/expert-tips

# JWT
JWT_SECRET=your_jwt_secret_key_here

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3001/api/auth/google/callback

# Facebook OAuth
FACEBOOK_APP_ID=your_facebook_app_id
FACEBOOK_APP_SECRET=your_facebook_app_secret
FACEBOOK_CALLBACK_URL=http://localhost:3001/api/auth/facebook/callback

# Frontend URL
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

### Key API Endpoints

#### Authentication
- `POST /api/auth/google` - Google OAuth login
- `POST /api/auth/facebook` - Facebook OAuth login
- `POST /api/auth/logout` - Logout

#### Expert Tips
- `GET /api/tips` - Get all tips with pagination
- `GET /api/tips/:id` - Get single tip
- `POST /api/tips` - Create new tip (authenticated)
- `PUT /api/tips/:id` - Update tip (authenticated)
- `DELETE /api/tips/:id` - Delete tip (authenticated)
- `GET /api/categories` - Get all categories
- `GET /api/tips/category/:category` - Get tips by category

#### Comments
- `GET /api/tips/:tipId/comments` - Get comments for a tip
- `POST /api/tips/:tipId/comments` - Add comment (authenticated)
- `DELETE /api/comments/:commentId` - Delete comment (authenticated)

#### User Profile
- `GET /api/users/:userId` - Get user profile
- `PUT /api/users/:userId` - Update user profile (authenticated)
- `GET /api/users/:userId/tips` - Get user's tips

### Database Schema

#### Users Collection
```javascript
{
  _id: ObjectId,
  email: String (unique),
  name: String,
  avatar: String,
  bio: String,
  socialId: String,
  socialProvider: 'google' | 'facebook',
  createdAt: Date,
  updatedAt: Date
}
```

#### ExpertTips Collection
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  content: String,
  category: String,
  subcategory: String,
  authorId: ObjectId (ref: Users),
  imageUrl: String,
  rating: Number,
  views: Number,
  shares: Number,
  tags: [String],
  createdAt: Date,
  updatedAt: Date
}
```

#### Comments Collection
```javascript
{
  _id: ObjectId,
  content: String,
  authorId: ObjectId (ref: Users),
  tipId: ObjectId (ref: ExpertTips),
  likes: Number,
  parentCommentId: ObjectId (for replies),
  createdAt: Date,
  updatedAt: Date
}
```

### Running the Backend

```bash
# Development with nodemon
npm run dev

# Production
npm run build
npm start
```

### MongoDB Setup

#### Local MongoDB
```bash
# Install MongoDB Community Edition
# macOS with Homebrew:
brew install mongodb-community
brew services start mongodb-community

# Verify connection
mongosh
```

#### MongoDB Atlas (Cloud)
1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create a free account
3. Create a cluster
4. Get connection string
5. Add to `.env` as `MONGODB_URI`

### Next Steps
1. Install Express and dependencies
2. Set up MongoDB connection
3. Create Mongoose schemas
4. Implement OAuth strategies
5. Set up API routes
6. Connect frontend to backend
