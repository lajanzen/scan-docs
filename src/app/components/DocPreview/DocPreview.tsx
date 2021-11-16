import React from 'react';
import styles from './DocPreview.module.css';

export type DocPreviewProps = {
  id?: number;
  title: string;
  text: string;
};

export default function DocPreview({
  title,
  text,
}: DocPreviewProps): JSX.Element {
  return (
    <article className={styles.container}>
      <a className={styles.link} href="#">
        {title}
      </a>
      <p className={styles.text}>{text}</p>
    </article>
  );
}
