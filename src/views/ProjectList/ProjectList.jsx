import React from 'react';
import Project from '../../components/Project/Project'; 
import styles from './ProjectList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

const ProjectList = () => {
  const projects = [
    {
      title: 'Canineconnect',
      description: 'Un sitio web dinámico, consumiendo API\'s externas con CRUD completo, filtros y búsquedas.',
      technologies: ['JavaScript', 'React', 'Sequelize', 'HTML', 'CSS', 'NodeJS', 'Redux'],
    },
    {
      title: 'Trends App',
      description: 'Contribuí al desarrollo de aplicación web full stack en una startup en crecimiento. Trabajo colaborativo con metodologías ágiles. Colaboré en la implementación de interfaces de usuario y características Frontend.',
      technologies: ['JavaScript', 'React', 'Sequelize', 'HTML', 'CSS', 'NodeJS', 'Redux'],
    },
  ];

  const technologies = [
    { name: 'HTML5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3 },
    { name: 'JavaScript', icon: faJs },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'React', icon: faReact },
  ];

  return (
    <div className={styles.projectList}>
      <div className={styles.leftContent}>
        <h1>Proyectos</h1>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <Project key={index} title={project.title} description={project.description} />
          ))}
        </div>
      </div>
      <div className={styles.rightContent}>
        <h1 class="h1_Proy">Tecnologías FullStack</h1>
        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <div key={index} className={styles.techIcon}>
              <FontAwesomeIcon icon={tech.icon} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
