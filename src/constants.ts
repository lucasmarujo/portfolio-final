import portfolio from './public/portfolio.png';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

interface Education {
  id: number;
  school: string;
  title: string;
  date: string;
  location: string;
}

interface Experience {
  id: number;
  company: string;
  position: string;
  date: string;
  location: string;
  description: string;
}

export const personalInfo = {
  name: "Lucas Marujo",
  role: "FrontEnd Full Stack Developer with AI",
  about: "I have a keen interest in technology and am looking for an internship opportunity in software development, with the firm intention of applying and expanding my programming skills. I am open to opportunities in related areas, and other’s too, I am a motivated and versatile person, always willing to accept new challenges. With a passion for learning, I am dedicated to delivering high quality results. With a positive attitude and a growth mindset, willing to contribute significantly and achieve great things.",
  photo: "https://avatars.githubusercontent.com/u/97917029?v=4",
  github: "https://github.com/lucasmarujo",
  linkedin: "https://www.linkedin.com/in/lucas-marujo-amadeu-5322a7219/",
  email: "lucas.m.amadeu@gmail.com"
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio website 1.0 & 2.0",
    description: "Fully responsive portfolio website, with a modern and clean design, built with React and TypeScript, and styled with Tailwind CSS.",
    technologies: ["React", "Node.js", "Javascript", "TypeScript"],
    image: portfolio
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with React and Node.js",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500"
  },
];

export const education: Education[] = [
  {
    id: 0,
    school: "ILAC - International Language Academy of Canada",
    title: "C2 - CPE Cambridge Pro efficiency English",
    date: "2024",
    location: "Toronto, Canada"
  },
  {
    id: 1,
    school: "Padre Anchieta University",
    title: "Bachelor's degree in computer science",
    date: "2022 - 2025",
    location: "São Paulo, Brazil"
  },
  {
    id: 2,
    school: "Flamingo college",
    title: "IT technician",
    date: "2019 - 2021",
    location: "São Paulo, Brazil"
  },
  {
    id: 3,
    school: "Cosmos school",
    title: "Elementary and secondary education",
    date: "2010 - 2018",
    location: "São Paulo, Brazil"
  }
];

export const experience: Experience[] = [
  {
    id: 0,
    company: "GAG Reciclagem de Eletrônicos.",
    position: "Electronics maintenance technician",
    date: "Sep 2023 - Sep 2024",
    location: "Jundiaí, Brazil",
    description: "Responsible for registering products in the system, testing and maintaining hardware (notebooks, cell phones, servers and network devices), collaborating with the receiving and shipping sectors to meet customer needs."
  },
  {
    id: 1,
    company: "Lago Azul Distribuição",
    position: "Administrative assistant",
    date: "Mar 2023 - Aug 2023",
    location: "Jundiaí, Brazil",
    description: "Working in logistics and finance, using ERP Control, BI and spreadsheets to optimize processes, with agile communication and presentation of results at strategic meetings."
  },
  {
    id: 2,
    company: "Rede Boa Supermercados",
    position: "IT Support Trainee",
    date: "Oct 2022 - Jan 2023",
    location: "Jundiaí, Brazil",
    description: "Maintenance of networks, hardware and POS systems, technical support for ERP Protheus and Linux, as well as identifying and resolving system faults."
  },
  {
    id: 3,
    company: "Pro Turbo Usinagem",
    position: "HR apprentice and office assistant",
    date: "Jun 2022 - Oct 2022",
    location: "Jundiaí, Brazil",
    description: "Working in HR with employee registration, scanning engineering documents and managing maintenance spreadsheets."
  },
  {
    id: 4,
    company: "Airblower Engenharia",
    position: "Web Developer freelance",
    date: "mid 2020",
    location: "Jarinu, Brazil",
    description: "Web programming, social media administration and network, hardware and software maintenance."
  },
  {
    id: 5,
    company: "Intellibrand",
    position: "Full Stack Developer",
    date: "end 2019 - early 2020",
    location: "São Paulo, Brazil",
    description: "Internal digital platform monitoring."
  }
];