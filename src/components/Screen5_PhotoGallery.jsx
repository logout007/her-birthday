import React, { useState, useEffect } from 'react';

const Screen5_PhotoGallery = ({ onNext, onPrev }) => {
  const photoCount = 12;
  const photos = Array.from({ length: photoCount }, (_, i) => ({
    id: i,
    src: `/photos/photo${i + 1}.jpg`,
  }));

  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoRotating, photos.length]);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
    setIsAutoRotating(false);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
    setIsAutoRotating(false);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 relative">
      <div className="mb-4 animate-fade-in-down">
        <h2 className="text-3xl font-bold text-[#dd1616] text-center"
            style={{
              textShadow: '0 4px 15px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
          Our Memories 📸
        </h2>
      </div>

      {/* Photo Carousel */}
      <div className="relative w-full max-w-sm aspect-video mb-6 overflow-hidden rounded-2xl shadow-2xl animate-fade-in bg-black"
           style={{ animationDelay: '0.3s' }}>
        <img
          key={currentPhoto}
          src={photos[currentPhoto].src}
          alt={`Memory ${currentPhoto + 1}`}
          className="w-full h-full object-contain animate-carousel-slide"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/600x400?text=Photo+' + (currentPhoto + 1);
          }}
        />
        
        {/* Polaroid effect border */}
        <div className="absolute inset-0 pointer-events-none border-4 border-white border-opacity-10"></div>

        {/* Photo Counter */}
        <div className="absolute bottom-3 right-3 bg-white bg-opacity-30 px-3 py-2 rounded-full text-white font-bold text-xs backdrop-blur-sm">
          {currentPhoto + 1} / {photos.length}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mb-6">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentPhoto(index);
              setIsAutoRotating(false);
            }}
            className={`rounded-full transition-all duration-300 hover:scale-125 active:scale-95 transform ${
              index === currentPhoto
                ? 'bg-white w-8 h-3'
                : 'bg-white bg-opacity-50 w-2 h-2 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Carousel Controls */}
      <div className="flex gap-2 mb-4 flex-wrap justify-center">
        <button
          onClick={prevPhoto}
          className="px-4 py-2 text-xs bg-white bg-opacity-30 text-[#e32c2c] font-bold rounded-full hover:bg-opacity-50 backdrop-blur-sm transition hover:scale-110 active:scale-95 transform duration-300 whitespace-nowrap"
        >
          ← Prev
        </button>
        <button
          onClick={nextPhoto}
          className="px-4 py-2 text-xs bg-white bg-opacity-30 text-[#e32c2c] font-bold rounded-full hover:bg-opacity-50 backdrop-blur-sm transition hover:scale-110 active:scale-95 transform duration-300 whitespace-nowrap"
        >
          Next →
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-6 left-4 right-4 flex justify-between gap-2 z-50">
        <button
          onClick={onPrev}
          className="px-4 py-2 text-xs bg-white bg-opacity-30 text-[#e32c2c] font-bold rounded-full hover:bg-opacity-50 transition hover:scale-110 active:scale-95 transform duration-300 whitespace-nowrap"
        >
          ← Back
        </button>

        <button
          onClick={onNext}
          className="px-4 py-2 text-xs bg-white text-rose-dark font-bold rounded-full hover:shadow-lg transition hover:scale-110 active:scale-95 transform duration-300 whitespace-nowrap"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default Screen5_PhotoGallery;
