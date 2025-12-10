import { Project, Experience, Education, Course, ContactInfo } from '@/types';

// Dados do perfil
export const profileData = {
  name: "Seu Nome",
  title: "Desenvolvedor Full Stack",
  subtitle: "Especialista em React, Next.js e Node.js",
  bio: "Desenvolvedor apaixonado por criar soluções elegantes e eficientes. Com experiência em desenvolvimento web moderno, foco em performance e experiência do usuário.",
  image: "/profile.jpg", // Adicione sua foto em public/
};

// Stack tecnológica
export const techStack = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  backend: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB", "Prisma"],
  tools: ["Git", "Docker", "VS Code", "Figma", "Postman"],
  other: ["REST API", "GraphQL", "Jest", "CI/CD"],
};

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

// Experiência profissional
export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tech Company",
    position: "Desenvolvedor Full Stack",
    period: "2023 - Presente",
    description: "Desenvolvimento de aplicações web escaláveis utilizando React e Node.js. Implementação de arquitetura de microsserviços e otimização de performance.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: "2",
    company: "Startup XYZ",
    position: "Desenvolvedor Front-end",
    period: "2021 - 2023",
    description: "Criação de interfaces responsivas e acessíveis. Colaboração com designers e implementação de testes automatizados.",
    technologies: ["React", "TypeScript", "Jest", "Tailwind CSS"],
  },
  {
    id: "3",
    company: "Agência Digital",
    position: "Desenvolvedor Junior",
    period: "2020 - 2021",
    description: "Desenvolvimento de landing pages e sites institucionais. Manutenção de projetos legados e implementação de novas features.",
    technologies: ["JavaScript", "HTML", "CSS", "WordPress"],
  },
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
  email: "seu.email@exemplo.com",
  phone: "Disponível via LinkedIn",
  location: "São Paulo, Brasil",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/seu-usuario",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/seu-perfil",
      icon: "linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/seu-usuario",
      icon: "twitter",
    },
  ],
};
