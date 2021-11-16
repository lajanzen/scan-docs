import React from 'react';
import AddDocumentLink from '../../components/AddDocumentLink/AddDocumentLink';
import DocPreview from '../../components/DocPreview/DocPreview';
import SearchBar from '../../components/SearchInput/SearchBar';
import useDocuments from '../../utils/useDocuments';
import styles from './Documents.module.css';

export default function Documents(): JSX.Element {
  const documents = useDocuments();

  return (
    <section className={styles.container}>
      <h1 className={styles.h1}>Your Docs</h1>
      <SearchBar />
      <div className={styles.documents}>
        {documents?.map((document) => (
          <DocPreview
            key={document.id}
            title={document.title}
            text={document.text}
          />
        ))}
        <div className={styles.link}>
          <AddDocumentLink />
        </div>
      </div>
    </section>
  );
}
