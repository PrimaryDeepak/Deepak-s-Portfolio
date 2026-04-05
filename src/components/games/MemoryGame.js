import React, { useState, useEffect } from 'react';
import './MemoryGame.css';

const MemoryGame = () => {
  const emojis = ['🍎', '🍌', '🍊', '🍉', '🍇', '🍓', '🍑', '🍒'];
  const initialCards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);

  const [cards, setCards] = useState(initialCards);
  const [flipped, setFlipped] = useState(new Set());
  const [matched, setMatched] = useState(new Set());
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    if (matched.size === cards.length) {
      setGameWon(true);
    }
  }, [matched, cards.length]);

  const handleCardClick = (index) => {
    if (flipped.has(index) || matched.has(index) || flipped.size >= 2) return;

    const newFlipped = new Set(flipped);
    newFlipped.add(index);
    setFlipped(newFlipped);

    if (newFlipped.size === 2) {
      setMoves(moves + 1);
      const [first, second] = Array.from(newFlipped);

      if (cards[first] === cards[second]) {
        const newMatched = new Set(matched);
        newMatched.add(first);
        newMatched.add(second);
        setMatched(newMatched);
        setFlipped(new Set());
      } else {
        setTimeout(() => {
          setFlipped(new Set());
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    const newCards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
    setCards(newCards);
    setFlipped(new Set());
    setMatched(new Set());
    setMoves(0);
    setGameWon(false);
  };

  return (
    <div className="memory-game">
      <h2>Memory Game</h2>
      
      <div className="stats">
        <div className="stat">
          <span>Moves:</span>
          <strong>{moves}</strong>
        </div>
        <div className="stat">
          <span>Matched:</span>
          <strong>{Math.floor(matched.size / 2)}/{emojis.length}</strong>
        </div>
      </div>

      {gameWon && (
        <div className="winner-message">
          🎉 You Won in {moves} moves! 🎉
        </div>
      )}

      <div className="memory-grid">
        {cards.map((card, index) => (
          <button
            key={index}
            className={`memory-card ${flipped.has(index) || matched.has(index) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
            disabled={gameWon}
          >
            <span className="card-inner">
              {(flipped.has(index) || matched.has(index)) && card}
            </span>
          </button>
        ))}
      </div>

      <button className="btn btn-primary" onClick={resetGame}>
        {gameWon ? 'Play Again' : 'Reset Game'}
      </button>
    </div>
  );
};

export default MemoryGame;
