import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({ musicPlaying, setMusicPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (musicPlaying) {
      audioRef.current?.play().catch(() => {
        // Autoplay blocked
      });
    } else {
      audioRef.current?.pause();
    }
  }, [musicPlaying]);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        onError={() => console.log('Audio file not found')}
      />

      <button
        onClick={() => setMusicPlaying(!musicPlaying)}
        className="fixed top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 z-50 w-10 sm:w-12 h-10 sm:h-12 bg-white bg-opacity-30 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl hover:bg-opacity-50 backdrop-blur-sm transition-all hover:scale-110 active:scale-95 transform duration-300"
        title={musicPlaying ? 'Mute Music' : 'Play Music'}
      >
        {musicPlaying ? '🔊' : '🔇'}
      </button>
    </>
  );
};

export default AudioPlayer;
