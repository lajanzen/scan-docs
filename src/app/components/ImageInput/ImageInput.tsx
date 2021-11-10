import React, { ChangeEvent, useState } from 'react';
import styles from './ImageInput.module.css';

type ImageInputProps = {
  onImageUpload: (url: string) => void;
};

export default function ImageInput({ onImageUpload }: ImageInputProps) {
  const [imgURL, setImgURL] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    const newImgURL = URL.createObjectURL(file);
    setImgURL(newImgURL);
    onImageUpload(newImgURL);
  };

  return (
    <label className={styles.fileUpload}>
      <input
        className={styles.input}
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
      />
      {!imgURL && 'Or upload an image'}
    </label>
  );
}
