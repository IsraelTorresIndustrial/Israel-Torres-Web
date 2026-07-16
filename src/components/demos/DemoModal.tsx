import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Info } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  role: string;
  children: React.ReactNode;
}

export function DemoModal({ isOpen, onClose, title, role, children }: DemoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-night/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-white w-full max-w-6xl max-h-[90vh] md:h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="flex-shrink-0 flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 md:px-8 md:py-6 border-b border-gray-100 bg-gray-50/50">
              <div>
                <h3 id="modal-title" className="text-xl md:text-2xl font-display font-bold text-night mb-1.5">
                  {title}
                </h3>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono font-medium text-exec bg-exec/10 px-2 py-0.5 rounded-md">
                    Rol: {role}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                    <Info className="w-3.5 h-3.5" />
                    <span>Prototipo ilustrativo · Datos simulados</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:static md:top-auto md:right-auto p-2 text-gray-400 hover:text-night hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-exec"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-50/30">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
