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
          english: "ENGLISH",
          spanish: "SPANISH",
        },
        skills: {
          title: "MY SKILLS",
        },
        projects: {
          title: "PROJECTS",
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
          english: "INGLÉS",
          spanish: "ESPAÑOL",
        },
        skills: {
          title: "MIS HABILIDADES",
        },
        projects: {
          title: "PROYECTOS",
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
