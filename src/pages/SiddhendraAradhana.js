import React from 'react';
import styles from './SiddhendraAradhana.module.css';

const eventImages = [
  '/images/siddhendra/sid1.jpeg',
  '/images/siddhendra/sid2.jpeg',
  '/images/siddhendra/sid3.jpeg',
  '/images/siddhendra/sid4.jpeg',
  '/images/siddhendra/sid5.jpeg',
  '/images/siddhendra/sid6.jpeg',
  '/images/siddhendra/sid7.jpeg',
  '/images/siddhendra/sid8.jpeg',
  '/images/siddhendra/sid9.jpg',
  '/images/siddhendra/sid10.jpg',
  '/images/siddhendra/sid11.jpg',
  '/images/siddhendra/sid12.jpg',
  '/images/siddhendra/sid13.jpg',
];

const SiddhendraAradhana = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="/images/siddhendra/siddhendra.jpeg" alt="Siddhendra" className={styles.mainImage} />
      </div>
      <h1 className={styles.header}>THE HISTORY</h1>
      <p className={styles.description}>
      Siddhendra Yogi is revered as the father of modern Kuchipudi. According to legend, he wrote a dance-drama called the Parijatapaharana (stealing of the Parijata flower), but had trouble finding performers to create the vision he had in his mind. Finally he went to the village of Kuchelapuram, where he enlisted a group of Brahmin boys to perform his play. He asked of the group that this play be performed annually, and they agreed. This is said to be the foundation of the present-day Kuchipudi. 
      </p>
      <h2 className={styles.subHeader}>THE EVENT</h2>
      <p className={styles.description}>
      Conceptualized as an annual event, this will be the first ever edition of the Siddhendra Aradhana. Due to the current pandemic situation, this event will be completely virtual and will feature dancers and dance-gurus from both USA and India. The event will comprise of performances, lecture demonstrations and debates. 
      </p>
      <div className={styles.eventImages}>
        {eventImages.map((image, index) => (
          <img key={index} src={image} alt={`Event ${index + 1}`} className={styles.eventImage} />
        ))}
      </div>
    </div>
  );
};

export default SiddhendraAradhana;
