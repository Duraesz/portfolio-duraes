import { useEffect, useState } from "react";

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
      <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.8) 2px, rgba(255,255,255,0.8) 4px)' }} />
    </div>
  );
}


export function NoiseOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px' }} />
  );
}