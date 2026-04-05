import React, { useState } from 'react';
import TicTacToe from './games/TicTacToe';
import MemoryGame from './games/MemoryGame';
import SnakeGame from './games/SnakeGame';
import './Games.css';

const Games = () => {
  const [activeGame, setActiveGame] = useState(null);

  const games = [
    {
      id: 'tictactoe',
      title: 'Tic Tac Toe',
      emoji: '⭕',
      description: 'Classic Tic Tac Toe game. Play against the computer!'
    },
    {
      id: 'memory',
      title: 'Memory Game',
      emoji: '🧠',
      description: 'Test your memory by matching pairs!'
    },
    {
      id: 'snake',
      title: 'Snake',
      emoji: '🐍',
      description: 'Eat the food and grow longer without hitting walls!'
    }
  ];

  const renderGame = () => {
    switch(activeGame) {
      case 'tictactoe':
        return <TicTacToe />;
      case 'memory':
        return <MemoryGame />;
      case 'snake':
        return <SnakeGame />;
      default:
        return null;
    }
  };

  if (activeGame) {
    return (
      <section id="games" className="games">
        <div className="container">
          <button className="back-button" onClick={() => setActiveGame(null)}>
            ← Back to Games Menu
          </button>
          <div className="game-container">
            {renderGame()}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="games" className="games">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">🎮 Fun Games</h2>
          <div className="title-underline"></div>
        </div>
        <p className="games-subtitle">Take a break and play some games I built!</p>
        
        <div className="games-grid">
          {games.map((game) => (
            <div key={game.id} className="game-card" onClick={() => setActiveGame(game.id)}>
              <div className="game-emoji">{game.emoji}</div>
              <h3>{game.title}</h3>
              <p>{game.description}</p>
              <button className="play-button">Play Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
