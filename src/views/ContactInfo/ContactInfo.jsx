import React from 'react';
import Contact from '../../components/Contact/Contact';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <Contact />
    </div>
  );
};

export default ContactInfo;
