import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <div className={styles.headerImageContainer}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>NARTANAM DANCE ACADEMY</h1>
        <p className={styles.paragraph}>
          Bharatanatyam. Kuchipudi. Grace. Discipline. Posture. Art. Rhythm. Balance - The Nartanam Dance Academy is a place for young students to discover their love for the arts, hone their talent, and evolve into graceful, creative dancers.
        </p>
        <Link to="/contact" className={styles.button}>Contact</Link>
      </div>
    </div>
  );
};

export default Home;
