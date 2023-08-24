import React from 'react';
import styles from './Contact.module.css';
import contactImage from '../../asset/contact.png';

const Contact = () => {
  /* const codeBlock = `
    const button = document.querySelector('#sendBtn');
    
    const message = {
      name: "Juan Gimenez",
      email: "",
      message: "",
      date: "Thu 21 Apr"
    }
    
    button.addEventListener('click', () => {
      form.send(message);
    });
  `;

  const codeLines = codeBlock.split('\n').map((line, index) => (
    <div key={index} className={styles.codeLine}>
      <span className={styles.lineNumber}>{index + 1}</span>
      {line}
    </div>
  )); */

  return (
    <div className={styles.contact}>
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h1>Contacto</h1>
          <p>Puedes contactarme a través de los siguientes medios:</p>
          <ul className={styles.contactList}>
            <li>
              <strong>Email:</strong> abrilsecone@gmail.com
            </li>
            <li>
              <strong>Teléfono:</strong> 3400666885
            </li>
            <li>
              <strong>Redes Sociales: </strong> 
              <a href="https://www.github.com/abrilsecone" target="_blank" rel="noopener noreferrer">Github</a>,
              <a href="https://www.linkedin.com/in/tuperfil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <img src={contactImage} alt="Imagen de contacto" className={styles.contactImage} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
