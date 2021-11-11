import React, { useState } from 'react';
import usePostDocument from '../../utils/usePostDocument';
import styles from './AddDocumentForm.module.css';

type AddDocumentFormProps = {
  text: string;
};

export default function AddDocumentForm({
  text,
}: AddDocumentFormProps): JSX.Element {
  const [title, setTitle] = useState('');
  const { isLoading, postDocument } = usePostDocument();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const document = {
      title,
      text,
    };
    await postDocument(document);
    setTitle('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter document title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className={styles.button}
        type="submit"
        value="Text speichern"
        disabled={!title || isLoading}
      />
    </form>
  );
}
