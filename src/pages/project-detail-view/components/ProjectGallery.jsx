import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ProjectGallery = ({ gallery }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % gallery.length 
      : (currentIndex - 1 + gallery.length) % gallery.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(gallery[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      navigateImage('prev');
    } else if (e.key === 'ArrowRight') {
      navigateImage('next');
    }
  };

  React.useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, currentIndex]);

  if (!gallery || gallery.length === 0) {
    return null;
  }

  return (
    <section>
      <h3 className="text-fluid-xl font-bold text-primary mb-6 flex items-center space-x-3">
        <Icon name="Images" size={24} className="text-accent" strokeWidth={2} />
        <span>Project Gallery</span>
      </h3>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {gallery.map((item, index) => (
          <div
            key={item.id}
            className="group relative bg-surface rounded-xl overflow-hidden cursor-pointer hover:shadow-medium nav-transition"
            onClick={() => openLightbox(item, index)}
          >
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 nav-transition"
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 nav-transition flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 nav-transition">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                  <Icon name="ZoomIn" size={20} className="text-primary" strokeWidth={2} />
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="p-4">
              <p className="text-sm text-text-secondary leading-relaxed">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center nav-transition"
              aria-label="Close lightbox"
            >
              <Icon name="X" size={20} color="white" strokeWidth={2} />
            </button>

            {/* Navigation Buttons */}
            {gallery.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center nav-transition"
                  aria-label="Previous image"
                >
                  <Icon name="ChevronLeft" size={24} color="white" strokeWidth={2} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center nav-transition"
                  aria-label="Next image"
                >
                  <Icon name="ChevronRight" size={24} color="white" strokeWidth={2} />
                </button>
              </>
            )}

            {/* Image */}
            <div 
              className="relative bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Caption */}
              <div className="p-6 bg-white">
                <p className="text-text-primary text-center">{selectedImage.caption}</p>
                {gallery.length > 1 && (
                  <p className="text-text-secondary text-sm text-center mt-2">
                    {currentIndex + 1} of {gallery.length}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;