'use client';

import React, { useCallback } from 'react';
import { DocumentProcessorProps } from './DocumentProcessor.types';

export const DocumentProcessor: React.FC<DocumentProcessorProps> = ({ onUpload, isUploading }) => {
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (onUpload && e.dataTransfer.files.length > 0) {
      onUpload(Array.from(e.dataTransfer.files));
    }
  }, [onUpload]);

  return (
    <div className="p-8 border-2 border-dashed border-[var(--color-border)] rounded-xl flex flex-col items-center justify-center min-h-[300px] bg-[var(--color-surface-variant)]">
      <div 
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="text-center cursor-pointer"
      >
        <p className="text-lg font-medium text-[var(--color-text-primary)] mb-2">
          {isUploading ? 'Uploading...' : 'Drag & Drop BRDs here'}
        </p>
        <p className="text-sm text-[var(--color-text-secondary)]">or click to browse files</p>
      </div>
    </div>
  );
};
