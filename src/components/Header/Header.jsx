import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">abril-secone</Link>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <div className="Line1" style={{width: 40, height: 0, transform: 'rotate(90deg)', transformOrigin: '15 55', border: '0.50px #1E2D3D solid'}}></div>
          <li>
            <Link to="/">_hola</Link>
          </li>
          <div className="Line1" style={{width: 40, height: 0, transform: 'rotate(90deg)', transformOrigin: '15 55', border: '0.50px #1E2D3D solid'}}></div>
          <li>
            <Link to="/about">_sobre-mi</Link>
          </li>
          <div className="Line1" style={{width: 40, height: 0, transform: 'rotate(90deg)', transformOrigin: '15 55', border: '0.50px #1E2D3D solid'}}></div>
          <li>
            <Link to="/projects">_proyectos</Link>
          </li>
          <div className="Line1" style={{width: 40, height: 0, transform: 'rotate(90deg)', transformOrigin: '15 55', border: '0.50px #1E2D3D solid'}}></div>
          <li>
            <Link to="/contact">_contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

