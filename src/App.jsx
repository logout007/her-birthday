import React, { useState, useEffect } from 'react';
import Screen1_Welcome from './components/Screen1_Welcome';
import Screen2_Cake from './components/Screen2_Cake';
import Screen3_Poem from './components/Screen3_Poem';
import Screen5_PhotoGallery from './components/Screen5_PhotoGallery';
import Screen6_Finale from './components/Screen6_Finale';
import AudioPlayer from './components/AudioPlayer';
import Decorations from './components/Decorations';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [musicPlaying, setMusicPlaying] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleNextScreen = () => {
    const screens = [1, 2, 3, 5, 6];
    const currentIndex = screens.indexOf(currentScreen);
    if (currentIndex < screens.length - 1) {
      setCurrentScreen(screens[currentIndex + 1]);
    }
  };

  const handlePreviousScreen = () => {
    const screens = [1, 2, 3, 5, 6];
    const currentIndex = screens.indexOf(currentScreen);
    if (currentIndex > 0) {
      setCurrentScreen(screens[currentIndex - 1]);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <Screen1_Welcome onNext={handleNextScreen} />;
      case 2:
        return <Screen2_Cake onNext={handleNextScreen} onPrev={handlePreviousScreen} />;
      case 3:
        return <Screen3_Poem onNext={handleNextScreen} onPrev={handlePreviousScreen} />;
      case 5:
        return <Screen5_PhotoGallery onNext={handleNextScreen} onPrev={handlePreviousScreen} />;
      case 6:
        return <Screen6_Finale onPrev={handlePreviousScreen} />;
      default:
        return <Screen1_Welcome onNext={handleNextScreen} />;
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden relative bg-gradient-to-br from-rose-soft via-rose-medium to-rose-dark">
      <Decorations />
      <AudioPlayer musicPlaying={musicPlaying} setMusicPlaying={setMusicPlaying} />
      <div className="w-full h-full">
        {renderScreen()}
      </div>
      <div className="absolute bottom-2 left-2 text-xs text-white opacity-30 pointer-events-none">
        Screen {currentScreen}
      </div>
    </div>
  );
}

export default App;
