import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import styles from './Arangetrams.module.css';

const dancers = [
  { name: 'Diya Nuka', thumbnail: '/images/diya.png', brochure: '/pdfs/diya.pdf' },
  { name: 'Hamsika Totapally', thumbnail: '/images/hamsika.png', brochure: '/pdfs/hamsika.pdf' },
  { name: 'Mrunmayi Warade', thumbnail: '/images/mrunmayi.jpeg', brochure: '/pdfs/mrunmayi.pdf' },
];

const Arangetrams = () => {
  const [selectedDancer, setSelectedDancer] = useState(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const selectDancer = (dancer) => {
    setSelectedDancer(dancer);
  };

  return (
    <div className={styles.container}>
      {selectedDancer ? (
        <div className={styles.brochure}>
          <button onClick={() => setSelectedDancer(null)} className={styles.backButton}>Back to Gallery</button>
          <div className={styles.pdfContainer}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
              <Viewer fileUrl={selectedDancer.brochure} plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          </div>
        </div>
      ) : (
        <div className={styles.gallery}>
          {dancers.map((dancer, index) => (
            <div key={index} className={styles.dancer}>
              <img src={dancer.thumbnail} alt={dancer.name} className={styles.thumbnail} />
              <a href="#!" onClick={() => selectDancer(dancer)} className={styles.dancerLink}>{dancer.name}</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Arangetrams;
