import { jwtVerify } from 'jose';
import { next } from '@vercel/functions';

export const config = {
  matcher: ['/((?!api/|login\\.html).*)'],
};

function getCookie(request: Request, name: string): string | undefined {
  const raw = request.headers.get('cookie');
  if (!raw) return undefined;
  for (const part of raw.split(';')) {
    const [k, ...rest] = part.trim().split('=');
    if (k === name) return decodeURIComponent(rest.join('='));
  }
  return undefined;
}

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 16) {
    return Response.redirect(new URL('/login.html?err=config', request.url));
  }

  const token = getCookie(request, 'jadvalpro_session');
  if (!token) {
    const nextUrl = encodeURIComponent(url.pathname + url.search);
    return Response.redirect(new URL(`/login.html?next=${nextUrl}`, request.url));
  }

  try {
    const key = new TextEncoder().encode(secret);
    await jwtVerify(token, key);
    return next();
  } catch {
    return Response.redirect(new URL('/login.html?err=session', request.url));
  }
}
