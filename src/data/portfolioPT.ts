import { Project, Experience, Education, Course, ContactInfo } from '@/types';

// Dados do perfil
export const profileData = {
  name: "Seu Nome",
  title: "Desenvolvedor Full Stack",
  subtitle: "Transformando ideias em soluções digitais inovadoras através de código limpo e arquitetura escalável",
  bio: "Desenvolvedor apaixonado por criar soluções elegantes e eficientes. Com experiência em desenvolvimento web moderno, foco em performance e experiência do usuário.",
  image: "/profile.jpg", // Adicione sua foto em public/
};

// Stack tecnológica
export const techStack = {
  frontend: ["React", "Next.js", "JavaSript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  backend: ["Java", "Spring Boot", "Node.js", "Express.js", "Fastfiy.js", "Python", "C#", "Prisma", "MySQL", "PostgreSQL", "Oracle Database"],
  tools: ["Git", "Github", "Figma", "Azure", "AWS", "Oracle Clouding"],
  other: ["REST API"],
};

// Quantidade de tecnologias
export const totalStack: number = Object.values(techStack).reduce((acc, arr) => acc + arr.length, 0);

// Projetos em destaque
export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Moderno",
    description: "Plataforma completa de e-commerce com painel administrativo, gerenciamento de produtos e checkout integrado.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    github: "https://github.com/seu-usuario/projeto",
    demo: "https://projeto-demo.vercel.app",
    featured: true,
  },
  {
    id: "2",
    title: "Dashboard Analytics",
    description: "Dashboard interativo com visualização de dados em tempo real e relatórios personalizados.",
    image: "/projects/dashboard.jpg",
    technologies: ["React", "Chart.js", "Node.js", "MongoDB"],
    github: "https://github.com/seu-usuario/projeto",
    featured: true,
  },
  {
    id: "3",
    title: "API RESTful",
    description: "API robusta com autenticação JWT, documentação Swagger e testes automatizados.",
    image: "/projects/api.jpg",
    technologies: ["Node.js", "Express", "PostgreSQL", "Jest"],
    github: "https://github.com/seu-usuario/projeto",
    featured: true,
  },
];

export const totalProjects: number = projects.length;

// Experiência profissional
// Adicione novas experiências NO TOPO (mais recente primeiro)
export const experiences: Experience[] = [
  {
    id: "pet-bolsista",
    company: "Ministério da Saúde",
    position: "Bolsista PET-Saúde",
    period: "08/2025 - Presente",
    description: "Atuo como bolsista no PET-Saúde desenvolvendo soluções em IA para a área da saúde, incluindo pesquisa e criação de um chatbot inteligente.",
    technologies: [],
  },
  {
    id: "facef-estagio",
    company: "Uni-FACEF",
    position: "Estagiario de Suporte em TI",
    period: "07/2025 - Presente",
    description: "Responsável pelo suporte técnico na Uni-FACEF, realizando manutenção, configuração de sistemas e garantindo o funcionamento da infraestrutura de TI.",
    technologies: [],
  }
];

// Formação acadêmica
export const education: Education[] = [
  {
    id: "1",
    institution: "Universidade Federal",
    degree: "Bacharelado",
    field: "Ciência da Computação",
    period: "2018 - 2022",
    description: "Foco em desenvolvimento de software, estruturas de dados e algoritmos.",
  },
  {
    id: "2",
    institution: "Escola Técnica",
    degree: "Técnico",
    field: "Informática",
    period: "2015 - 2017",
    description: "Fundamentos de programação e desenvolvimento web.",
  },
];

// Cursos e certificações
export const courses: Course[] = [
  {
    id: "1",
    name: "Advanced React Patterns",
    institution: "Udemy",
    date: "2024",
    certificate: "https://certificate-url.com",
  },
  {
    id: "2",
    name: "Node.js Masterclass",
    institution: "Rocketseat",
    date: "2023",
    certificate: "https://certificate-url.com",
  },
  {
    id: "3",
    name: "TypeScript: Do Zero ao Avançado",
    institution: "Alura",
    date: "2023",
  },
  {
    id: "4",
    name: "Docker para Desenvolvedores",
    institution: "Udemy",
    date: "2022",
  },
];

// Informações de contato
export const contactInfo: ContactInfo = {
  email: "lmazaraojr@gmail.com",
  phone: "Disponível via LinkedIn",
  location: "Franca, SP",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/LucMazarJR",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/luciano-mazarao-jr-264a342ba/",
      icon: "linkedin",
    },
  ],
};
