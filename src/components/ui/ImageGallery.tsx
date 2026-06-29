import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  columns?: number;
}

export function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Dynamic columns for tailwind requires safely mapping or standardizing
  // Since we use 3 columns mostly, we'll use responsive classes directly based on length.
  
  return (
    <>
      <div className={`grid grid-cols-2 md:grid-cols-${columns} gap-4`}>
        {images.map((src, i) => (
          <motion.div 
            key={i} 
            className="aspect-square bg-noche/10 overflow-hidden cursor-pointer relative group"
            onClick={() => setSelectedImage(src)}
          >
            <img src={src} alt="Gallery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-noche/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <ZoomIn size={24} className="text-white" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-noche/95 p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-6xl max-h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <button 
                className="absolute -top-12 right-0 md:top-4 md:right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <img 
                src={selectedImage} 
                alt="Fullscreen" 
                className="max-w-full max-h-[85vh] object-contain shadow-2xl" 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
