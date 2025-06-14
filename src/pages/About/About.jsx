import React from 'react';
import './AboutUs.css';
import Description from '../../components/Description';
import Features from '../../components/Features';
import DeveloperCard from '../../components/DeveloperCard';
 
const developers = [
  {
    name: 'Juan Carlos Mavesoy',
    role: 'Ingeniero en sistemas',
    description: 'Soy Ingeniero de Sistemas con gusto por analizar, cuestionar y entender a fondo lo que desarrollo: no me gusta simplemente hacer lo que me dicen, me gusta entender el porqué de las cosas y construir soluciones bien pensadas y con calidad. En este proyecto participé tanto en el desarrollo del backend (Java con Spring Boot y microservicios) como en el frontend (React con Bootstrap), cuidando cada detalle y procurando mantener los mejores estándares posibles, porque sí... soy psicorrígido, y me gusta que todo quede bien hecho. Fuera del código, disfruto el fútbol —verlo y jugarlo, aunque lo mío en la cancha es más corazón que talento, y me encanta escuchar vallenatos románticos, que siempre me ponen de buen ánimo (y a veces, con ganas de unas buenas frías )',
    image: '/src/assets/Developer1.jpg',
  },
  {
    name: 'María Camila Torres',
    role: 'Administradora de empresas',
    description: 'Soy administradora de empresas, pero toda mi trayectoria laboral ha estado enfocada en el campo de pruebas de software. Esta profesión me ha permitido descubrir que, muchas veces, la vida te guía hacia donde realmente encuentras felicidad y sentido, lo que conocemos como vocación. Durante estos ocho años de experiencia, me he formado constantemente en el ámbito tecnológico, y este año decidí asumir un nuevo reto en mi vida personal y profesional: iniciar una especialización en el sector tecnológico. Este proyecto representa una oportunidad invaluable para poner a prueba mis conocimientos, tanto empíricos como académicos, y consolidar el camino que he venido construyendo. Además, esta especialización, junto con sus materias y actividades prácticas, me brinda el espacio ideal para demostrar lo que soy capaz de lograr. A lo largo de mi carrera, he sido subestimada por el hecho de venir de una profesión diferente, pero hoy puedo decir con seguridad que el conocimiento, la pasión y la disciplina no tienen límites definidos por un título. Estoy aquí para demostrarme y demostrarles a los demás que mi preparación y experiencia me respaldan, y que tengo las capacidades necesarias para destacar en el mundo tecnológico',
    image: '/src/assets/Developer3.jpg',
  },
  {
    name: 'Sebastián Vargas',
    role: 'Ingeniero electronico',
    description: 'Soy Sebastián Vargas, guajiro de raíz, Ingeniero Electrónico e Ingeniero Civil, con especialización en Gerencia de Proyectos y actualmente en formación como Especialista en Ingeniería de Software. Me dedico al desarrollo de software y a la docencia, combinando lo técnico con la vocación de enseñar. Soy músico aficionado, apasionado por el fútbol y el vallenato, y siempre busco aprender algo nuevo. Este trabajo refleja el esfuerzo y la dedicación que le pongo a cada reto. Me considero inquieto, curioso y en constante aprendizaje. En mis tiempos libres disfruto hacer deporte y jugar fútbol, donde siempre dejo el alma, aunque no siempre el talento.',
    image: '/src/assets/Developer2.png',
  },
  {
    name: 'Dayana Chinchilla',
    role: 'Ingeniera en sistemas',
    description: 'Soy dayana chinchilla, ingeniera en sistemas, graduada de la universidad popular del Cesar, soy de valledupar, actualmente trabajo como analista de sistemas en el banco del occidente y estudio la especialización en ingeniería de software, en mis tiempos libres me gusta entrenar, salir con mi familia y soy voluntaria en fundaciones de rescataste de animales domésticos y silvestres en la ciudad, me gusta mucho viajar y conocer lugares. Este trabajo demuestra las habilidades que he aprendido cursando mi especialización y quiero seguir aprendiendo y dando todo de mi.',
    image: '/src/assets/Developer4.jpg',
  },
];
 
const About = () => {
  return (
    <div className="about-container">
      <h1 className="title">TaskManagerPro</h1>
      <Description />
      <Features />

      <h2 className="team-title">Equipo de Desarrollo</h2>
      <div className="cards-container">
        {developers.map((dev, index) => (
          <DeveloperCard key={index} {...dev} />
        ))}
      </div>
    </div>
  );
};

export default About;
 