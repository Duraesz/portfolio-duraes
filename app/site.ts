export const site = {
  name: 'Durães',
  role: 'Desenvolvedor Full Stack',
  headline: 'React, React Native & Next.js',
  location: 'São Paulo, Brasil',
  description:
    'Desenvolvedor de software em São Paulo: aplicações web e mobile com React, React Native, Next.js e TypeScript, além de automação de processos e dados com Python e Power BI.',
  email: 'pablosantosduraes6@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pablo-dur%C3%A3es-781421320/',
};

export const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Skills', href: '#skills' },
];

export const focusAreas = [
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
];

export const experiences = [
  {
    role: 'Analista de Dados',
    type: 'Aprendiz',
    company: 'Suzano S.A.',
    team: 'Centro Tecnológico Operacional (CTO)',
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
];

export type Project = {
  name: string;
  type: string;
  description: string;
  stack: string[];
  metrics: { value: string; label: string }[];
  link: { label: string; href: string };
};

export const projects: Project[] = [
  {
    name: 'Nice App',
    type: 'Aplicativo mobile',
    description:
      'Aplicativo de psicoterapia corporativa que permite às empresas acompanhar o bem-estar psicológico dos colaboradores por meio de testes e escalas validadas.',
    stack: ['React Native', 'TypeScript', 'tRPC', 'Stripe'],
    metrics: [{ value: '+100', label: 'usuários ativos' }],
    link: {
      label: 'Ver apresentação',
      href: 'https://www.linkedin.com/posts/pablo-dur%C3%A3es-781421320_programaaexao-projeto-reactnative-ugcPost-7434066766345134080-incI',
    },
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
];

export const skillGroups = [
  {
    title: 'Front-end & Mobile',
    items: ['React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'TanStack Query'],
  },
  {
    title: 'Back-end & Dados',
    items: ['Node.js', 'tRPC', 'Python', 'SQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Dados & Automação',
    items: ['Power BI', 'DAX', 'Power Automate', 'Python'],
  },
  {
    title: 'Integrações & Ferramentas',
    items: ['Stripe', 'Clerk', 'GCP', 'Git', 'Agentes de IA', 'UX/UI'],
  },
];

export const aluraCourses = [
  'Lógica de Programação',
  'HTML & CSS',
  'React',
  'React Native',
  'Machine Learning',
  'Inteligência Artificial',
];
