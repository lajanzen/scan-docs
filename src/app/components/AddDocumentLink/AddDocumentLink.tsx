import React from 'react';
import { Link } from 'react-router-dom';

export default function AddDocumentLink(): JSX.Element {
  return (
    <Link to="/">
      <img src="src/app/assets/plus.svg" />
    </Link>
  );
}
