import { Project, Experience, Education, Course, ContactInfo, Award } from '@/types';

// Dados do perfil
export const profileData = {
  name: "Luciano Mazarão Jr",
  title: "Desenvolvedor Full Stack",
  subtitle: "Transformando ideias em soluções digitais inovadoras através de código limpo e arquitetura escalável",
  bio: "Desenvolvedor apaixonado por criar soluções elegantes e eficientes. Com experiência em desenvolvimento web moderno, foco em performance e experiência do usuário.",
  image: "/perfilImage.png",
};

// Stack tecnológica
export const techStack = {
  frontend: ["Next.js", "React", "JavaSript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
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
    title: "Apojobs - Tic 2025",
    description: "A Apojobs é uma plataforma desenvolvida para promover a inclusão profissional de pessoas com deficiência, conectando candidatos e empresas. Conta com cadastro acessível, mapeamento de barreiras e ferramentas administrativas para acompanhar métricas de inclusão. Criada no TIC da UniFACEF, utiliza tecnologias modernas para entregar uma experiência intuitiva e funcional.",
    image: "/images/projects/1.jpg",
    technologies: ["React.js", "TypeScript", "Node", "Express", "PostgreSQL", "Prisma"],
    github: {
      frontend: "https://github.com/LucMazarJR/tic-2025-front",
      backend: "https://github.com/LucMazarJR/tic-2025-back"
    },
    demo: "https://apojobs.vercel.app/",
    featured: true,
  },
  {
    id: "2",
    title: "MedBot - Hackathon 2025",
    description: "O Medbot é um mini assistente virtual de saúde desenvolvido em hackathon, criado para oferecer respostas rápidas e acessíveis sobre cuidados básicos por meio de um chatbot intuitivo e funcional.",
    image: "/images/projects/2.png",
    technologies: ["React.js", "TypeScript", "Node", "Express", "PostgreSQL", "Prisma", "OpenAi API"],
    github: "https://github.com/LucMazarJR/hackathon-2025",
    featured: true,
  },
  {
    id: "3",
    title: "Xadrez Terminal",
    description: "Projeto de um jogo de xadrez em C#, executado no terminal, permitindo partidas completas com lógica de movimentos e regras implementadas.",
    image: "/images/projects/3.jpeg",
    technologies: ["C#", "POO"],
    github: "https://github.com/LucMazarJR/xadrez-console",
    featured: true,
  },
];

export const totalProjects: number = projects.length;

// Experiência profissional
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
    institution: "Uni-FACEF",
    degree: "Bacharelado",
    field: "Ciência da Computação",
    period: "2018 - 2022",
    description: "Foco em desenvolvimento de software, estruturas de dados e algoritmos.",
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

// Reconhecimentos e Prêmios
export const awards: Award[] = [
  {
    id: "award-hackathon-2025",
    title: "1º Lugar - Hackathon Saúde Digital",
    issuer: "Uni-FACEF",
    date: "2025",
    description: "Projeto MedBot premiado como melhor solução de IA aplicada à saúde",
  },
  {
    id: "award-tic-2025",
    title: "Destaque em Inclusão Digital",
    issuer: "Uni-FACEF - TIC",
    date: "2025",
    description: "Reconhecimento pelo desenvolvimento da plataforma Apojobs focada em inclusão profissional",
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
