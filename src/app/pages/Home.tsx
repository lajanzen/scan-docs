import React, { useState } from 'react';
import ImageInput from '../components/ImageInput/ImageInput';
import styles from './Home.module.css';
import { recognizeText } from '../utils/ocr';

export default function Home(): JSX.Element {
  const [imgURL, setImgURL] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src="https://i.ibb.co/cyPZp4J/Notebloc-PDF-Scanner-App-Scan-save-share-logo-removebg-preview.png"
        alt="scan-logo"
      />
      <p>{imgURL ? 'Image has been uploaded' : 'Turn any document into PDF'}</p>
      <button
        disabled={imgURL === null}
        onClick={() => {
          if (imgURL) {
            recognizeText(imgURL, ({ progress, status }) => {
              console.log(progress, status);
            }).then(setRecognizedText);
          }
        }}
      >
        Scan
      </button>
      {recognizedText ? (
        <p>{recognizedText}</p>
      ) : (
        <ImageInput onImageUpload={setImgURL} />
      )}
    </div>
  );
}
