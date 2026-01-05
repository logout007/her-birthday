import React, { useEffect, useRef } from 'react';
import birthdaySong from '../assets/happy-birthday-357371.mp3';

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
        src={birthdaySong}
        onError={() => console.log('Audio file not found')}
      />

      <button
        onClick={() => setMusicPlaying(!musicPlaying)}
        className="fixed top-4 right-4 z-50 w-10 h-10 bg-white bg-opacity-30 rounded-full flex items-center justify-center text-lg hover:bg-opacity-50 backdrop-blur-sm transition-all hover:scale-110 active:scale-95 transform duration-300"
        title={musicPlaying ? 'Mute Music' : 'Play Music'}
      >
        {musicPlaying ? '🔊' : '🔇'}
      </button>
    </>
  );
};

export default AudioPlayer;
