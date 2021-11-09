import React from 'react';

export default function Styleguide(): JSX.Element {
  return (
    <div>
      <h2>Colors</h2>
      <div
        style={{
          display: 'flex',
          gap: 10,
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            background: 'var(--color-primary)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            width: 30,
            height: 30,
            background: 'var(--color-secondary)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            width: 30,
            height: 30,
            background: 'var(--color-text)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            width: 30,
            height: 30,
            background: 'var(--color-tercary)',
            borderRadius: '50%',
          }}
        />
      </div>
      <div style={{ color: 'var(--color-primary)' }}>
        <h1>Headline 1</h1>
        <h2>Headline 2</h2>
        <h3>Headline 3</h3>
        <h4>Headline 4</h4>
        <h5>Headline 5</h5>
      </div>
      <p style={{ color: 'var(--color-text)' }}>Paragraph</p>
    </div>
  );
}
