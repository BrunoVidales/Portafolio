import { SkillsProps } from "../types";
import { HobbiesProps } from "../types";

export const skills: SkillsProps[] = [
    { 
        name: 'HTML', 
        img: '/src/assets/skills/html5.svg',
        id: 1 
    },
    { 
        name: 'CSS', 
        img: '/src/assets/skills/css3.svg',
        id: 2 
    },
    { 
        name: 'JavaScript', 
        img: '/src/assets/skills/javascript.svg',
        id: 3
    },
    { 
        name: 'TypeScript', 
        img: '/src/assets/skills/typescript.svg',
        id: 4
    },
    { 
        name: 'React', 
        img: '/src/assets/skills/react.svg',
        id: 5 
    },
    { 
        name: 'Sass', 
        img: '/src/assets/skills/sass.svg',
        id: 6 
    },
    { 
        name: 'TailwindCSS', 
        img: '/src/assets/skills/tailwindcss.svg',
        id: 7 
    },
    { 
        name: 'Bootstrap', 
        img: '/src/assets/skills/bootstrap.svg',
        id: 8 
    },
    { 
        name: 'Vite', 
        img: '/src/assets/skills/vite.svg',
        id: 9 
    },
    { 
        name: 'Git', 
        img: '/src/assets/skills/git.svg',
        id: 10 
    },
    { 
        name: 'Yarn', 
        img: '/src/assets/skills/npm.svg',
        id: 11 
    },
    { 
        name: 'Figma', 
        img: '/src/assets/skills/figma.svg',
        id: 12 
    }
];  

export const hobbies: HobbiesProps[] = [
    { 
        name: 'Cocinar', 
        img: '/src/assets/hobbies/cocinar.svg',
        description: 'Me gusta inventar en la cocina, por más que no me salga rico 😋',
        id: 1 
    },
    { 
        name: 'Juegos', 
        img: '/src/assets/hobbies/juegos.svg',
        description: 'Soy muy vicio, y amante de quedarme hasta las 5 de la madrugada 🥱',
        id: 2 
    },
    { 
        name: 'Películas', 
        img: '/src/assets/hobbies/peliculas.svg',
        description: 'Disfruto de ver películas, mis favoritas son las de terror 🎬',
        id: 3
    },
    { 
        name: 'Caminar', 
        img: '/src/assets/hobbies/caminar.svg',
        description: 'Me gusta caminar y relajarme caminando al aire libre 🚶‍♂️',
        id: 4
    }
]