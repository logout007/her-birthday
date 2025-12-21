import React, { useEffect } from 'react';

const Confetti = () => {
  useEffect(() => {
    const createConfetti = () => {
      const emojis = ['🎉', '🎊', '🎈', '✨', '💕', '🎁', '⭐', '🌸', '💫', '🎀'];
      const animationClasses = [
        'animate-confetti-fall-1',
        'animate-confetti-fall-2',
        'animate-confetti-fall-3',
        'animate-confetti-fall-4',
        'animate-confetti-fall-5',
      ];

      for (let i = 0; i < 80; i++) {
        const element = document.createElement('div');
        
        // Random starting position across the width
        const randomX = Math.random() * 100;
        
        element.style.position = 'fixed';
        element.style.left = randomX + '%';
        element.style.top = '-50px';
        element.style.pointerEvents = 'none';
        element.style.zIndex = '9999';
        element.style.fontSize = Math.random() * 24 + 16 + 'px';
        element.style.opacity = '1';
        element.style.willChange = 'transform, opacity';
        element.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Random animation
        const randomAnimation = animationClasses[Math.floor(Math.random() * animationClasses.length)];
        element.className = randomAnimation;
        
        // Random delay for staggered effect
        element.style.animationDelay = Math.random() * 0.5 + 's';
        
        document.body.appendChild(element);

        // Remove element after animation completes
        setTimeout(() => {
          element.remove();
        }, 5500);
      }
    };

    // Create initial confetti burst
    createConfetti();

    // Create more confetti every 2 seconds while on page
    const interval = setInterval(createConfetti, 2500);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default Confetti;
