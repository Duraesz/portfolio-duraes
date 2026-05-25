'use client';
import { useEffect, useState, useRef, KeyboardEvent } from 'react';


export function FakeTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  const terminalLines = [
    { text: '$ whoami', isCommand: true },
    { text: '> pablo.duraes', isCommand: false },
    { text: '$ location', isCommand: true },
    { text: '> são paulo, br', isCommand: false },
    { text: '$ status', isCommand: true },
    { text: '> available for hire ✓', isCommand: false },
    { text: '$ skills --top', isCommand: true },
    { text: '> react, react-native, next, node,', isCommand: false },
    { text: '$ experience', isCommand: true },
    { text: '> web & mobile dev', isCommand: false },
    { text: '$ contact', isCommand: true },
    { text: '> pablosantosduraes6@gmail.com', isCommand: false },
  ];

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setVisibleLines(current);
      if (current >= terminalLines.length) clearInterval(interval);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full sm:w-80 border border-purple-900 bg-black bg-opacity-60 font-mono mt-6 sm:mt-0 flex-shrink-0">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-purple-900">
        <span className="w-2 h-2 rounded-full bg-red-600" />
        <span className="w-2 h-2 rounded-full bg-yellow-600" />
        <span className="w-2 h-2 rounded-full bg-green-600" />
        <span className="ml-2 text-[10px] text-purple-700 tracking-widest">terminal — pablo@duraes</span>
      </div>
      <div className="flex flex-col gap-1 p-4 text-[12px] tracking-wider min-h-48">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <span key={i} className={line.isCommand ? 'text-purple-400' : 'text-gray-400'}>
            {line.text}
          </span>
        ))}
        {visibleLines < terminalLines.length && (
          <span className="animate-pulse text-purple-400">█</span>
        )}
      </div>
    </div>
  );
}


export function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    setDisplayed('');
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [text]);
  return (
    <span className="whitespace-pre">
      {displayed}
      <span className="animate-pulse text-purple-400 text-2xl">█</span>
    </span>
  );
}


export function GlitchText({ text }: { text: string }) {
  const [glitching, setGlitching] = useState(false);
  useEffect(() => {
    const loop = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 150);
    }, 3000);
    return () => clearInterval(loop);
  }, []);
  return (
    <span className={`transition-all duration-75 ${glitching ? 'text-purple-400 tracking-widest skew-x-2' : ''}`}>
      {text}
    </span>
  );
}


export function ScanLine() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden opacity-[0.03]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.8) 2px, rgba(255,255,255,0.8) 4px)',
        }}
      />
    </div>
  );
}


export function NoiseOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 opacity-[0.04]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px',
      }}
    />
  );
}


const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

export function ScrambleText({
  text,
  duration = 1200,
  delay = 0,
  className = '',
}: {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState('');
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const fps = 20;
    const interval = 1000 / fps;
    const totalFrames = duration / interval;
    let elapsed = 0;

    const timeout = setTimeout(() => {
      frameRef.current = setInterval(() => {
        elapsed++;
        const fixed = Math.floor((elapsed / totalFrames) * text.length);
        let result = '';
        for (let i = 0; i < text.length; i++) {
          if (text[i] === ' ' || text[i] === '\n') {
            result += text[i];
          } else if (i < fixed) {
            result += text[i];
          } else {
            result += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }
        }
        setDisplay(result);
        if (elapsed >= totalFrames) {
          clearInterval(frameRef.current!);
          setDisplay(text);
        }
      }, interval);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (frameRef.current) clearInterval(frameRef.current);
    };
  }, [text, duration, delay]);

  return <span className={className}>{display || '\u00A0'}</span>;
}


const KONAMI_SEQ = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
];

export function useKonamiCode() {
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    let seq: string[] = [];
    const handler = (e: globalThis.KeyboardEvent) => {
      seq = [...seq, e.key].slice(-KONAMI_SEQ.length);
      if (
        seq.length === KONAMI_SEQ.length &&
        seq.every((k, i) => k === KONAMI_SEQ[i])
      ) {
        setActivated(true);
        seq = [];
        setTimeout(() => setActivated(false), 6000);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return activated;
}


const KONAMI_CHARS = ['01', '10', '{ }', '//', '=>', '[]', '**', '&&', '||', '>>'];
const KONAMI_COLORS = ['#a855f7', '#c084fc', '#e879f9', '#7c3aed', '#9333ea', '#d946ef'];

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  size: number; char: string; color: string;
}

export function KonamiEasterEgg({ activated }: { activated: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particles = useRef<Particle[]>([]);
  const startTime = useRef<number>(0);

  useEffect(() => {
    if (!activated) {
      cancelAnimationFrame(animRef.current);
      particles.current = [];
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    startTime.current = performance.now();

    for (let i = 0; i < 200; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        life: Math.random() * 180 + 60,
        maxLife: 240,
        size: Math.random() * 12 + 8,
        char: KONAMI_CHARS[Math.floor(Math.random() * KONAMI_CHARS.length)],
        color: KONAMI_COLORS[Math.floor(Math.random() * KONAMI_COLORS.length)],
      });
    }

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0,0,0,0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter(p => p.life > 0);

      if (
        particles.current.length < 300 &&
        performance.now() - startTime.current < 5500
      ) {
        for (let i = 0; i < 5; i++) {
          particles.current.push({
            x: Math.random() * canvas.width,
            y: -20,
            vx: (Math.random() - 0.5) * 2,
            vy: Math.random() * 4 + 1,
            life: Math.random() * 120 + 80,
            maxLife: 200,
            size: Math.random() * 14 + 8,
            char: KONAMI_CHARS[Math.floor(Math.random() * KONAMI_CHARS.length)],
            color: KONAMI_COLORS[Math.floor(Math.random() * KONAMI_COLORS.length)],
          });
        }
      }

      for (const p of particles.current) {
        ctx.globalAlpha = p.life / p.maxLife;
        ctx.font = `${p.size}px monospace`;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fillText(p.char, p.x, p.y);
        ctx.shadowBlur = 0;
        p.x += p.vx;
        p.y += p.vy;
        p.life--;
      }

      ctx.globalAlpha = 1;
      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [activated]);

  if (!activated) return null;

  return (
    <>
      <style>{`
        @keyframes konamiReveal {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        .konami-reveal { animation: konamiReveal 0.4s ease forwards; }
      `}</style>
      <div className="fixed inset-0 z-[200] pointer-events-none">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="konami-reveal font-mono text-center">
            <p className="text-xs text-purple-400 tracking-[0.5em] mb-3">// ACCESS_GRANTED.exe</p>
            <p
              className="text-4xl sm:text-6xl text-purple-300 tracking-widest font-light"
              style={{ textShadow: '0 0 40px #9333ea, 0 0 80px #7c3aed' }}
            >
              CHEAT CODE
            </p>
            <p className="text-xs text-purple-600 tracking-[0.3em] mt-4">
              PABLO DURÃES · DEVELOPER
            </p>
            <div className="mt-6 flex gap-2 justify-center flex-wrap">
              {['↑', '↑', '↓', '↓', '←', '→'].map((k, i) => (
                <span
                  key={i}
                  className="text-[10px] text-purple-500 border border-purple-700 px-2 py-1 font-mono"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function useCountUp(
  target: number,
  duration = 1800,
  rootMargin = '0px 0px -40% 0px',
  threshold = 0.3
) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, rootMargin, threshold]);

  return { ref, value };
}


export function AnimatedMetric({ rawValue, label }: { rawValue: string; label: string }) {
  const match = rawValue.match(/^([+>]?)(\d+)([kK%]?)$/);
  const target = match ? parseInt(match[2], 10) : null;
  const prefix = match ? match[1] : '';
  const suffix = match ? match[3] : '';

  const { ref, value } = useCountUp(target ?? 0);

  const display =
    target !== null ? `${prefix}${value.toLocaleString('pt-BR')}${suffix}` : rawValue;

  return (
    <div
      ref={ref}
      className="border border-purple-900 p-4 text-center hover:border-purple-700 transition-colors duration-300"
    >
      <span className="text-xl sm:text-2xl text-purple-300 font-mono tabular-nums">
        {display}
      </span>
      <p className="text-[9px] text-gray-500 tracking-widest mt-2 leading-4">{label}</p>
    </div>
  );
}