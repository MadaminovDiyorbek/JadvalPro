import { SignJWT } from 'jose';

export const config = { runtime: 'edge' };

function json(body: object, status: number, extra?: Record<string, string>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...extra },
  });
}

export default async function handler(request: Request) {
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'method' }, 405);
  }

  const secret = process.env.AUTH_SECRET;
  const user = process.env.AUTH_USER;
  const pass = process.env.AUTH_PASSWORD;

  if (!secret || secret.length < 16 || !user || !pass) {
    return json({ ok: false, error: 'config' }, 503);
  }

  let body: { username?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'json' }, 400);
  }

  const u = typeof body.username === 'string' ? body.username.trim() : '';
  const p = typeof body.password === 'string' ? body.password : '';

  if (u !== user || p !== pass) {
    return json({ ok: false, error: 'credentials' }, 401);
  }

  const key = new TextEncoder().encode(secret);
  const token = await new SignJWT({ sub: 'jadvalpro' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('30d')
    .sign(key);

  const secure = process.env.VERCEL === '1';

  const cookie = [
    `jadvalpro_session=${token}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    'Max-Age=' + 60 * 60 * 24 * 30,
    secure ? 'Secure' : '',
  ]
    .filter(Boolean)
    .join('; ');

  return json({ ok: true }, 200, { 'Set-Cookie': cookie });
}
