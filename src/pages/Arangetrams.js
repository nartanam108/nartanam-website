import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import styles from './Arangetrams.module.css';

const dancers = [
  { name: 'Diya Nuka', thumbnail: '/images/diya.png', brochure: '/pdfs/diya.pdf', id: 'diya' },
  { name: 'Hamsika Totapally', thumbnail: '/images/hamsika.png', brochure: '/pdfs/hamsika.pdf', id: 'hamsika' },
  { name: 'Mrunmayi Warade', thumbnail: '/images/mrunmayi.jpeg', brochure: '/pdfs/mrunmayi.pdf', id: 'mrunmayi' },
  { name: 'Ashritha Kota', thumbnail: '/images/ashi1.jpeg', brochure: '/pdfs/ashi.pdf', id: 'ashi' },
  { name: 'Ananya Kompella', thumbnail: '/images/ananya.png', brochure: '/pdfs/ananya.pdf', id: 'ananya' },
];

const Arangetrams = () => {
  const { id } = useParams();
  const dancer = dancers.find(d => d.id === id);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className={styles.container}>
      {dancer ? (
        <div className={styles.brochure}>
          <Link to="/arangetrams" className={styles.backButton}>Back to Gallery</Link>
          <div className={styles.pdfContainer}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
              <Viewer fileUrl={dancer.brochure} plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          </div>
        </div>
      ) : (
        <div className={styles.gallery}>
          {dancers.map((dancer) => (
            <div key={dancer.id} className={styles.dancer}>
              <img src={dancer.thumbnail} alt={dancer.name} className={styles.thumbnail} />
              <Link to={`/arangetrams/${dancer.id}`} className={styles.dancerLink}>{dancer.name}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Arangetrams;
