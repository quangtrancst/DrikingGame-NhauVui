import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GameCard, CARD_COLORS, CARD_LABELS, CardType } from '../types';
import { RotateCcw, Eye, Beer, Shuffle } from 'lucide-react';
import { playFlipSound, playRevealSound } from '../utils/sound';

interface CardProps {
  data: GameCard;
  isFlipped: boolean;
  onFlip: () => void;
}

const Card: React.FC<CardProps> = ({ data, isFlipped, onFlip }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [puzzleRevealed, setPuzzleRevealed] = useState(false);
  const [scrambledWord, setScrambledWord] = useState('');
  
  // Use a class mapping for the pastel theme
  const colorClass = CARD_COLORS[data.type];
  const label = CARD_LABELS[data.type];

  // Check if it is the "Vua Tiếng Việt" game
  const isVuaTiengViet = data.type === CardType.MiniGames && data.content.includes("'Vua Tiếng Việt'");

  // Helper to scramble word
  const generateScrambledWord = (word: string) => {
    // Remove spaces, split into chars, shuffle
    const cleanWord = word.replace(/\s/g, '');
    const chars = cleanWord.split('');
    
    // Simple Fisher-Yates shuffle
    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    
    // Ensure we don't accidentally return the exact answer (unlikely for long words but good to check)
    // If it matches, just reverse it
    const result = chars.join(' / ').toUpperCase();
    if (result === word.split('').join(' / ').toUpperCase()) {
      return chars.reverse().join(' / ').toUpperCase();
    }
    return result;
  };

  useEffect(() => {
    // Reset state when card changes
    setShowAnswer(false);
    setPuzzleRevealed(false);
    if (isVuaTiengViet && data.answer) {
      setScrambledWord(generateScrambledWord(data.answer));
    }
  }, [data.id, data.answer, isVuaTiengViet]);

  const variants = {
    initial: { rotateY: 0 },
    animate: { rotateY: isFlipped ? 180 : 0 },
    exit: { rotateY: 0, opacity: 0 }
  };

  const handleShowAnswer = (e: React.MouseEvent) => {
    e.stopPropagation();
    playRevealSound();
    setShowAnswer(true);
  };

  const handleRevealPuzzle = (e: React.MouseEvent) => {
    e.stopPropagation();
    playRevealSound();
    setPuzzleRevealed(true);
  };

  const handleCardClick = () => {
    playFlipSound();
    onFlip();
  };

  return (
    <div className="relative w-full max-w-sm h-96 perspective-1000 mx-auto cursor-pointer" onClick={handleCardClick}>
      <motion.div
        className="w-full h-full relative preserve-3d transition-transform duration-500"
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side - Category */}
        <div 
          className={`absolute w-full h-full backface-hidden rounded-3xl border-[6px] border-white ${colorClass} flex flex-col items-center justify-center p-6 shadow-soft`}
        >
          <div className="absolute top-6 right-6 animate-pulse">
             <RotateCcw className="w-6 h-6 opacity-60" />
          </div>
          
          <div className="bg-white/30 backdrop-blur-sm w-48 h-48 rounded-full flex items-center justify-center mb-6 shadow-inner">
             <h2 className="text-3xl font-black tracking-tighter uppercase text-center leading-tight">
              {label}
            </h2>
          </div>
          <p className="mt-2 text-sm opacity-80 uppercase tracking-widest font-bold">
            Nhấn để lật
          </p>
        </div>

        {/* Back Side - Content */}
        <div 
          className={`absolute w-full h-full backface-hidden rounded-3xl border-[6px] border-white bg-white text-gray-800 flex flex-col items-center justify-between p-6 shadow-card`}
          style={{ 
            transform: 'rotateY(180deg)' 
          }}
        >
          {/* Header on back */}
          <div className={`w-full py-2 rounded-full ${colorClass} text-center font-bold uppercase tracking-wider text-sm mb-4`}>
             {label}
          </div>

          <div className="flex-1 flex flex-col items-center justify-center w-full relative">
            
            {/* Main Content / Rule */}
            <p className="text-xl text-center font-bold leading-relaxed whitespace-pre-line mb-4">
              {data.content}
            </p>

            {/* Special Vua Tiếng Việt Logic */}
            {isVuaTiengViet && data.answer && (
              <div className="w-full flex flex-col items-center gap-3">
                {!puzzleRevealed ? (
                  <button
                    onClick={handleRevealPuzzle}
                    className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-full text-base font-bold shadow-md transition-all animate-bounce"
                  >
                    <Shuffle className="w-4 h-4" />
                    Hiện Câu Đố
                  </button>
                ) : (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-gray-100 p-4 rounded-xl border-2 border-dashed border-gray-300 w-full mb-2"
                  >
                    <p className="text-2xl font-black text-center text-gray-700 tracking-widest break-words">
                      {scrambledWord}
                    </p>
                  </motion.div>
                )}
              </div>
            )}

            {/* Answer Section for Riddles/Trivia/VuaTiengViet */}
            {data.answer && (
              <div className="mt-2 w-full flex flex-col items-center min-h-[50px] justify-end">
                {/* For Vua Tiếng Việt, only show answer button AFTER puzzle is revealed */}
                {(!isVuaTiengViet || puzzleRevealed) && (
                  !showAnswer ? (
                    <button 
                      onClick={handleShowAnswer}
                      className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-semibold transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      Hiện đáp án
                    </button>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-center p-3 rounded-xl bg-opacity-20 ${colorClass.split(' ')[0]} w-full`}
                    >
                      <span className="text-sm font-bold opacity-70 block mb-1">ĐÁP ÁN:</span>
                      <span className="font-bold text-lg">{data.answer}</span>
                    </motion.div>
                  )
                )}
              </div>
            )}
          </div>

          {/* Penalty Footer */}
          <div className="w-full mt-4 pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-red-500 font-bold">
            <Beer className="w-5 h-5" />
            <span>Phạt: {data.penalty} Ly</span>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Card;