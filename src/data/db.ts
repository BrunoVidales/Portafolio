import { SkillsProps } from "../types";
import { HobbiesProps } from "../types";
import { TrainingProps } from "../types";
import { ProjectsProps } from "../types";

export const skills: SkillsProps[] = [
    { 
        name: 'HTML', 
        img: '/assets/skills/html5.svg',
        id: 1,
    },
    { 
        name: 'CSS', 
        img: '/assets/skills/css3.svg',
        id: 2 
    },
    { 
        name: 'JavaScript', 
        img: '/assets/skills/javascript.svg',
        id: 3
    },
    { 
        name: 'TypeScript', 
        img: '/assets/skills/typescript.svg',
        id: 4
    },
    { 
        name: 'React', 
        img: '/assets/skills/react.svg',
        id: 5 
    },
    { 
        name: 'Sass', 
        img: '/assets/skills/sass.svg',
        id: 6 
    },
    { 
        name: 'TailwindCSS', 
        img: '/assets/skills/tailwindcss.svg',
        id: 7 
    },
    { 
        name: 'Bootstrap', 
        img: '/assets/skills/bootstrap.svg',
        id: 8 
    },
    { 
        name: 'Vite', 
        img: '/assets/skills/vite.svg',
        id: 9 
    },
    { 
        name: 'Git', 
        img: '/assets/skills/git.svg',
        id: 10 
    },
    { 
        name: 'Yarn', 
        img: '/assets/skills/npm.svg',
        id: 11 
    },
    { 
        name: 'Figma', 
        img: '/assets/skills/figma.svg',
        id: 12 
    }
];  

export const hobbies: HobbiesProps[] = [
    { 
        name: 'Cocinar', 
        img: '/assets/hobbies/cocinar.svg',
        description: 'Me gusta inventar en la cocina, por más que no me salga rico 😋',
        id: 1 
    },
    { 
        name: 'Juegos', 
        img: '/assets/hobbies/juegos.svg',
        description: 'Soy muy vicio, y amante de quedarme hasta las 5 de la madrugada 🥱',
        id: 2 
    },
    { 
        name: 'Películas', 
        img: '/assets/hobbies/peliculas.svg',
        description: 'Disfruto de ver películas, mis favoritas son las de terror 🎬',
        id: 3
    },
    { 
        name: 'Caminar', 
        img: '/assets/hobbies/caminar.svg',
        description: 'Me gusta caminar 🚶‍♂️',
        id: 4
    }
]; 

export const training: TrainingProps[] = [
    { 
        name: 'Desarrollo Front End React', 
        img: '/assets/training/educacionit.jpeg',
        description: '2023 - Telecom Argentina y EducaciónIT',
        id: 1 
    },
    { 
        name: 'Especialización Front-End', 
        img: '/assets/training/alura.jpg',
        description: 'En curso - Alura',
        id: 2 
    },
    { 
        name: 'React y TypeScript', 
        img: '/assets/training/udemy.jpg',
        description: 'En curso - Udemy',
        id: 3
    }
];

export const projects: ProjectsProps[] = [
    { 
        name: 'GuitarLA', 
        img: '/assets/projects/guitarLa.png',
        tools: [
            {tool: 'React', ico: '/assets/skills/react.svg'},
            {tool: 'TypeScript', ico: '/assets/skills/typescript.svg'},
        ],
        url: 'https://chic-douhua-42cca0.netlify.app',
        id: 1 
    },
    { 
        name: 'Encriptador de texto', 
        img: '/assets/projects/encriptadorDeTexto.png',
        tools: [
            {tool: 'HTML', ico: '/assets/skills/html5.svg'},
            {tool: 'CSS3', ico: '/assets/skills/css3.svg'},
            {tool: 'JavaScript', ico: '/assets/skills/javascript.svg'},
        ],
        url: 'https://serene-faloodeh-af528e.netlify.app',
        id: 2 
    },
    { 
        name: 'GifExpert', 
        img: '/assets/projects/gifexpert.png',
        tools: [
            {tool: 'React', ico: '/assets/skills/react.svg'},
            {tool: 'JavaScript', ico: '/assets/skills/javascript.svg'},
        ],
        url: 'https://scintillating-kangaroo-f725ee.netlify.app',
        id: 3 
    },
    { 
        name: 'Consumo de Propinas', 
        img: '/assets/projects/consumoDePropinas.png',
        tools: [
            {tool: 'React', ico: '/assets/skills/react.svg'},
            {tool: 'TypeScript', ico: '/assets/skills/typescript.svg'},
        ],
        url: 'https://scintillating-lokum-0cd8ea.netlify.app',
        id: 4 
    },
];