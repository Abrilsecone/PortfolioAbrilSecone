import React from 'react';
import Project from '../../components/Project/Project'; 
import styles from './ProjectList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

const ProjectList = () => {
  const projects = [
    { title: 'Proyecto 1', description: 'Descripción del proyecto 1' },
    { title: 'Proyecto 2', description: 'Descripción del proyecto 2' },
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
        <h1>Tecnologías FullStack</h1>
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
