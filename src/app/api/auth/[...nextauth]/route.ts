import { auth } from '@/auth';

// Temporary stub - disable auth API for now
export async function GET(request: Request) {
  return new Response(JSON.stringify({ message: 'Auth API disabled temporarily' }), {
    status: 503,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request: Request) {
  return new Response(JSON.stringify({ message: 'Auth API disabled temporarily' }), {
    status: 503,
    headers: { 'Content-Type': 'application/json' },
  });
}
