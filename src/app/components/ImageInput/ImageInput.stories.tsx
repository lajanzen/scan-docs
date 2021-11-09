import React from 'react';
import ImageInput from './ImageInput';

export default {
  component: ImageInput,
  title: 'Components/ImageInput',
};

export const Default = (): JSX.Element => (
  <ImageInput onImageUpload={console.log} />
);
