
import { useState } from 'react';

interface UseFileUploadReturn {
  imageUrl: string | null;
  isUploading: boolean;
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clearImage: () => void;
}

export function useFileUpload(): UseFileUploadReturn {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    
    // Create a file reader to read the file as a data URL
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageUrl(e.target?.result as string);
      setIsUploading(false);
    };
    
    reader.onerror = () => {
      console.error('Error reading file');
      setIsUploading(false);
    };
    
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setImageUrl(null);
  };

  return {
    imageUrl,
    isUploading,
    handleFileUpload,
    clearImage
  };
}
