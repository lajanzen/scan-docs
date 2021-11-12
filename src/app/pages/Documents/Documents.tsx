import React, { useEffect, useState } from 'react';
import DocPreview, {
  DocPreviewProps,
} from '../../components/DocPreview/DocPreview';
import styles from './Documents.module.css';

export default function Documents(): JSX.Element {
  const [documents, setDocuments] = useState<DocPreviewProps[]>([]);

  useEffect(() => {
    async function fetchDocuments() {
      const response = await fetch('https://json-server.machens.dev/docs');
      console.log(response);
      const newDocuments = await response.json();
      setDocuments(newDocuments);
    }

    fetchDocuments();
  }, []);

  console.log(documents);

  return (
    <section className={styles.container}>
      <h1 className={styles.h1}>Your Docs</h1>
      <div className={styles.documents}>
        {documents.map((document) => (
          <DocPreview
            key={document.id}
            title={document.title}
            text={document.text}
          />
        ))}
      </div>
    </section>
  );
}
