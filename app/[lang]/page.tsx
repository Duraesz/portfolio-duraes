import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ScanLine,
  NoiseOverlay,
  FakeTerminal,
  TypewriterText,
  ScrambleText,
  KonamiEasterEgg,
  AnimatedMetric,
} from '../components';
import { site, content, hasLocale, localePath } from '../site';

function SectionHeading({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <div className="mb-10 sm:mb-12">
      <p className="text-xs text-purple-400 tracking-[0.3em] mb-3">
        {`// ${index}. ${label}`}
      </p>
      <h2 className="text-2xl sm:text-3xl text-gray-100 tracking-tight">{title}</h2>
    </div>
  );
}

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const t = content[lang];
  const otherLang = lang === 'pt' ? 'en' : 'pt';
  const year = new Date().getFullYear();

  return (
    <>
      <KonamiEasterEgg />
      <ScanLine />
      <NoiseOverlay />

      <div aria-hidden="true" className="fixed left-6 top-0 bottom-0 w-px bg-purple-800/40 z-30 hidden lg:block" />
      <div aria-hidden="true" className="fixed right-6 top-0 bottom-0 w-px bg-purple-800/20 z-30 hidden lg:block" />

      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-purple-600 focus:text-white focus:px-4 focus:py-2"
      >
        {t.ui.skipToContent}
      </a>

      <header className="fixed top-0 left-0 right-0 z-60 border-b border-purple-900/60 bg-black/80 backdrop-blur-md">
        <div className="fade-in flex items-center justify-between max-w-6xl mx-auto px-5 sm:px-10 h-16">
          <a href="#" className="text-sm tracking-[0.25em] text-purple-200 hover:text-white transition-colors">
            PABLO DURÃES.
          </a>

          <nav aria-label={t.ui.mainNav} className="hidden md:block">
            <ul className="flex gap-8 text-sm text-gray-400">
              {t.navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="relative group hover:text-white transition-colors duration-200">
                    {label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={localePath[otherLang]}
              hrefLang={content[otherLang].htmlLang}
              aria-label={t.ui.switchLanguage.ariaLabel}
              className="text-sm text-gray-300 hover:text-white border border-purple-900 hover:border-purple-500 px-3 py-2 transition-colors duration-200"
            >
              {t.ui.switchLanguage.label}
            </Link>
            <a
              href="#contato"
              className="text-sm text-white border border-purple-600 hover:bg-purple-600 px-4 py-2 transition-colors duration-200"
            >
              {t.ui.contact}
            </a>
          </div>
        </div>
      </header>

      <main id="conteudo" className="text-gray-200 font-mono">

        {/* Hero */}
        <section className="min-h-svh flex flex-col px-5 sm:px-10 pt-16">
          <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row flex-1 items-start lg:items-center gap-12 py-16">
            <div className="flex-1 min-w-0 fade-in" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-sm sm:text-base text-purple-300 tracking-[0.2em] mb-6">
                PABLO DURÃES —{' '}
                <ScrambleText text={t.role.toUpperCase()} delay={500} duration={1400} />
              </h1>

              <p className="text-xl sm:text-4xl leading-snug sm:leading-tight tracking-widest text-gray-100">
                <TypewriterText text={t.hero.tagline} />
              </p>

              <p className="mt-8 max-w-xl text-sm sm:text-base leading-relaxed text-gray-400">
                {t.hero.intro}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projetos"
                  className="group text-sm text-white bg-purple-600 hover:bg-purple-500 px-6 py-3 transition-colors duration-200"
                >
                  {t.ui.viewProjects}
                  <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-white border border-purple-800 hover:border-purple-500 px-6 py-3 transition-colors duration-200"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            <div className="w-full lg:w-auto fade-in" style={{ animationDelay: '0.5s' }}>
              <FakeTerminal lines={t.terminal} />
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="px-5 sm:px-10 py-20 sm:py-28">
          <div className="max-w-6xl mx-auto">
            <SectionHeading index="01" label={t.about.label} title={t.about.title} />

            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2 space-y-5 text-sm sm:text-base leading-relaxed text-gray-400">
                <p>
                  {t.about.intro.before}{' '}
                  <span className="text-gray-200">{t.about.intro.highlight}</span>
                  {t.about.intro.after}
                </p>
                <p>
                  {t.about.current.before}{' '}
                  <span className="text-gray-200">{t.about.current.highlight}</span>
                  {t.about.current.after}
                </p>
              </div>

              <ul className="lg:col-span-3 grid sm:grid-cols-2 gap-4 content-start">
                {t.focusAreas.map((area) => (
                  <li key={area.title} className="border border-purple-900/70 bg-black/30 p-5">
                    <h3 className="text-sm text-purple-300 mb-3">{area.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-400">{area.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Experiência */}
        <section id="experiencia" className="px-5 sm:px-10 py-20 sm:py-28">
          <div className="max-w-6xl mx-auto">
            <SectionHeading index="02" label={t.experienceSection.label} title={t.experienceSection.title} />

            <ol className="relative border-l border-purple-900/70 ml-1.5 space-y-8">
              {t.experiences.map((exp) => (
                <li key={`${exp.company}-${exp.period}`} className="relative pl-8 sm:pl-10 pb-2">
                  <span aria-hidden="true" className="absolute -left-1.25 top-2 w-2.5 h-2.5 bg-purple-500 shadow-[0_0_12px_#a855f7]" />

                  <article className="border border-purple-900/70 bg-black/30 p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="text-lg text-gray-100">
                          {exp.role}{' '}
                          <span className="text-purple-300">@ {exp.company}</span>
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          {exp.team ? `${exp.type} · ${exp.team}` : exp.type}
                        </p>
                      </div>
                      <div className="text-xs text-gray-400 sm:text-right shrink-0">
                        <p className="text-purple-300">{exp.period}</p>
                        <p className="mt-1">{exp.location}</p>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-400 mt-5">{exp.description}</p>

                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-sm leading-relaxed text-gray-400">
                          <span aria-hidden="true" className="text-purple-400">→</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <ul className="flex flex-wrap gap-2 mt-6" aria-label={t.ui.technologies}>
                      {exp.stack.map((s) => (
                        <li key={s} className="text-xs text-purple-300 bg-purple-950/50 border border-purple-900/70 px-2.5 py-1">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" className="px-5 sm:px-10 py-20 sm:py-28">
          <div className="max-w-6xl mx-auto">
            <SectionHeading index="03" label={t.projectsSection.label} title={t.projectsSection.title} />

            <div className="grid md:grid-cols-2 gap-6">
              {t.projects.map((project, i) => (
                <article
                  key={project.name}
                  className="group flex flex-col border border-purple-900/70 bg-black/30 p-6 sm:p-8 hover:border-purple-500 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="text-purple-400">{String(i + 1).padStart(2, '0')}</span>
                    <span>{project.type}</span>
                  </div>

                  <h3 className="text-xl text-gray-100 mt-4 mb-3 group-hover:text-purple-200 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">{project.description}</p>

                  <div className="flex gap-10 mt-6 pt-6 border-t border-purple-900/50">
                    {project.metrics.map((m) => (
                      <AnimatedMetric key={m.label} rawValue={m.value} label={m.label} locale={t.numberLocale} />
                    ))}
                  </div>

                  <ul className="flex flex-wrap gap-2 mt-6" aria-label={t.ui.technologies}>
                    {project.stack.map((s) => (
                      <li key={s} className="text-xs text-purple-300 bg-purple-950/50 border border-purple-900/70 px-2.5 py-1">
                        {s}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-8 text-sm text-gray-300 hover:text-purple-300 transition-colors self-start"
                  >
                    {project.link.label} ↗
                  </a>
                </article>
              ))}

              <article className="md:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-dashed border-purple-900/70 p-6 sm:px-8">
                <div className="flex items-center gap-4">
                  <span className="text-xs text-purple-400">03</span>
                  <h3 className="text-base text-gray-200">{t.projectsSection.upcoming.name}</h3>
                </div>
                <p className="text-sm text-gray-500">{t.projectsSection.upcoming.text}</p>
              </article>
            </div>
          </div>
        </section>

        {/* Formação */}
        <section id="formacao" className="px-5 sm:px-10 py-20 sm:py-28">
          <div className="max-w-6xl mx-auto">
            <SectionHeading index="04" label={t.educationSection.label} title={t.educationSection.title} />

            <div className="grid md:grid-cols-2 gap-6">
              <article className="border border-purple-900/70 bg-black/30 p-6 sm:p-8">
                <p className="text-xs text-purple-400 tracking-[0.2em]">{t.educationSection.degreeLabel}</p>
                <h3 className="text-lg text-gray-100 mt-4">{t.educationSection.degree}</h3>
                <p className="text-sm text-gray-400 mt-2">{t.educationSection.school}</p>
                <p className="inline-block text-xs text-gray-300 border border-purple-900/70 px-2.5 py-1 mt-6">
                  {t.educationSection.status}
                </p>
              </article>

              <article className="border border-purple-900/70 bg-black/30 p-6 sm:p-8">
                <p className="text-xs text-purple-400 tracking-[0.2em]">{t.educationSection.coursesLabel}</p>
                <h3 className="text-lg text-gray-100 mt-4 mb-5">Alura</h3>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {t.aluraCourses.map((course) => (
                    <li key={course} className="flex items-center gap-3 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 bg-purple-500 shrink-0" />
                      {course}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="px-5 sm:px-10 py-20 sm:py-28">
          <div className="max-w-6xl mx-auto">
            <SectionHeading index="05" label={t.skillsSection.label} title={t.skillsSection.title} />

            <div className="grid md:grid-cols-2 gap-6">
              {t.skillGroups.map((group) => (
                <div key={group.title} className="border border-purple-900/70 bg-black/30 p-6">
                  <h3 className="text-sm text-purple-300 mb-5">{group.title}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-gray-300 border border-purple-900/70 px-3 py-1.5 hover:border-purple-500 hover:text-white transition-colors duration-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="px-5 sm:px-10 py-24 sm:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs text-purple-400 tracking-[0.3em] mb-4">{`// 06. ${t.contactSection.label}`}</p>
            <h2 className="text-3xl sm:text-5xl text-gray-100 tracking-tight mb-6">{t.contactSection.title}</h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-10">
              {t.contactSection.text}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-white bg-purple-600 hover:bg-purple-500 px-6 py-3 transition-colors duration-200 break-all"
              >
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-white border border-purple-800 hover:border-purple-500 px-6 py-3 transition-colors duration-200"
              >
                LinkedIn ↗
              </a>
            </div>

            <div className="mt-20 flex flex-col items-center gap-3 text-purple-400/70 hover:text-purple-300 transition-colors duration-500">
              <p className="text-xs tracking-[0.3em]">{t.contactSection.hint}</p>
              <div className="flex items-center gap-1.5" aria-label={t.contactSection.hintKeysLabel}>
                {['↑', '↑', '↓', '↓', '←', '→'].map((k, i) => (
                  <kbd key={i} aria-hidden="true" className="text-xs border border-purple-800 px-2 py-1 font-mono">
                    {k}
                  </kbd>
                ))}
              </div>
              <p className="text-[11px] tracking-[0.3em] text-gray-500">{t.contactSection.hintPress}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-purple-900/50 px-5 sm:px-10 py-8 font-mono">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© {year} Pablo Durães. {t.ui.footerRights}</span>
          <span>{t.ui.footerBuilt}</span>
        </div>
      </footer>
    </>
  );
}
