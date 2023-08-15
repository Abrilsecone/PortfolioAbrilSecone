import React from 'react';
import styles from './Project.module.css';

const Project = ({ title, description }) => {
  return (
    <div className={styles.project}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Project;
