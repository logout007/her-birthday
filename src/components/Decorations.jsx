import React from 'react';

const Decorations = () => {
  const generateRandomPosition = () => {
    return {
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
    };
  };

  const balloons = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    emoji: '🎈',
    position: generateRandomPosition(),
    delay: i * 1.5,
    duration: 6 + i,
  }));

  const hearts = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    emoji: '💕',
    position: generateRandomPosition(),
    delay: i * 0.5,
  }));

  const stars = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    emoji: '✨',
    position: generateRandomPosition(),
    delay: i * 0.4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <div
          key={`heart-${heart.id}`}
          className="absolute text-2xl sm:text-3xl md:text-4xl animate-float"
          style={{
            left: heart.position.left,
            top: heart.position.top,
            animationDelay: `${heart.delay}s`,
          }}
        >
          {heart.emoji}
        </div>
      ))}

      {/* Floating Stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute text-xl sm:text-2xl md:text-3xl opacity-60 animate-pulse-glow"
          style={{
            left: star.position.left,
            top: star.position.top,
            animationDelay: `${star.delay}s`,
          }}
        >
          {star.emoji}
        </div>
      ))}
    </div>
  );
};

export default Decorations;
