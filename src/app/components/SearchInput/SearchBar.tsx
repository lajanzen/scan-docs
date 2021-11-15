import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <form className={styles.search}>
      <input className={styles.input} type="text" placeholder="Search docs" />
      <input className={styles.submit} type="submit" value="Go" />
    </form>
  );
}
