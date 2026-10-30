export const locales = ['pt', 'en'] as const;
export type Locale = (typeof locales)[number];

export const hasLocale = (lang: string): lang is Locale => (locales as readonly string[]).includes(lang);

// URL de cada idioma: o português fica na raiz ("/") e o inglês em "/en"
export const localePath: Record<Locale, string> = { pt: '/', en: '/en' };

export const site = {
  name: 'Durães',
  email: 'pablosantosduraes6@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pablo-dur%C3%A3es-781421320/',
};

export type Project = {
  name: string;
  type: string;
  description: string;
  stack: string[];
  metrics: { value: string; label: string }[];
  link: { label: string; href: string };
};

const nicePresentation =
  'https://www.linkedin.com/posts/pablo-dur%C3%A3es-781421320_programaaexao-projeto-reactnative-ugcPost-7434066766345134080-incI';

const pt = {
  htmlLang: 'pt-BR',
  ogLocale: 'pt_BR',
  numberLocale: 'pt-BR',
  role: 'Desenvolvedor Full Stack',
  headline: 'React, React Native & Next.js',
  location: 'São Paulo, Brasil',
  description:
    'Desenvolvedor de software em São Paulo: aplicações web e mobile com React, React Native, Next.js e TypeScript, além de automação de processos e dados com Python e Power BI.',
  keywords: [
    'Pablo Durães',
    'desenvolvedor full stack',
    'desenvolvedor React',
    'React Native',
    'Next.js',
    'TypeScript',
    'Python',
    'Power BI',
    'automação de processos',
    'portfólio',
    'São Paulo',
  ],
  ui: {
    skipToContent: 'Pular para o conteúdo',
    mainNav: 'Navegação principal',
    contact: 'Contato',
    switchLanguage: { label: 'EN', ariaLabel: 'Switch to English' },
    viewProjects: 'Ver projetos',
    technologies: 'Tecnologias',
    ogLabel: '// PORTFÓLIO',
    footerRights: 'Todos os direitos reservados.',
    footerBuilt: 'Desenvolvido com Next.js e TypeScript',
  },
  navLinks: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Formação', href: '#formacao' },
    { label: 'Skills', href: '#skills' },
  ],
  hero: {
    tagline: ['CRIANDO', ' PRODUTOS', '  QUE UNEM', '   TECNOLOGIAS', '    A NECESSIDADES.'].join('\n'),
    intro:
      'Desenvolvo aplicações web e mobile com React, React Native e Next.js e automatizo processos com Python e Power BI — soluções voltadas a necessidades reais de negócio.',
  },
  terminal: [
    { text: '$ whoami', isCommand: true },
    { text: '> pablo.duraes', isCommand: false },
    { text: '$ location', isCommand: true },
    { text: '> são paulo, br', isCommand: false },
    { text: '$ status', isCommand: true },
    { text: '> aberto a projetos e colaborações ✓', isCommand: false },
    { text: '$ experience', isCommand: true },
    { text: '> aprendiz @ suzano s.a.', isCommand: false },
    { text: '$ stack --top', isCommand: true },
    { text: '> react, react-native, next, node', isCommand: false },
    { text: '$ contact', isCommand: true },
    { text: `> ${site.email}`, isCommand: false },
  ],
  about: {
    label: 'sobre',
    title: 'Sobre mim',
    intro: {
      before: 'Sou desenvolvedor de software com foco em aplicações web e mobile e em automação de processos. Trabalho principalmente com',
      highlight: 'Node.js, Next.js, React, React Native e TypeScript',
      after: ', e também com Python, SQL, Power BI e GCP.',
    },
    current: {
      before: 'Hoje sou Aprendiz no Centro de Excelência Industrial (CoE) da',
      highlight: 'Suzano S.A.',
      after:
        ', onde desenvolvo soluções de BI e automações para relatórios gerenciais. Em paralelo, construo produtos web e mobile, com soluções em produção atendendo mais de 20 empresas, e curso Engenharia de Software na UMC.',
    },
  },
  focusAreas: [
    {
      title: 'Apps mobile',
      text: 'Aplicativos multiplataforma em React Native, do fluxo de telas à publicação.',
    },
    {
      title: 'Aplicações web',
      text: 'Produtos SaaS com Next.js e TypeScript, com foco em performance e boa experiência de uso.',
    },
    {
      title: 'Back-end & integrações',
      text: 'APIs com Node.js e tRPC, bancos SQL e NoSQL, pagamentos com Stripe e autenticação com Clerk.',
    },
    {
      title: 'Dados & automação',
      text: 'Dashboards em Power BI com DAX, fluxos no Power Automate e scripts em Python para automatizar relatórios.',
    },
  ],
  experienceSection: { label: 'experiência', title: 'Experiência profissional' },
  experiences: [
    {
      
      role: 'Análise de Dados',
      type: 'Aprendiz',
      company: 'Suzano S.A.',
      team: 'Centro de Excelência (CoE)',
      period: 'Jul 2026 — atual',
      location: 'Mogi das Cruzes, SP',
      description:
        'Desenvolvimento de soluções de Business Intelligence para relatórios gerenciais, unindo análise de dados e automação de processos.',
      highlights: [
        'Criação de indicadores e medidas em DAX para dashboards no Power BI.',
        'Automação da atualização de relatórios com Power Automate (Flow).',
        'Scripts em Python para automatizar tarefas recorrentes.',
      ],
      stack: ['Power BI', 'DAX', 'Power Automate', 'Python', 'Alteryx', 'SQL', 'Google Cloud Platform'],
    },
    {
      role: 'Desenvolvedor Mobile & Web',
      type: 'Freelancer',
      company: 'Autônomo',
      period: 'Jun 2024 — Jul 2026',
      location: 'Remoto',
      description:
        'Desenvolvimento de aplicações web e mobile para empresas dos setores alimentício e de psicoterapia, com integrações a APIs e bancos de dados.',
      highlights: [
        'Quick Tag: plataforma SaaS de etiquetas de produtos usada por mais de 20 empresas.',
        'Nice App: aplicativo de psicoterapia corporativa em React Native, com mais de 100 usuários ativos.',
        'Integração com APIs, pagamentos (Stripe) e autenticação (Clerk).',
      ],
      stack: ['React Native', 'React', 'Next.js', 'Node.js', 'TypeScript', 'tRPC', 'Stripe', 'Clerk'],
    },
  ],
  projectsSection: {
    label: 'projetos',
    title: 'Principais projetos',
    upcoming: { name: 'Kaizen', text: 'Novo projeto em desenvolvimento — em breve.' },
  },
  projects: [
    {
      name: 'Nice App',
      type: 'Aplicativo mobile',
      description:
        'Aplicativo de psicoterapia corporativa que permite às empresas acompanhar o bem-estar psicológico dos colaboradores por meio de testes e escalas validadas.',
      stack: ['React Native', 'TypeScript', 'tRPC', 'Stripe'],
      metrics: [{ value: '+100', label: 'usuários ativos' }],
      link: { label: 'Ver apresentação', href: nicePresentation },
    },
    {
      name: 'Quick Tag',
      type: 'Plataforma web · SaaS',
      description:
        'Plataforma para criação e gestão de etiquetas e informações de produtos, que automatiza processos, reduz erros e aumenta a eficiência operacional.',
      stack: ['Next.js', 'React', 'TypeScript', 'Clerk'],
      metrics: [
        { value: '+20', label: 'empresas clientes' },
        { value: '+100000', label: 'etiquetas geradas' },
      ],
      link: { label: 'Acessar site', href: 'https://www.quicktag.com.br/' },
    },
  ],
  educationSection: {
    label: 'formação',
    title: 'Formação & especializações',
    degreeLabel: 'GRADUAÇÃO',
    degree: 'Bacharelado em Engenharia de Software',
    school: 'Universidade de Mogi das Cruzes — UMC',
    status: 'Em andamento',
    coursesLabel: 'CURSOS COMPLEMENTARES',
  },
  aluraCourses: [
    'Lógica de Programação',
    'HTML & CSS',
    'React',
    'React Native',
    'Machine Learning',
    'Inteligência Artificial',
    'SQL',
    'Banco de Dados',
  ],
  skillsSection: { label: 'skills', title: 'Tecnologias' },
  skillGroups: [
    {
      title: 'Front-end & Mobile',
      items: ['React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'TanStack Query'],
    },
    {
      title: 'Back-end & Dados',
      items: ['Node.js', 'tRPC', 'Python', 'C', 'SQL', 'PostgreSQL', 'MongoDB', 'Supabase', 'Docker'],
    },
    {
      title: 'Dados & Automação',
      items: ['Power BI', 'DAX', 'Power Automate', 'Python', 'Google Cloud Platform', 'Alteryx', 'SQL'],
    },
    {
      title: 'Integrações & Ferramentas',
      items: ['Stripe', 'Clerk', 'GCP', 'Git', 'Agentes de IA', 'UX/UI'],
    },
  ],
  contactSection: {
    label: 'contato',
    title: 'Vamos conversar?',
    text: 'Estou aberto a oportunidades, projetos e colaborações. Me mande uma mensagem — respondo rapidamente.',
    hint: '// ALGO ESTÁ ESCONDIDO AQUI',
    hintKeysLabel: 'Seta para cima, cima, baixo, baixo, esquerda, direita',
    hintPress: 'PRESSIONE NO TECLADO',
  },
};

export type Content = typeof pt;

const en: Content = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  numberLocale: 'en-US',
  role: 'Full Stack Developer',
  headline: 'React, React Native & Next.js',
  location: 'São Paulo, Brazil',
  description:
    'Software developer based in São Paulo, Brazil: web and mobile applications with React, React Native, Next.js and TypeScript, plus process and data automation with Python and Power BI.',
  keywords: [
    'Pablo Durães',
    'full stack developer',
    'React developer',
    'React Native',
    'Next.js',
    'TypeScript',
    'Python',
    'Power BI',
    'process automation',
    'portfolio',
    'São Paulo',
  ],
  ui: {
    skipToContent: 'Skip to content',
    mainNav: 'Main navigation',
    contact: 'Contact',
    switchLanguage: { label: 'PT', ariaLabel: 'Mudar para português' },
    viewProjects: 'View projects',
    technologies: 'Technologies',
    ogLabel: '// PORTFOLIO',
    footerRights: 'All rights reserved.',
    footerBuilt: 'Built with Next.js and TypeScript',
  },
  navLinks: [
    { label: 'About', href: '#sobre' },
    { label: 'Experience', href: '#experiencia' },
    { label: 'Projects', href: '#projetos' },
    { label: 'Education', href: '#formacao' },
    { label: 'Skills', href: '#skills' },
  ],
  hero: {
    tagline: ['BUILDING', ' PRODUCTS', '  THAT CONNECT', '   TECHNOLOGY', '    TO REAL NEEDS.'].join('\n'),
    intro:
      'I build web and mobile applications with React, React Native and Next.js, and automate processes with Python and Power BI — solutions focused on real business needs.',
  },
  terminal: [
    { text: '$ whoami', isCommand: true },
    { text: '> pablo.duraes', isCommand: false },
    { text: '$ location', isCommand: true },
    { text: '> são paulo, br', isCommand: false },
    { text: '$ status', isCommand: true },
    { text: '> open to projects and collaborations ✓', isCommand: false },
    { text: '$ experience', isCommand: true },
    { text: '> apprentice @ suzano s.a.', isCommand: false },
    { text: '$ stack --top', isCommand: true },
    { text: '> react, react-native, next, node', isCommand: false },
    { text: '$ contact', isCommand: true },
    { text: `> ${site.email}`, isCommand: false },
  ],
  about: {
    label: 'about',
    title: 'About me',
    intro: {
      before: "I'm a software developer focused on web and mobile applications and process automation. I mainly work with",
      highlight: 'Node.js, Next.js, React, React Native and TypeScript',
      after: ', as well as Python, SQL, Power BI and GCP.',
    },
    current: {
      before: "I'm currently an Apprentice at the Industrial Center of Excellence (CoE) at",
      highlight: 'Suzano S.A.',
      after:
        ', where I build BI solutions and automations for management reports. Alongside that, I build web and mobile products — with solutions in production serving more than 20 companies — and study Software Engineering at UMC.',
    },
  },
  focusAreas: [
    {
      title: 'Mobile apps',
      text: 'Cross-platform apps with React Native, from screen flows to store release.',
    },
    {
      title: 'Web applications',
      text: 'SaaS products with Next.js and TypeScript, focused on performance and great user experience.',
    },
    {
      title: 'Back-end & integrations',
      text: 'APIs with Node.js and tRPC, SQL and NoSQL databases, payments with Stripe and authentication with Clerk.',
    },
    {
      title: 'Data & automation',
      text: 'Power BI dashboards with DAX, Power Automate flows and Python scripts to automate reporting.',
    },
  ],
  experienceSection: { label: 'experience', title: 'Work experience' },
  experiences: [
    {
      role: 'Data Analyst',
      type: 'Apprentice',
      company: 'Suzano S.A.',
      team: 'Center of Excellence (CoE)',
      period: 'Jul 2026 — present',
      location: 'Mogi das Cruzes, Brazil',
      description:
        'Building Business Intelligence solutions for management reports, combining data analysis and process automation.',
      highlights: [
        'Created KPIs and DAX measures for Power BI dashboards.',
        'Automated report refreshes with Power Automate (Flow).',
        'Wrote Python scripts to automate recurring tasks.',
      ],
      stack: ['Power BI', 'DAX', 'Power Automate', 'Python', 'Alteryx', 'SQL', 'Google Cloud Platform'],
    },
    {
      role: 'Mobile & Web Developer',
      type: 'Freelance',
      company: 'Self-employed',
      period: 'Jun 2024 — Jul 2026',
      location: 'Remote',
      description:
        'Built web and mobile applications for companies in the food and psychotherapy industries, with API and database integrations.',
      highlights: [
        'Quick Tag: SaaS platform for product labels used by more than 20 companies.',
        'Nice App: corporate psychotherapy app built with React Native, with 100+ active users.',
        'API integrations, payments (Stripe) and authentication (Clerk).',
      ],
      stack: ['React Native', 'React', 'Next.js', 'Node.js', 'TypeScript', 'tRPC', 'Stripe', 'Clerk'],
    },
  ],
  projectsSection: {
    label: 'projects',
    title: 'Featured projects',
    upcoming: { name: 'Kaizen', text: 'New project in development — coming soon.' },
  },
  projects: [
    {
      name: 'Nice App',
      type: 'Mobile app',
      description:
        'Corporate psychotherapy app that lets companies track their employees’ psychological well-being through validated tests and scales.',
      stack: ['React Native', 'TypeScript', 'tRPC', 'Stripe'],
      metrics: [{ value: '+100', label: 'active users' }],
      link: { label: 'View presentation', href: nicePresentation },
    },
    {
      name: 'Quick Tag',
      type: 'Web platform · SaaS',
      description:
        'Platform for creating and managing product labels and information that automates processes, reduces errors and boosts operational efficiency.',
      stack: ['Next.js', 'React', 'TypeScript', 'Clerk'],
      metrics: [
        { value: '+20', label: 'client companies' },
        { value: '+100000', label: 'labels generated' },
      ],
      link: { label: 'Visit website', href: 'https://www.quicktag.com.br/' },
    },
  ],
  educationSection: {
    label: 'education',
    title: 'Education & courses',
    degreeLabel: "BACHELOR'S DEGREE",
    degree: 'B.Sc. in Software Engineering',
    school: 'University of Mogi das Cruzes — UMC',
    status: 'In progress',
    coursesLabel: 'ADDITIONAL COURSES',
  },
  aluraCourses: [
    'Programming Logic',
    'HTML & CSS',
    'React',
    'React Native',
    'Machine Learning',
    'Artificial Intelligence',
    'SQL',
    'Databases',
  ],
  skillsSection: { label: 'skills', title: 'Technologies' },
  skillGroups: [
    {
      title: 'Front-end & Mobile',
      items: ['React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'TanStack Query'],
    },
    {
      title: 'Back-end & Databases',
      items: ['Node.js', 'tRPC', 'Python', 'C', 'SQL', 'PostgreSQL', 'MongoDB', 'Supabase', 'Docker'],
    },
    {
      title: 'Data & Automation',
      items: ['Power BI', 'DAX', 'Power Automate', 'Python', 'Google Cloud Platform', 'Alteryx', 'SQL'],
    },
    {
      title: 'Integrations & Tools',
      items: ['Stripe', 'Clerk', 'GCP', 'Git', 'AI Agents', 'UX/UI'],
    },
  ],
  contactSection: {
    label: 'contact',
    title: "Let's talk?",
    text: "I'm open to opportunities, projects and collaborations. Send me a message — I reply quickly.",
    hint: '// SOMETHING IS HIDDEN HERE',
    hintKeysLabel: 'Arrow up, up, down, down, left, right',
    hintPress: 'PRESS IT ON YOUR KEYBOARD',
  },
};

export const content: Record<Locale, Content> = { pt, en };
