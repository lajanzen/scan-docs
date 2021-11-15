import { useEffect, useState } from 'react';
import { DocPreviewProps } from '../components/DocPreview/DocPreview';

export default function useDocuments() {
  const [documents, setDocuments] = useState<DocPreviewProps[]>([]);

  useEffect(() => {
    async function fetchDocuments() {
      const response = await fetch('https://json-server.machens.dev/docs');
      console.log(response);
      const newDocuments = await response.json();
      setDocuments(newDocuments);
    }

    fetchDocuments();
  }, []);

  return documents;
}
