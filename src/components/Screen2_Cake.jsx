import React, { useState, useEffect } from 'react';

const Screen2_Cake = ({ onNext, onPrev }) => {
  const [blownCandles, setBlownCandles] = useState(new Set());
  const [showCut, setShowCut] = useState(false);

  const candles = [0, 1, 2, 3, 4];

  const handleCandleClick = (index) => {
    const newBlown = new Set(blownCandles);
    if (newBlown.has(index)) {
      newBlown.delete(index);
    } else {
      newBlown.add(index);
    }
    setBlownCandles(newBlown);
  };

  const allCandlesBlown = blownCandles.size === candles.length;

  // Auto-cut when all candles are blown
  useEffect(() => {
    if (allCandlesBlown && !showCut) {
      setTimeout(() => setShowCut(true), 800);
    }
  }, [allCandlesBlown, showCut]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative px-4 py-6">
      <div className="mb-4 animate-fade-in-down">
        <h2 className="text-3xl font-bold text-white text-center"
            style={{
              textShadow: '0 4px 15px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
          Blow Out The Candles! 🕯️
        </h2>
      </div>

      {/* Instructions */}
      <p className="text-sm text-[#dd1616] mb-6 text-center"
         style={{
           textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
         }}>
        {allCandlesBlown ? '✨ All candles out! Get ready...' : 'Click on each candle to blow them out'}
      </p>

      {/* Cake Container */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div
          className={`relative transition-transform duration-300 ${
            allCandlesBlown && !showCut ? 'hover:scale-105' : ''
          } ${showCut ? 'animate-cake-glow' : ''}`}
        >
          {/* Candles Container */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 z-20"
               style={{ marginTop: '-60px' }}>
            {candles.map((index) => (
              <div
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCandleClick(index);
                }}
                className="relative cursor-pointer hover:scale-110 transform transition-transform"
              >
                {/* Candle */}
                <div className="w-6 h-12 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 rounded-full shadow-lg"
                     style={{
                       boxShadow: '0 4px 10px rgba(255, 200, 0, 0.5)'
                     }} />
                
                {/* Flame */}
                {!blownCandles.has(index) && (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2"
                    style={{ filter: 'drop-shadow(0 0 12px rgba(255, 150, 0, 0.8))' }}
                  >
                    <path
                      d="M16 2C16 2 12 8 12 12C12 15.3 13.8 18 16 18C18.2 18 20 15.3 20 12C20 8 16 2 16 2Z"
                      fill="#FF6B00"
                      className="animate-flame"
                    />
                    <path
                      d="M16 4C16 4 13 9 13 12C13 14.7 14.3 17 16 17C17.7 17 19 14.7 19 12C19 9 16 4 16 4Z"
                      fill="#FFB000"
                      className="animate-flame"
                      style={{ animationDelay: '0.1s' }}
                    />
                    <path
                      d="M16 6C16 6 14 10 14 12C14 13.7 15 16 16 16C17 16 18 13.7 18 12C18 10 16 6 16 6Z"
                      fill="#FFEB3B"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* Beautiful SVG Cake */}
          <svg width="100%" height="auto" viewBox="0 0 500 400" className="drop-shadow-2xl max-w-sm">
            {/* Cake Board/Plate */}
            <ellipse cx="250" cy="350" rx="200" ry="50" fill="#E8D5B7" opacity="0.9" />
            <ellipse cx="250" cy="345" rx="200" ry="45" fill="#F5E6D3" opacity="0.8" />

            {/* Bottom Layer */}
            <g>
              <rect x="100" y="200" width="300" height="120" rx="15" fill="#8B6F47" />
              <rect x="100" y="200" width="300" height="100" rx="15" fill="#A0826D" />
              
              {/* Frosting swirls */}
              <path d="M 120 220 Q 150 210 180 220 T 240 220 T 300 220 T 360 220 T 420 220" 
                    stroke="#F4A460" strokeWidth="3" fill="none" opacity="0.7" />
            </g>

            {/* Middle Layer */}
            <g>
              <rect x="130" y="140" width="240" height="80" rx="12" fill="#9B7653" />
              <rect x="130" y="140" width="240" height="70" rx="12" fill="#B89968" />
              
              {/* Frosting dots */}
              <circle cx="160" cy="165" r="5" fill="#FF69B4" opacity="0.8" />
              <circle cx="200" cy="160" r="5" fill="#FF1493" opacity="0.8" />
              <circle cx="250" cy="155" r="5" fill="#FF69B4" opacity="0.8" />
              <circle cx="300" cy="160" r="5" fill="#FF1493" opacity="0.8" />
              <circle cx="340" cy="165" r="5" fill="#FF69B4" opacity="0.8" />
            </g>

            {/* Top Layer */}
            <g>
              <rect x="160" y="90" width="180" height="65" rx="10" fill="#8B7355" />
              <rect x="160" y="90" width="180" height="55" rx="10" fill="#A38D76" />
              
              {/* Pink frosting on top */}
              <ellipse cx="250" cy="85" rx="95" ry="20" fill="#FFB6D9" opacity="0.6" />
            </g>

            {/* Decorative candle holders (small circles) */}
            {[0, 1, 2, 3, 4].map((i) => (
              <circle
                key={`holder-${i}`}
                cx={100 + (i * 100)}
                cy="70"
                r="8"
                fill="#DEB887"
                opacity="0.5"
              />
            ))}

            {/* Sparkle effects */}
            <circle cx="200" cy="50" r="3" fill="#FFD700" opacity="0.6" />
            <circle cx="300" cy="80" r="3" fill="#FFD700" opacity="0.6" />
            <circle cx="250" cy="120" r="2" fill="#FFF" opacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Cut Animation */}
      {showCut && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl animate-bounce-soft">
          🎉
        </div>
      )}

      {/* Celebration Message */}
      {showCut && (
        <div className="mt-4 animate-fade-in-up text-center">
          <p className="text-xl font-bold text-white"
             style={{
               textShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
             }}>
            Make a wish! 🌟
          </p>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="fixed bottom-6 left-4 right-4 flex justify-between gap-2 z-50">
        <button
          onClick={onPrev}
          className="px-4 py-2 text-xs bg-white bg-opacity-30 text-[#e32c2c] font-bold rounded-full hover:bg-opacity-50 transition hover:scale-110 active:scale-95 transform duration-300 whitespace-nowrap"
        >
          ← Back
        </button>

        {allCandlesBlown && showCut && (
          <button
            onClick={onNext}
            className="px-4 py-2 text-xs bg-white text-rose-dark font-bold rounded-full hover:shadow-lg transition hover:scale-110 active:scale-95 transform duration-300 whitespace-nowrap animate-fade-in"
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
};

export default Screen2_Cake;
