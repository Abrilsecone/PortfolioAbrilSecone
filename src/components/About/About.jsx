import React from 'react';
import styles from './About.module.css';
import myImage from '../../asset/ilustracion abril.png';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.leftColumn}>
      <h2>Informacion personal</h2>
      <p>Soy Abril Secone, Desarrolladora Web Full Stack y Diseñadora Gráfica.

 Mi enfoque principal es el desarrollo frontend, donde combino mis habilidades de programación con mi creatividad en el diseño gráfico.

🌟
Soy una firme creyente de que la combinación de un código limpio y un diseño impactante es la clave para crear productos digitales excepcionales.

🎓 Educación
📚 Mi formación en Soy Henry me ha proporcionado una base sólida, pero también soy una estudiante apasionada y autodidacta, siempre en busca de conocimiento y mejora continua.

🌈 Dando vida a la creatividad
La tecnología me permite transformar ideas en realidad. Me encanta trabajar en proyectos que tienen un impacto visual y funcional, y estoy emocionada de compartir mis creaciones con vos en este espacio.
</p>
        </div>
        <div className={styles.rightColumn}>
        <img src={myImage} alt="Mi Imagen" />
        </div>
      </div>
  );
};

export default About;
