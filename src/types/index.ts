// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  bio?: string;
  socialProvider: 'google' | 'facebook';
  createdAt: Date;
  updatedAt: Date;
}

// Expert Tip Types
export interface ExpertTip {
  id: string;
  title: string;
  description: string;
  content: string;
  category: TipCategory;
  subcategory: string;
  author: User;
  imageUrl?: string;
  rating: number;
  views: number;
  shares: number;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
}

// Category Types
export type TipCategory = 'Mobile' | 'TV' | 'Electronics' | 'Skincare' | 'Hair Care' | 'Makeup' | 'Wellness';

export interface Category {
  id: string;
  name: TipCategory;
  description: string;
  icon?: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
}

// Comment Types
export interface Comment {
  id: string;
  content: string;
  author: User;
  tipId: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  replies: Comment[];
}

// Interaction Types
export interface Like {
  id: string;
  userId: string;
  tipId: string;
  createdAt: Date;
}

export interface Share {
  id: string;
  userId: string;
  tipId: string;
  platform: 'twitter' | 'facebook' | 'whatsapp' | 'email';
  createdAt: Date;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
