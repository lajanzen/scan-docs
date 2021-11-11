import { useState } from 'react';
import { RecognizeProgress, recognizeText } from './ocr';

export default function useRecognizeText(imgURL: string | null) {
  const [text, setText] = useState<string | null>(null);
  const [progress, setProgress] = useState<RecognizeProgress | null>(null);

  const recognize = () => {
    if (imgURL) {
      recognizeText(imgURL, setProgress).then(setText);
    }
  };

  return { text, progress, recognize };
}
