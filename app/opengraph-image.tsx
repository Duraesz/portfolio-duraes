import { ImageResponse } from 'next/og';
import { site } from './site';

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
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
          {'// PORTFÓLIO'}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 84, letterSpacing: 4 }}>PABLO DURÃES.</div>
          <div style={{ fontSize: 40, color: '#d8b4fe', marginTop: 20 }}>{site.role}</div>
          <div style={{ fontSize: 30, color: '#9ca3af', marginTop: 12 }}>{site.headline}</div>
        </div>
        <div style={{ display: 'flex', height: 4, width: 200, background: '#9333ea' }} />
      </div>
    ),
    size
  );
}
