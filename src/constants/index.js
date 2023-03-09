import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  chatbot,
  nodered , 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Desenvolvedor web",
    icon: web,
  },
  {
    title: "Desenvolvedor de IA E Machine learning",
    icon: mobile,
  },
  {
    title: "Desenvolvedor Python",
    icon: backend,
  },
  {
    title: "Empreendedorismo",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "chatbot",
    icon: chatbot,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "nodered",
    icon: nodered,
  },
];

const experiences = [
  {
    title: "Desenvolvedor Full-stack",
    company_name: "Vaga Livre",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Abril 2022 - Atualmente",
    points: [
      "Fui responsável pela idealização do projeto e pelo desenho da arquitetura e funcionalidades do sistema.",
      "Criação de toda a inteligência artificial para o reconhecimento das vagas com python e machine learning",
      "Desenvolvimento do App feito em react-native ",
      "E também sou o responsável por toda a parte de venda do software para empresas e o marketing tanto para o B2B como no B2C",
    ],
  },
  {
    title: "Desenvolvedor Full-Stack Web /Co-fundador e CPO",
    company_name: "Glocheck",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Dezembro 2022 - Atualmente",
    points: [
      "Fui responsável pelo desenvolvimento completo do Website.",
      "Desenvolvi back-end completo para o recebimento e disparo automático de arquivos.",
      "Implementei uma inteligência artificial capaz de corrijir arquivos de forma automática",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Medidor batimento cardíaco usando webcam",
    description:
      "Usando Python, visão computacional e machine learning, foi desenvolvido um sistema para verificar os batimentos cardíacos em tempo e plotar no gráfico.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Visão Computacional",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.linkedin.com/in/rafael-santis-ab64b2177/",
  },
  {
    name: "App para indicar ao usuário onde estacionar na rua de forma gratuita",
    description:
      "Um app integrado a câmeras ao redor de várias cidades que usa inteligência artificial para analisar os vídeos e em tempo real informa ao usuário onde há lugares para ele estacionar de forma gratuita baseado em sua localização.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
