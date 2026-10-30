import { ImageResponse } from 'next/og';
import { site, content, hasLocale } from '../site';

export const alt = `${site.name} — ${content.pt.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = content[hasLocale(lang) ? lang : 'pt'];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: 'linear-gradient(135deg, #000000 0%, #1a0030 60%, #0d0020 100%)',
          color: '#f3f4f6',
          fontFamily: 'monospace',
        }}
      >
        <div style={{ display: 'flex', fontSize: 28, color: '#c084fc', letterSpacing: 6 }}>
          {t.ui.ogLabel}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 84, letterSpacing: 4 }}>PABLO DURÃES.</div>
          <div style={{ fontSize: 40, color: '#d8b4fe', marginTop: 20 }}>{t.role}</div>
          <div style={{ fontSize: 30, color: '#9ca3af', marginTop: 12 }}>{t.headline}</div>
        </div>
        <div style={{ display: 'flex', height: 4, width: 200, background: '#9333ea' }} />
      </div>
    ),
    size
  );
}
