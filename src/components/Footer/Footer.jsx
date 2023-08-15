import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p> Encontrame en:</p>
        <div className={styles.footerLinks}>
          <a href="https://github.com/abrilsecone" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/tu_perfil" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </div>
      </div>
      <p className={styles.footerCopyright}>&copy; Abril Secone 2023.</p>
    </footer>
  );
};

export default Footer;
