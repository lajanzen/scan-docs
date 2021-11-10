import React, { useState } from 'react';
import ImageInput from '../components/ImageInput/ImageInput';
import styles from './Home.module.css';
import Tesseract from 'tesseract.js';

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
            Tesseract.recognize(imgURL, 'eng', {
              logger: (message) => console.log(message.progress),
            }).then((result) => {
              const text = result.data.text;
              setRecognizedText(text);
            });
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
