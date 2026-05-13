'use client';
import { useEffect, useState } from 'react';
import { ScanLine, NoiseOverlay, FakeTerminal, TypewriterText, GlitchText } from './components';

const lines = [
  "CRIANDO",
  " PRODUTOS",
  "  QUE UNEM",
  "   TECNOLOGIAS",
  "    A NECESSIDADES.",
];
const fullText = lines.join('\n');

const navLinks = [
  { label: 'CONTATO', href: 'https://wa.me/5511944488221' },
  { label: 'GMAIL', href: 'mailto:pablosantosduraes6@gmail.com' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/pablo-dur%C3%A3es-781421320/' },
];

const heroStats = [
  { value: '02', label: 'PROJETOS' },
  { value: '16+', label: 'SKILLS' },
  { value: '100+', label: 'USUÁRIOS' },
];

const projectMetrics = [
  { value: '+100', label: 'USUÁRIOS PSICÓLOGOS ATIVOS' },
  { value: '+20', label: 'EMPRESAS UTILIZANDO' },
  { value: '+3000', label: 'ETIQUETAS GERADAS' },
  { value: '↓', label: 'REDUÇÃO DE ERROS' },
];

const aluraCourses = [
  'LÓGICA DE PROGRAMAÇÃO',
  'HTML & CSS',
  'REACT',
  'REACT NATIVE',
  'MACHINE LEARNING',
  'INTELIGÊNCIA ARTIFICIAL',
];

const skills = [
  { name: 'REACT', level: 'especialista' },
  { name: 'REACT NATIVE', level: 'especialista' },
  { name: 'NEXT.JS', level: 'especialista' },
  { name: 'TYPESCRIPT', level: 'especialista' },
  { name: 'NODE', level: 'proficiente' },
  { name: 'JAVASCRIPT', level: 'proficiente' },
  { name: 'TAILWIND', level: 'proficiente' },
  { name: 'TRPC', level: 'proficiente' },
  { name: 'TANSTACK QUERY', level: 'proficiente' },
  { name: 'POSTGRES', level: 'proficiente' },
  { name: 'MONGODB', level: 'proficiente' },
  { name: 'STRIPE', level: 'proficiente' },
  { name: 'CLERK', level: 'proficiente' },
  { name: 'GIT', level: 'proficiente' },
  { name: 'AGENTES IA', level: 'proficiente' },
  { name: 'UX UI', level: 'proficiente' },
];

const skillLevels = [
  { key: 'especialista', label: 'ESPECIALISTA', color: 'text-purple-400 border-purple-700' },
  { key: 'proficiente', label: 'PROFICIENTE', color: 'text-gray-300 border-purple-900' },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ background: 'linear-gradient(180deg, #000000 0%, #1a0030 35%, #0d0020 60%, #000000 100%)' }}>
      <ScanLine />
      <NoiseOverlay />

      {/* Linhas decorativas laterais */}
      <div className="fixed left-6 top-0 bottom-0 w-px bg-purple-800 opacity-40 z-30 hidden sm:block" />
      <div className="fixed right-6 top-0 bottom-0 w-px bg-purple-800 opacity-20 z-30 hidden sm:block" />
      <div className="fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-8 opacity-20 text-[10px] text-purple-400 select-none z-30 hidden sm:flex">
        {['01', '02', '03', '04', '05', '06', '07'].map((n) => (
          <span key={n}>{n}</span>
        ))}
      </div>

      {/* ── NAV ── */}
      <header
        className="fixed top-0 left-0 right-0 z-[60] border-b border-purple-900"
        style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
      >
        <div
          className="flex items-center justify-between w-full px-4 sm:px-10 py-4 sm:grid sm:grid-cols-3 max-w-screen-xl mx-auto"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(-16px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
        >
          <h1 className="text-xs sm:text-sm font-light tracking-[0.2em] sm:tracking-[0.3em] text-purple-300 font-mono">
            PABLO DURÃES.
          </h1>

          <div className="hidden sm:flex justify-center font-mono">
            <h1 className="text-sm font-light tracking-[0.3em]">
              <GlitchText text="DEVELOPER" />
            </h1>
          </div>

          <nav className="flex justify-end">
            <ul className="flex flex-row gap-3 sm:gap-6 text-[10px] sm:text-xs tracking-widest font-mono">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="relative group text-gray-400 hover:text-white transition-colors duration-200">
                    <span className="sm:hidden">{label === 'LINKEDIN' ? 'LI' : label === 'GMAIL' ? 'GM' : 'CT'}</span>
                    <span className="hidden sm:inline">{label}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <div className="flex flex-col min-h-screen px-4 sm:px-10 text-white relative pt-20">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col flex-1">

          <div className="mt-6 sm:mt-8 ml-1" style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.8s ease 0.4s' }}>
            <span className="text-[10px] text-purple-500 tracking-[0.3em] sm:tracking-[0.4em]">// BIO_INIT.exe</span>
          </div>

          {/* Texto + separador + terminal */}
          <div
            className="flex flex-col sm:flex-row flex-1 items-start sm:items-center ml-1 gap-6 sm:gap-0 py-8 sm:py-0"
            style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.8s ease 0.6s' }}
          >
            {/* Texto principal */}
            <div className="flex-1 w-full min-w-0">
              <p className="text-2xl sm:text-4xl leading-9 sm:leading-10 tracking-widest text-gray-200 font-mono">
                <TypewriterText text={fullText} />
              </p>

              {/* CTA */}
              <button
                onClick={scrollToProjects}
                className="mt-8 text-[10px] tracking-[0.3em] font-mono text-gray-400 hover:text-purple-400 border border-purple-900 hover:border-purple-600 px-5 py-3 transition-all duration-300 group"
              >
                VER PROJETOS
                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform duration-200">→</span>
              </button>
            </div>

            {/* Separador com estatísticas */}
            <div className="hidden sm:flex flex-col items-center gap-5 px-10 opacity-70">
              <div className="w-px h-12 bg-purple-800" />
              {heroStats.map((stat, i) => (
                <div key={stat.label} className="flex flex-col items-center gap-1">
                  <span className="text-xl font-mono text-purple-300">{stat.value}</span>
                  <span className="text-[8px] tracking-[0.2em] text-gray-600">{stat.label}</span>
                  {i < heroStats.length - 1 && <div className="w-px h-5 bg-purple-900 mt-2" />}
                </div>
              ))}
              <div className="w-px h-12 bg-purple-800" />
            </div>

            <FakeTerminal />
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center pb-8 opacity-40">
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <span className="text-[9px] text-purple-500 tracking-[0.3em] font-mono">SCROLL</span>
              <svg width="12" height="18" viewBox="0 0 12 18" fill="none">
                <path d="M6 0v14M1 9l5 6 5-6" stroke="#9333ea" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* ── PROJECTS ── */}
      <div id="projects" className="flex flex-col px-4 sm:px-10 text-white font-mono relative py-16 sm:py-20">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col">
          <span className="text-[10px] text-purple-500 tracking-[0.4em] mb-6 sm:mb-10">// PROJECTS_INIT.exe</span>
          <h1 className="text-purple-500 tracking-[0.4em] text-[13px] sm:text-[15px] mx-auto mb-8">PRINCIPAIS PROJETOS</h1>

          {/* Cards de projeto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-4xl mx-auto">
            <div className="border border-purple-900 p-4 sm:p-6 hover:border-purple-500 transition-colors duration-300 group">
              <span className="text-[10px] text-purple-500 tracking-widest">01_</span>
              <h2 className="text-sm tracking-widest mt-2 mb-3 group-hover:text-purple-300 transition-colors">NICE APP</h2>
              <p className="text-xs text-gray-500 leading-6 tracking-wider text-justify">
                APLICATIVO MOBILE EM REACT NATIVE FOCADO EM PSICOTERAPIA CORPORATIVA, QUE PERMITE ÀS EMPRESAS ACOMPANHAR O BEM-ESTAR PSICOLÓGICO DOS COLABORADORES POR MEIO DE TESTES E ESCALAS.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                {['REACT NATIVE', 'TYPESCRIPT', 'STRIPE', 'TRPC'].map(t => (
                  <span key={t} className="text-[10px] text-purple-700 border border-purple-900 px-2 py-1">{t}</span>
                ))}
              </div>
              <a
                href="https://www.linkedin.com/posts/pablo-dur%C3%A3es-781421320_programaaexao-projeto-reactnative-ugcPost-7434066766345134080-incI"
                target="_blank" rel="noopener noreferrer"
                className="block mt-4 text-[12px] text-gray-600 hover:text-purple-400 tracking-widest transition-colors"
              >
                VER PROJETO →
              </a>
            </div>

            <div className="border border-purple-900 p-4 sm:p-6 hover:border-purple-500 transition-colors duration-300 group">
              <span className="text-[10px] text-purple-500 tracking-widest">02_</span>
              <h2 className="text-sm tracking-widest mt-2 mb-3 group-hover:text-purple-300 transition-colors">QUICK TAG</h2>
              <p className="text-xs text-gray-400 leading-6 tracking-wider text-justify">
                SOLUÇÃO INTELIGENTE PARA CRIAÇÃO/GESTÃO DE ETIQUETAS E INFORMAÇÕES DE PRODUTOS, QUE AUTOMATIZA PROCESSOS, REDUZ ERROS E AUMENTA A EFICIÊNCIA OPERACIONAL.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                {['REACT', 'NEXT', 'TYPESCRIPT', 'CLERK'].map(t => (
                  <span key={t} className="text-[10px] text-purple-700 border border-purple-900 px-2 py-1">{t}</span>
                ))}
              </div>
              <a
                href="https://www.quicktag.com.br/"
                target="_blank" rel="noopener noreferrer"
                className="block mt-4 text-[12px] text-gray-600 hover:text-purple-400 tracking-widest transition-colors"
              >
                VER PROJETO →
              </a>
            </div>

            {/* Card em construção */}
            <div className="border border-purple-950 p-4 sm:p-6 opacity-50 group md:col-span-2 md:max-w-sm md:mx-auto w-full">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] text-purple-800 tracking-widest">03_</span>
                <span className="text-[9px] text-purple-700 border border-purple-900 px-2 py-0.5 tracking-widest animate-pulse">EM CONSTRUÇÃO</span>
              </div>
              <h2 className="text-sm tracking-widest text-gray-700">PRÓXIMO PROJETO</h2>
              <div className="mt-4 flex gap-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-1 flex-1 bg-purple-950 rounded-sm" style={{ opacity: i < 3 ? 0.8 : 0.2 }} />
                ))}
              </div>
            </div>
          </div>

          {/* Métricas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mt-10 w-full">
            {projectMetrics.map((m) => (
              <div key={m.label} className="border border-purple-900 p-4 text-center hover:border-purple-700 transition-colors duration-300">
                <span className="text-xl sm:text-2xl text-purple-300 font-mono">{m.value}</span>
                <p className="text-[9px] text-gray-600 tracking-widest mt-2 leading-4">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FORMAÇÃO ── */}
      <div className="flex flex-col px-4 sm:px-10 text-white font-mono relative py-16 sm:py-20">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col">
          <span className="text-[10px] text-purple-500 tracking-[0.4em] mb-6 sm:mb-10">// EDUCATION_INIT.exe</span>
          <h1 className="text-purple-500 tracking-[0.4em] text-[13px] sm:text-[15px] mx-auto mb-10">FORMAÇÃO & ESPECIALIZAÇÕES</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">

            {/* Graduação */}
            <div className="border border-purple-800 p-5 sm:p-6 hover:border-purple-500 transition-colors duration-300">
              <span className="text-[9px] text-purple-600 tracking-[0.3em]">GRADUAÇÃO</span>
              <h2 className="text-sm tracking-widest mt-3 mb-1 text-gray-200">BACHARELADO EM ENGENHARIA DE SOFTWARE</h2>
              <p className="text-[11px] text-purple-400 tracking-widest mb-3">UNIVERSIDADE DE MOGI DAS CRUZES — UMC</p>
              <div className="flex items-center gap-3 mt-4">
                <span className="text-[11px] text-purple-700 border border-purple-900 px-2 py-1 tracking-widest animate-pulse">1º SEMESTRE</span>
                <span className="text-[11px] text-gray-700 tracking-widest">EM ANDAMENTO</span>
              </div>
              <div className="mt-5 h-px bg-purple-950 relative">
                <div className="absolute top-0 left-0 h-px bg-purple-600" style={{ width: '12.5%' }} />
              </div>
              <p className="text-[11px] text-gray-700 tracking-widest mt-1">PROGRESSO — 1/8 SEMESTRES</p>
            </div>

            {/* Cursos Alura */}
            <div className="border border-purple-900 p-5 sm:p-6 hover:border-purple-500 transition-colors duration-300">
              <span className="text-[9px] text-purple-600 tracking-[0.3em]">CURSOS EXTRACURRICULARES</span>
              <h2 className="text-sm tracking-widest mt-3 mb-4 text-gray-200">ALURA</h2>
              <div className="flex flex-col gap-2">
                {aluraCourses.map((course, i) => (
                  <div key={course} className="flex items-center gap-3">
                    <span className="text-[9px] text-purple-800 w-4 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-700 flex-shrink-0" />
                    <span className="text-[10px] text-gray-400 tracking-widest">{course}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── SKILLS ── */}
      <div className="flex flex-col px-4 sm:px-10 text-white font-mono relative py-16 sm:py-20">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col">
          <span className="text-[10px] text-purple-500 tracking-[0.4em] mb-6 sm:mb-10">// SKILLS_INIT.exe</span>
          <h1 className="text-purple-500 tracking-[0.4em] text-[13px] sm:text-[15px] mx-auto mb-3">SKILLS</h1>

          {/* Legenda */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {skillLevels.map(({ label, color }) => (
              <div key={label} className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full border ${color.includes('purple-4') ? 'bg-purple-400' : color.includes('gray-3') ? 'bg-gray-500' : 'bg-purple-950'}`} />
                <span className="text-[14px] text-gray-600 tracking-widest">{label}</span>
              </div>
            ))}
          </div>

          {skillLevels.map(({ key, color }) => (
            <div key={key} className="mb-6 max-w-2xl mx-auto w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {skills
                  .filter(s => s.level === key)
                  .map(({ name }) => (
                    <div
                      key={name}
                      className={`border px-3 sm:px-4 py-3 text-[10px] sm:text-[11px] tracking-widest hover:border-purple-500 hover:text-purple-300 transition-all duration-200 text-center ${color}`}
                    >
                      {name}
                    </div>
                  ))}
              </div>
            </div>
          ))}

          <div className="items-center justify-center mt-6">
            <p className="text-center text-[15px] text-purple-500 tracking-[0.4em] opacity-30 animate-pulse">
              01000100 01010101 01010010 01000001 01000101 01010011
            </p>
          </div>
        </div>
      </div>

      {/* ── CONTATO ── */}
      <div className="flex flex-col px-4 sm:px-10 text-white font-mono relative py-16 sm:py-24">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center text-center">
          <span className="text-[10px] text-purple-500 tracking-[0.4em] mb-6">// CONTACT_INIT.exe</span>
          <h1 className="text-2xl sm:text-4xl tracking-[0.2em] text-gray-200 mb-4">VAMOS CONVERSAR?</h1>
          <p className="text-xs text-gray-600 tracking-widest mb-10 max-w-sm leading-6">
            ABERTO A OPORTUNIDADES, PROJETOS E COLABORAÇÕES.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5511944488221"
              target="_blank" rel="noopener noreferrer"
              className="text-[11px] tracking-[0.3em] font-mono text-gray-300 hover:text-white border border-purple-700 hover:border-purple-400 px-6 py-3 transition-all duration-300"
            >
              WHATSAPP →
            </a>
            <a
              href="mailto:pablosantosduraes6@gmail.com"
              className="text-[11px] tracking-[0.3em] font-mono text-gray-500 hover:text-gray-300 border border-purple-950 hover:border-purple-700 px-6 py-3 transition-all duration-300"
            >
              GMAIL →
            </a>
            <a
              href="https://www.linkedin.com/in/pablo-dur%C3%A3es-781421320/"
              target="_blank" rel="noopener noreferrer"
              className="text-[11px] tracking-[0.3em] font-mono text-gray-500 hover:text-gray-300 border border-purple-950 hover:border-purple-700 px-6 py-3 transition-all duration-300"
            >
              LINKEDIN →
            </a>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-purple-950 px-4 sm:px-10 py-6 font-mono">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[9px] text-gray-700 tracking-widest">
            © {new Date().getFullYear()} PABLO DURÃES. TODOS OS DIREITOS RESERVADOS.
          </span>
          <span className="text-[9px] text-purple-900 tracking-widest animate-pulse">
            BUILT WITH NEXT.JS + TYPESCRIPT
          </span>
        </div>
      </footer>

    </div>
  );
}