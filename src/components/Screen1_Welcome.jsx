import React from 'react';
import Confetti from './Confetti';

const Screen1_Welcome = ({ onNext }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden px-4">
      <Confetti />
      
      <div className="text-center z-10 space-y-8 animate-fade-in max-w-full">
        {/* Main Heading */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-3 sm:mb-4"
              style={{
                textShadow: '0 6px 20px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)'
              }}>
            Happy Birthday!
          </h1>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
             style={{
               textShadow: '0 4px 15px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)'
             }}>
            Pinaki 🎉
          </p>
        </div>

        {/* Decorative emojis */}
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 text-3xl sm:text-4xl md:text-5xl">
          <span className="animate-bounce-soft">🎂</span>
          <span className="animate-spin-slow">🎈</span>
          <span className="animate-bounce-soft" style={{ animationDelay: '0.5s' }}>
            🎁
          </span>
        </div>

        {/* Subtext */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-8 sm:mb-16 font-light"
           style={{
             textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
           }}>
          A Special Journey Awaits You
        </p>

        {/* CTA Button */}
        <button
          onClick={onNext}
          className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white text-rose-dark font-bold text-base sm:text-lg md:text-xl rounded-full shadow-lg sm:shadow-xl hover:shadow-2xl hover:scale-110 transform transition-all duration-300 active:scale-95"
        >
          Click to Begin ✨
        </button>
      </div>
    </div>
  );
};

export default Screen1_Welcome;
