import React, { useState } from 'react';
import GitHubLink from '../../components/GitHubLink/GitHubLink';
import styles from './Landing.module.css';

const Landing = () => {
  const githubLink = 'https://github.com/abrilsecone';

  return (
    <div className={styles.landing}>
      <div className={styles.introText}>
        <p>Hola a todos. Yo soy</p>
        <h1>Abril Secone</h1>
        <h2>&gt; FullStack developer </h2>
        <p> completa el juego para continuar</p>
        <p> podes verlo en mi GitHub</p>

        <p>const githubLink = </p><GitHubLink link={githubLink} text="https://github.com/abrilsecone" />
      </div>
    </div>
  );
};

export default Landing;