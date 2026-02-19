import { handlers } from '@/auth';

// Handle both GET and POST requests for NextAuth
export const { GET, POST } = handlers;

// This fixes the route to work with [...nextauth] dynamic route
export const runtime = 'nodejs';
