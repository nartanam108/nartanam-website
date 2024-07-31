import React from 'react';
import styles from './Details.module.css';
import dividerImage1 from '../images/whatsapp-image-2020-09-11-at-8-40-41-pm.jpeg'; // Adjust the path to your image
import dividerImage2 from '../images/nat_plt2e9.jpg'; // Adjust the path to your image
import teacherImage from '../images/sudhaheadshot.jpg'; // Adjust the path to your teacher's image

const Details = () => {
  return (
    <div>
      <h1 className={styles.header}>NARTANAM DANCE ACADEMY</h1>
      
      <div className={styles.teacherInfo}>
        <img src={teacherImage} alt="Dance Teacher" className={styles.teacherImage} />
        <p className={styles.description}>
        The founder and creative director of Nartanam Dance Academy is Sudha Kiranmayi Totapally.  She started her training in dance at the tender age of 4 years. She first learnt Kuchipudi under the able guidance of Vidushi Madhu Narmala, and Bharatnatyam from Badampudi Lakshmi. She went on to study the finer nuances of this glorious dance under the tutelage of Dr. Jonnalagadda Anuradha, Padmashri Dr. Vampati Chinnasatyam. She has also trained under renowned gurus like Vedantam Ramalinga Sastry, Dr. Nataraja Rama Krishna, Kalanidhimami and Sri Kalakrishna. She has earned her Masters in Performing Arts and Communication, with a major in Kuchipudi.

Sudha has choreographed several dance dramas like Mohini Bhasmasura, Ganesha Vijayam, Parvathi Kalyanam, to name a few, in both India and the USA.</p>
      </div>

      <h2 className={styles.title}>Dances</h2>
      
      <img src={dividerImage1} alt="divider" className={styles.divider} />
      <div>
        <h2 className={styles.danceStyle}>Bharatanatyam</h2>
        <p className={styles.description}>
        Sudha teaches the Kalakshetra style of Bharatanatyam. Bharatanatyam is known as the oldest classical dance form in India. Everyone familiar with the dance form recognizes Nayta Shastra as the basis and foundation of this beautiful dance form that is characterized by its distinct aramandi posture and fixed upper torso, combined with spectacular footwork and an intricate vocabulary of mudras, asamyuta and asamyuta hastas. All of this is enhanced by a range of emotions portrayed by the dancer. After a period of relative inactivity due to the bans by the British Empire, newer styles of Bharatanaytam emerged. Smt. Sudha is trained under, and teaches the Kalakshetra form of Bharatanatyam, which was pioneered by Smt. Rukmini Devi Arundale in the early 20th century.
        </p>
        <img src={dividerImage1} alt="divider" className={styles.divider} />
      </div>

      <div>
        <h2 className={styles.danceStyle}>Kuchipudi</h2>
        <p className={styles.description}>
        Kuchipudi is the art of storytelling through grace and movement. It also has its roots in the Natyashastra, written by Bharata Muni. It is believed that the dance form was modernized and formalized by Tirtha Narayanayati and his disciple, Siddhendra Yogi. Kuchipudi also follows the three categories of  Nritta  (pure, technical dance), Nritya (expressive dance) and Natya (dance-drama, or story-telling). The fluid, graceful motions of this dance, combined with very intricate footwork have made Kuchipudi very popular world-wide.
        </p>
        </div>
        <h2 className={styles.title}>Vision</h2>
      
      <img src={dividerImage2} alt="divider" className={styles.divider} />
      <div>
        <h2 className={styles.danceStyle}>The Focus</h2>
        <p className={styles.description}>
        Nartanam has a heavy emphasis on Abhinaya as one of its distinct features. Aaharaya Abhinaya (basics of make-up) and Vachaka Abhinaya (influence of Music, Talam and rhythmic timing) are some of the areas that Nartanam Students are encouraged to develop. Sudha takes special care to preserve the age old tradition of Guru-Shishya Parampara via Nartanam.  </p>
        <img src={dividerImage2} alt="divider" className={styles.divider} />
      </div>

      <div>
        <h2 className={styles.danceStyle}>The Future</h2>
        <p className={styles.description}>
        Through a demonstrated love of these beautiful art forms, Sudha hopes to evolve young students into mature, graceful dancers; learning discipline, focus and balance along the way. Sudha and the Nartanam Academy are affiliated to the Silicon Andhra Performing Arts and Dance Academy, and will train the students for various levels of exams and certifications along the way. Bharatanatyam or Kuchipudi may also be used to earn extra credits at high school, and are a beautiful way of rounding out a student's resume. Learning an art form teaches the student the art of balancing various commitments, and staying focussed to achieve their goals in life.        </p>
        </div>


    </div>
  );
};

export default Details;
