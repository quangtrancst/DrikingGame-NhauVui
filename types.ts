export enum CardType {
  Truth = 0,
  Dare = 1,
  NeverHaveIEver = 2,
  Riddles = 3,
  Trivia = 4,
  MiniGames = 5,
}

export interface GameCard {
  id: number;
  type: CardType;
  content: string;
  answer?: string; // Optional answer for Riddles/Trivia
  penalty: number; // 1 or 2 cups/shots
}

// Background colors for the front of the card (and accents)
export const CARD_COLORS: Record<CardType, string> = {
  [CardType.Truth]: 'bg-pastel-truth text-blue-900',
  [CardType.Dare]: 'bg-pastel-dare text-pink-900',
  [CardType.NeverHaveIEver]: 'bg-pastel-nhie text-green-900',
  [CardType.Riddles]: 'bg-pastel-riddles text-yellow-900',
  [CardType.Trivia]: 'bg-pastel-trivia text-purple-900',
  [CardType.MiniGames]: 'bg-pastel-minigame text-orange-900',
};

// Labels in Vietnamese
export const CARD_LABELS: Record<CardType, string> = {
  [CardType.Truth]: 'SỰ THẬT',
  [CardType.Dare]: 'THỬ THÁCH',
  [CardType.NeverHaveIEver]: 'AI CHƯA TỪNG',
  [CardType.Riddles]: 'CÂU ĐỐ',
  [CardType.Trivia]: 'KIẾN THỨC',
  [CardType.MiniGames]: 'TRÒ CHƠI',
};