import React, { useState } from 'react';
import ImageInput from '../components/ImageInput/ImageInput';
import styles from './Home.module.css';

export default function Home(): JSX.Element {
  const [imgURL, setImgURL] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src="https://i.ibb.co/cyPZp4J/Notebloc-PDF-Scanner-App-Scan-save-share-logo-removebg-preview.png"
        alt="scan-logo"
      />
      <p>Turn any document into PDF</p>
      <button disabled={imgURL !== null}>Scan</button>
      <ImageInput onImageUpload={setImgURL} />
    </div>
  );
}
