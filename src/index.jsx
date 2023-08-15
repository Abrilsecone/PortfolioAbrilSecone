import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Landing from './views/Landing/Landing';
import AboutMe from './views/AboutMe/AboutMe';
import ProjectList from './views/ProjectList/ProjectList';
import ContactInfo from './views/ContactInfo/ContactInfo';
import styles from './App.module.css';

const App = () => {
  return (
    <Router>
      <div className={styles.card}>
      <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/contact" element={<ContactInfo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
