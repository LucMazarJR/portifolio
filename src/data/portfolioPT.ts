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
    field: "Engenharia de Software",
    period: "2024 - 2027",
    description: "Formação voltada para desenvolvimento de sistemas escaláveis e arquitetura de software, com ênfase em metodologias ágeis, padrões de projeto, engenharia de requisitos e boas práticas de desenvolvimento. Experiência prática em projetos interdisciplinares aplicando tecnologias modernas.",
  },
];

// Cursos e certificações
export const courses: Course[] = [
  {
    id: "course-node-apis-2025",
    name: "Criando APIs com Node.js",
    institution: "DIO - 8h",
    date: "Agosto 2025",
  },
  {
    id: "course-oracle-database-2025",
    name: "Database Design",
    institution: "Oracle Academy",
    date: "Julho 2025",
  },
  {
    id: "course-azure-2025",
    name: "Microsoft 50 Anos - Computação em Nuvem com Azure",
    institution: "DIO - 15h",
    date: "Junho 2025",
  },
  {
    id: "course-csharp-2025",
    name: "C# COMPLETO - Programação Orientada a Objetos + Projetos",
    institution: "Udemy - 38h",
    date: "Maio 2025",
  },
];

// Reconhecimentos e Prêmios
export const awards: Award[] = [
  {
    id: "award-tic-2025",
    title: "3º Lugar - Trabalho Interdisciplinar de Computação",
    issuer: "Uni-FACEF",
    date: "2025",
    description: "Projeto Apojobs desenvolvido ao longo do ano letivo, plataforma focada em inclusão profissional de pessoas com deficiência, conquistando 3º lugar no ranking final",
  },
  {
    id: "programming-marathon-2024",
    title: "1º Lugar - Maratona de Programação",
    issuer: "Uni-FACEF",
    date: "2024",
    description: "Conquista do primeiro lugar resolvendo problemas de programação com foco em menor tempo de execução e máxima acertividade",
  },
  {
    id: "biggest-score-2024",
    title: "3º Maior Média Geral da Turma 1° Semestre",
    issuer: "Uni-FACEF",
    date: "2024",
    description: "Reconhecimento pelo desempenho acadêmico consistente ao longo do primeiro semestre",
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
