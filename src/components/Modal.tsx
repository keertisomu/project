import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative bg-[#f5f0e0] dark:bg-slate-900 rounded-xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden border-2 border-purple-400 dark:border-purple-600"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#6867b5] text-white px-6 py-4 flex items-center justify-between border-b border-purple-700">
          <h3 className="text-xl font-bold">{title}</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-purple-700 rounded-lg transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-80px)]">
          <ul className="text-slate-800 dark:text-slate-200 space-y-3 leading-relaxed list-disc list-inside">
            {content.split('\n\n').filter(item => item.trim()).map((item, index) => (
              <li key={index} className="ml-2">{item.trim()}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
