import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Home.module.css';
import Progress from '../../components/Progress/Progress';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';
import useRecognizeText from '../../utils/useRecognizeText';

export default function Home(): JSX.Element {
  const [imgURL, setImgURL] = useState<string | null>(null);
  const { text, progress, recognize } = useRecognizeText(imgURL);

  let content;

  if (!text && progress) {
    content = (
      <Progress progress={progress.progress * 100} status={progress.status} />
    );
  } else if (!text && imgURL) {
    content = (
      <>
        <p>Image has been uploaded</p>
        <button
          onClick={() => {
            if (imgURL) {
              recognize();
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

      {text ? (
        <>
          <AddDocumentForm text={text} />
          <p className={styles.text}>{text}</p>
        </>
      ) : (
        <ImageInput onImageUpload={setImgURL} />
      )}
    </div>
  );
}
