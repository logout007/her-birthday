import React from 'react';
import Confetti from './Confetti';

const Screen1_Welcome = ({ onNext }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden px-4">
      <Confetti />
      
      <div className="text-center z-10 space-y-8 animate-fade-in max-w-full">
        {/* Main Heading */}
        <div className="mb-6">
          <h1 className="text-5xl font-black text-[#dd1616] mb-3"
              style={{
                textShadow: '0 6px 20px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)'
              }}>
            Happy Birthday!
          </h1>
          <p className="text-3xl font-bold text-white"
             style={{
               textShadow: '0 4px 15px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)'
             }}>
            Penguuu 🎉
          </p>
        </div>

        {/* Decorative emojis */}
        <div className="flex justify-center gap-4 mb-8 text-3xl">
          <span className="animate-bounce-soft">🎂</span>
          <span className="animate-spin-slow">🎈</span>
          <span className="animate-bounce-soft" style={{ animationDelay: '0.5s' }}>
            🎁
          </span>
        </div>

        {/* Subtext */}
        <p className="text-lg text-[#e32c2c] mb-8 font-light"
           style={{
             textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
           }}>
          A Special Journey Awaits You
        </p>

        {/* CTA Button */}
        <button
          onClick={onNext}
          className="px-6 py-3 bg-white text-rose-dark font-bold text-base rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transform transition-all duration-300 active:scale-95"
        >
          Click to Begin ✨
        </button>
      </div>
    </div>
  );
};

export default Screen1_Welcome;
