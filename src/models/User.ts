import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: null,
    },
    bio: {
      type: String,
      default: '',
    },
    provider: {
      type: String,
      enum: ['google', 'facebook'],
      required: true,
    },
    providerId: {
      type: String,
      required: true,
    },
    followers: {
      type: Number,
      default: 0,
    },
    following: {
      type: Number,
      default: 0,
    },
    tips: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tip',
      },
    ],
    savedTips: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tip',
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Ensure email and providerId combination is unique
UserSchema.index({ email: 1, provider: 1 }, { unique: true });

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
