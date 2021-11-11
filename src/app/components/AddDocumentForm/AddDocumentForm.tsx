import React, { useState } from 'react';
import styles from './AddDocumentForm.module.css';

type AddDocumentFormProps = {
  text: string;
};

export default function AddDocumentForm({
  text,
}: AddDocumentFormProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const document = {
      title,
      text,
    };
    setIsLoading(true);
    await fetch('https://json-server.machens.dev/docs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(document),
    });
    setIsLoading(false);
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
