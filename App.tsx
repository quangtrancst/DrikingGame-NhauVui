import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Beer, ChevronRight, RotateCcw, Sparkles } from 'lucide-react';
import cardsData from './cards';
import Card from './components/Card';
import { shuffleArray } from './utils/shuffle';
import { GameCard } from './types';
import { playClickSound, initAudioContext } from './utils/sound';

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [shuffledCards, setShuffledCards] = useState<GameCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Initialize and shuffle cards
  useEffect(() => {
    setShuffledCards(shuffleArray(cardsData));
  }, []);

  const handleStart = () => {
    initAudioContext(); // Initialize audio on user interaction
    playClickSound();
    setGameStarted(true);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleNext = useCallback(() => {
    playClickSound();
    if (currentIndex < shuffledCards.length - 1) {
      setTimeout(() => {
        setIsFlipped(false);
        setCurrentIndex(prev => prev + 1);
      }, 200); 
    } else {
      setGameStarted(false);
    }
  }, [currentIndex, shuffledCards.length]);

  const handleRestart = () => {
    playClickSound();
    setShuffledCards(shuffleArray(cardsData));
    setGameStarted(false);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="min-h-screen bg-background text-pastel-dark flex flex-col overflow-hidden relative font-sans">
      
      {/* Background Blobs (Pastel) */}
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-pastel-truth/30 blur-[100px] rounded-full pointer-events-none animate-float" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-pastel-dare/30 blur-[100px] rounded-full pointer-events-none" />
      <div className="fixed top-[40%] left-[20%] w-[40%] h-[40%] bg-pastel-riddles/40 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <header className="w-full p-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <div className="bg-white p-2 rounded-full shadow-sm">
            <Beer className="text-orange-400 w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-gray-800">
            NHẬU VUI
          </h1>
        </div>
        {gameStarted && (
          <button 
            onClick={handleRestart}
            className="p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-all active:scale-95"
            title="Chơi lại từ đầu"
          >
            <RotateCcw className="w-5 h-5 text-gray-500" />
          </button>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 z-10 w-full max-w-md mx-auto relative">
        <AnimatePresence mode="wait">
          {!gameStarted ? (
            <motion.div 
              key="start-screen"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              className="text-center w-full"
            >
              <div className="mb-8 relative inline-block">
                <div className="absolute inset-0 bg-pastel-nhie rounded-full blur-2xl opacity-60"></div>
                <Sparkles className="w-24 h-24 mx-auto text-pastel-dark relative z-10" strokeWidth={1.5} />
              </div>
              
              <h2 className="text-5xl font-black mb-4 text-gray-800 tracking-tight">
                Sẵn sàng <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-dare to-purple-400">
                  quẩy hết mình?
                </span>
              </h2>
              <p className="text-gray-500 mb-12 text-lg px-4 font-medium">
                Các câu hỏi và thử thách vui nhộn. <br/> Nhớ uống có trách nhiệm nhé!
              </p>

              <button
                onClick={handleStart}
                className="group relative px-10 py-5 bg-gray-900 text-white overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 active:scale-95 active:translate-y-0"
              >
                <span className="relative text-xl font-bold tracking-widest uppercase">
                  Bắt đầu
                </span>
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="game-screen"
              className="w-full flex flex-col items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="w-full relative min-h-[400px] flex items-center justify-center">
                 <AnimatePresence mode="wait">
                    {shuffledCards.length > 0 && currentIndex < shuffledCards.length && (
                       <motion.div
                         key={shuffledCards[currentIndex].id}
                         initial={{ x: 200, opacity: 0, rotate: 5 }}
                         animate={{ x: 0, opacity: 1, rotate: 0 }}
                         exit={{ x: -200, opacity: 0, rotate: -5 }}
                         transition={{ type: "spring", stiffness: 150, damping: 20 }}
                         className="w-full"
                       >
                         <Card 
                            data={shuffledCards[currentIndex]} 
                            isFlipped={isFlipped}
                            onFlip={handleFlip}
                         />
                       </motion.div>
                    )}
                 </AnimatePresence>
              </div>

              <div className="flex flex-col items-center gap-2 w-full px-8">
                <button
                  onClick={handleNext}
                  className="w-full mt-4 flex justify-center items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-800 active:scale-95 transition-all shadow-lg z-20"
                >
                  {currentIndex === shuffledCards.length - 1 ? 'KẾT THÚC' : 'TIẾP THEO'}
                  <ChevronRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-gray-400 font-bold tracking-widest mt-4">
                  CARD {currentIndex + 1} / {shuffledCards.length}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-xs text-gray-400 z-10 font-medium">
        <p>© 2026 Nhậu Vui. Drink Responsibly. By QuangCST</p>
      </footer>
    </div>
  );
};

export default App;