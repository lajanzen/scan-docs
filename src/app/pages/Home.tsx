import React, { useState } from 'react';
import ImageInput from '../components/ImageInput/ImageInput';
import styles from './Home.module.css';
import { RecognizeProgress, recognizeText } from '../utils/ocr';
import Progress from '../components/Progress/Progress';
import AddDocumentForm from '../components/AddDocumentForm/AddDocumentForm';

export default function Home(): JSX.Element {
  const [imgURL, setImgURL] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);
  const [recognizeProgress, setRecognizeProgress] =
    useState<RecognizeProgress | null>(null);

  let content;

  if (!recognizedText && recognizeProgress) {
    console.log(recognizeProgress);
    content = (
      <Progress
        progress={recognizeProgress.progress * 100}
        status={recognizeProgress.status}
      />
    );
  } else if (!recognizedText && imgURL) {
    content = (
      <>
        <p>Image has been uploaded</p>
        <button
          onClick={() => {
            if (imgURL) {
              recognizeText(imgURL, setRecognizeProgress).then(
                setRecognizedText
              );
            }
          }}
        >
          Convert
        </button>
      </>
    );
  } else if (!imgURL) {
    content = <button>Scan</button>;
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src="https://i.ibb.co/cyPZp4J/Notebloc-PDF-Scanner-App-Scan-save-share-logo-removebg-preview.png"
        alt="scan-logo"
      />
      {!imgURL && <p>Turn any document into PDF</p>}

      {content}

      {recognizedText ? (
        <>
          <AddDocumentForm text={recognizedText} />
          <p>{recognizedText}</p>
        </>
      ) : (
        <ImageInput onImageUpload={setImgURL} />
      )}
    </div>
  );
}
