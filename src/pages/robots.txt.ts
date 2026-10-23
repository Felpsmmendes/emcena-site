import type { APIRoute } from 'astro';
// Com PUBLIC_NOINDEX=1 (versão de teste na Vercel) o Google não indexa o site.
export const GET: APIRoute = ({ site }) => {
  const corpo = import.meta.env.PUBLIC_NOINDEX === '1'
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`;
  return new Response(corpo, { headers: { 'Content-Type': 'text/plain' } });
};
