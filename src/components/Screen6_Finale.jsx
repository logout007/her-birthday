import React from 'react';
import Confetti from './Confetti';

const Screen6_Finale = ({ onPrev }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      <Confetti />

      <div className="text-center z-10 max-w-2xl space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in">
        {/* Main Message */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#dd1616]"
            style={{
              textShadow: '0 6px 20px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
          You've Reached The End! 🎊
        </h2>

        {/* Decorative Emojis */}
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 my-4 sm:my-6 md:my-8 text-4xl sm:text-5xl md:text-6xl"
             style={{ animationDelay: '0.6s' }}>
          <span className="animate-spin-slow">🎈</span>
          <span className="animate-float">✨</span>
          <span className="animate-spin-slow" style={{ animationDirection: 'reverse' }}>
            🎈
          </span>
        </div>

        {/* Sweet Thank You Message */}
        <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-white border-opacity-30 shadow-xl animate-fade-in-up"
             style={{ animationDelay: '0.9s' }}>
          <p className="text-lg sm:text-xl md:text-2xl text-[#e32c2c] leading-relaxed font-light"
             style={{
               textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
             }}>
            Dear Penguuu,
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#e32c2c] leading-relaxed font-light mt-3 sm:mt-4"
             style={{
               textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
             }}>
            Having you in our life is like a constant gift that keeps giving. Your quiet strength has transformed into the most radiant joy, and we're blessed to witness your incredible journey every single day. You make our world brighter, warmer, and infinitely more meaningful with your presence.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-light mt-3 sm:mt-4"
             style={{
               textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
             }}>
            Thank you for being you. 💕
          </p>
        </div>

        {/* Final celebration message */}
        <p className="text-xl sm:text-2xl md:text-3xl text-white font-bold mt-6 sm:mt-8"
           style={{
             textShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
           }}>
          Wishing you endless happiness! 🌟
        </p>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-4 sm:bottom-8 left-4">
        <button
          onClick={onPrev}
          className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-base bg-white bg-opacity-30 text-[#e32c2c] font-bold rounded-full hover:bg-opacity-50 transition hover:scale-110 active:scale-95 transform duration-300 whitespace-nowrap"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default Screen6_Finale;
