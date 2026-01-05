import React, { useEffect, useState } from 'react';

const Screen3_Poem = ({ onNext, onPrev }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  // Shortened to 2 stanzas
  const poem = `From whispers soft to laughter bright,
You bloomed into pure light,
Once shy, now jolly, vibrant, free,
The person you're meant to be.

With caring heart and beauty rare,
You fill the world with joy and care,
On this day we celebrate
The wonderful soul you create.

Happy Birthday, Penguuu 💕`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= poem.length) {
        setDisplayedText(poem.substring(0, index));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 relative overflow-y-auto scrollbar-hide">
      <div className="mb-4 animate-fade-in-down">
        <h2 className="text-3xl font-bold text-[#dd1616] text-center"
            style={{
              textShadow: '0 4px 15px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
          A Love Letter 💌
        </h2>
      </div>

      <div className="w-full max-w-2xl bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-30 shadow-2xl animate-fade-in mb-8"
           style={{ animationDelay: '0.3s' }}>
        <p className="text-base leading-relaxed font-light whitespace-pre-wrap text-[#e32c2c]"
           style={{
             textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
           }}>
          {displayedText}
          {!isComplete && <span className="animate-pulse">|</span>}
        </p>
      </div>

      {/* Navigation - Fixed at bottom with padding */}
      {isComplete && (
        <div className="fixed bottom-6 left-4 right-4 flex justify-between gap-2 z-50 flex-shrink-0">
          <button
            onClick={onPrev}
            className="px-4 py-2 text-xs bg-white bg-opacity-30 text-[#e32c2c] font-bold rounded-full hover:bg-opacity-50 transition hover:scale-110 active:scale-95 transform duration-300 whitespace-nowrap"
          >
            ← Back
          </button>

          <button
            onClick={onNext}
            className="px-4 py-2 text-xs bg-white text-rose-dark font-bold rounded-full hover:shadow-lg transition hover:scale-110 active:scale-95 transform duration-300 whitespace-nowrap animate-fade-in"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
};

export default Screen3_Poem;
