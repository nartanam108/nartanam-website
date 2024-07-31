import React from 'react';
import styles from './Rangaanubhavam.module.css';
import logo from '../images/nartanam.jpg'; // Adjust the path to your logo
import poster from '../images/whatsapp-image-2023-05-07-at-3-19-19-am_orig.jpeg'; // Adjust the path to your poster

const Rangaanubhavam = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blackBand}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.overlayText}>An experience of dance and emotion</div>
      </div>
      <div className={styles.grayBand}>
        <img src={poster} alt="Poster" className={styles.poster} />
      </div>
    </div>
  );
};

export default Rangaanubhavam;
