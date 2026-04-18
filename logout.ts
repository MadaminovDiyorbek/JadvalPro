export const config = { runtime: 'edge' };

export default async function handler(request: Request) {
  const secure = process.env.VERCEL === '1';

  const clearCookie = [
    'jadvalpro_session=',
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    'Max-Age=0',
    secure ? 'Secure' : '',
  ]
    .filter(Boolean)
    .join('; ');

  const loc = new URL('/login.html', request.url).toString();
  return new Response(null, {
    status: 302,
    headers: {
      Location: loc,
      'Set-Cookie': clearCookie,
    },
  });
}
