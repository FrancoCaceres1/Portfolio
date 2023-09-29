import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        greeting: "Hello!",
        landing: {
          title: "WELCOME",
          text: "Franco's portfolio",
          button: "press start",
        },
        home: {
          title: "HOME",
          projects: "PROJECTS",
          about: "ABOUT ME",
          contact: "CONTACT ME",
          skills: "MY SKILLS",
        },
        settings: {
          title: "SETTINGS",
          language: "LANGUAGE ",
          selection: "> EN",
          english: "ENGLISH",
          spanish: "SPANISH",
          color: "COLOR ",
        },
        skills: {
          title: "MY SKILLS",
        },
        projects: {
          title: "PROJECTS",
          visit: "VISIT",
          countries: "COUNTRIES API",
          rym: "R&M API",
        },
        project1: {
          visit: "VISIT WEBSITE",
          technologies: "TECHNOLOGIES",
          information:
            'In this project, I worked with a team to carry out the requirements of the startup "Puebla del Mar." It is a virtual women\'s clothing store that aims to be accessible to all ages and provide an excellent user experience. It was a great challenge, but we managed to overcome it and exceed customer expectations.',
        },
        project2: {
          title: "COUNTRIES API",
          information:
            'This is the project for my website "Countries-API," which I completed during my time in the Individual Project (PI) at Henry Bootcamp. In this project, I used React and Redux for the frontend, and I used PostgreSQL with Sequelize as the ORM for the database.',
        },
        project3: {
          title: "R&M API",
          information:
            "The objective of this application was to consolidate all the frontend technologies I had learned. In this project, I had to create a landing page that called the Rick & Morty API using only CSS and JavaScript. It is a simple application and one of the first ones I developed.",
        },
        project4: {
          information:
            "This was an application aimed at consolidating all the frontend technologies I had learned. In this project, I had to create a landing page using SASS and Webpack. It is a simple application and one of the first ones I developed.",
        },
        contact: {
          title: "CONTACT ME",
        },
        about: {
          title: "ABOUT ME",
          text: "Hey there! I'm Franco, a full-stack web developer dedicated to the continuous improvement of my programming and problem solving skills. My passion for programming and web development drives me to learn and grow continually in this field. I enjoy tackling technical challenges and exploring creative solutions to complex problems, always with the goal of contributing to the world of web development while honing my skills throughout my career.",
        },
        download: {
          title: "DOWNLOAD CV",
        },
        back: {
          title: "BACK",
        },
      },
    },
    es: {
      translation: {
        greeting: "¡Hola!",
        landing: {
          title: "BIENVENIDO",
          text: "portfolio de Franco",
          button: "presiona start",
        },
        home: {
          title: "INICIO",
          projects: "PROYECTOS",
          about: "SOBRE MÍ",
          contact: "CONTÁCTAME",
          skills: "MIS HABILIDADES",
        },
        settings: {
          title: "AJUSTES",
          language: "IDIOMA ",
          selection: "> ES",
          english: "INGLÉS",
          spanish: "ESPAÑOL",
          color: "COLOR ",
        },
        skills: {
          title: "MIS HABILIDADES",
        },
        projects: {
          title: "PROYECTOS",
          visit: "VER",
          countries: "API PAÍSES",
          rym: "API R&M",
        },
        project1: {
          visit: "VISITAR SITIO",
          technologies: "TECNOLOGIAS",
          information:
            'En este proyecto, trabjé con un equipo para llevar acabo los requerimientos de la startup "Puebla del Mar". Es una tienda de ropa femenina virtual, que busca ser accesible para todas las edades y ofrecer una excelente experiencia de usuario. Fue un gran desafío pero lo supimos sobrellevar y superar las expectativas de los clientes.',
        },
        project2: {
          title: "API PAÍSES",
          information:
            'Este es el proyecto de mi pagina "Countries-API". El cual realice durante mi estancia en el PI (Proyecto Individual) de Henry Bootcamp. En este proyecto utilice React y Redux para el FrontEnd, y como DB utilice PostgreSQL con Sequelize como ORM.',
        },
        project3: {
          title: "API R&M",
          information:
            "Aplicación que tenía por objetivo consolidar todas las tecnologías front end aprendidas. En este proyecto debía crear una landing page llamando a la API de Rick & Morty y utilizando solamente CSS más JavaScript. Es una aplicación simple y una de las primeras que realice.",
        },
        project4: {
          title: "PROYECTOS",
          information:
            "Aplicación que tenía por objetivo consolidar todas las tecnologías front end aprendidas. En este proyecto debía crear una landing page usando SASS y Webpack. Es una aplicación simple y una de las primeras que realice.",
        },
        contact: {
          title: "CONTÁCTAME",
        },
        about: {
          title: "SOBRE MÍ",
          text: "Me llamo Franco, soy un desarrollador web full-stack dedicado a la mejora continua de mis habilidades de programación y resolución de problemas. Mi pasión por la programación y el desarrollo web me impulsa a aprender y crecer constantemente en este campo. Disfruto enfrentando desafíos técnicos y explorando soluciones creativas para problemas complejos, siempre con el objetivo de contribuir al mundo del desarrollo web mientras perfecciono mis habilidades a lo largo de mi carrera.",
        },
        download: {
          title: "DESCARGAR CV",
        },
        back: {
          title: "ATRÁS",
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
