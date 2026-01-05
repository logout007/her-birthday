import React from 'react';
import Confetti from './Confetti';

const Screen6_Finale = ({ onPrev }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <Confetti />

      <div className="text-center z-10 max-w-2xl space-y-4 animate-fade-in">
        {/* Main Message */}
        <h2 className="text-4xl font-black text-[#dd1616]"
            style={{
              textShadow: '0 6px 20px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
          You've Reached The End! 🎊
        </h2>

        {/* Decorative Emojis */}
        <div className="flex justify-center gap-4 my-4 text-4xl"
             style={{ animationDelay: '0.6s' }}>
          <span className="animate-spin-slow">🎈</span>
          <span className="animate-float">✨</span>
          <span className="animate-spin-slow" style={{ animationDirection: 'reverse' }}>
            🎈
          </span>
        </div>

        {/* Sweet Thank You Message */}
        <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-30 shadow-xl animate-fade-in-up"
             style={{ animationDelay: '0.9s' }}>
          <p className="text-lg text-[#e32c2c] leading-relaxed font-light"
             style={{
               textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
             }}>
            Dear Penguuu,
          </p>
          <p className="text-base text-[#e32c2c] leading-relaxed font-light mt-3"
             style={{
               textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
             }}>
            Having you in our life is like a constant gift that keeps giving. Your quiet strength has transformed into the most radiant joy, and we're blessed to witness your incredible journey every single day. You make our world brighter, warmer, and infinitely more meaningful with your presence.
          </p>
          <p className="text-base text-white leading-relaxed font-light mt-3"
             style={{
               textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
             }}>
            Thank you for being you. 💕
          </p>
        </div>

        {/* Final celebration message */}
        <p className="text-xl text-white font-bold mt-6"
           style={{
             textShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
           }}>
          Wishing you endless happiness! 🌟
        </p>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-6 left-4 z-50">
        <button
          onClick={onPrev}
          className="px-4 py-2 text-xs bg-white bg-opacity-30 text-[#e32c2c] font-bold rounded-full hover:bg-opacity-50 transition hover:scale-110 active:scale-95 transform duration-300 whitespace-nowrap"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default Screen6_Finale;
