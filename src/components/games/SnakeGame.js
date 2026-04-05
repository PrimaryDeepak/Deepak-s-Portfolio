import React, { useState, useRef, useEffect } from 'react';
import './SnakeGame.css';

const SnakeGame = () => {
  const gridSize = 20;
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [nextDirection, setNextDirection] = useState({ x: 1, y: 0 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const gameLoopRef = useRef(null);

  const generateFood = (currentSnake = snake) => {
    // eslint-disable-next-line no-loop-func
    const isPositionOccupied = (x, y) => currentSnake.some(segment => segment.x === x && segment.y === y);
    
    let x, y;
    do {
      x = Math.floor(Math.random() * gridSize);
      y = Math.floor(Math.random() * gridSize);
    } while (isPositionOccupied(x, y));
    
    return { x, y };
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          if (direction.y === 0) setNextDirection({ x: 0, y: -1 });
          e.preventDefault();
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          if (direction.y === 0) setNextDirection({ x: 0, y: 1 });
          e.preventDefault();
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          if (direction.x === 0) setNextDirection({ x: -1, y: 0 });
          e.preventDefault();
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          if (direction.x === 0) setNextDirection({ x: 1, y: 0 });
          e.preventDefault();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    gameLoopRef.current = setInterval(() => {
      setSnake((prevSnake) => {
        setDirection(nextDirection);
        const newHead = {
          x: (prevSnake[0].x + nextDirection.x + gridSize) % gridSize,
          y: (prevSnake[0].y + nextDirection.y + gridSize) % gridSize
        };

        // Check collision with itself
        if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }

        let newSnake = [newHead, ...prevSnake];

        // Check if food is eaten
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(prev => prev + 10);
          setFood(generateFood(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 200);

    return () => clearInterval(gameLoopRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStarted, gameOver, nextDirection, food]);

  const startGame = () => {
    const initialSnake = [{ x: 10, y: 10 }];
    setSnake(initialSnake);
    setFood(generateFood(initialSnake));
    setDirection({ x: 1, y: 0 });
    setNextDirection({ x: 1, y: 0 });
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
  };

  const resetGame = () => {
    const initialSnake = [{ x: 10, y: 10 }];
    setGameStarted(false);
    setGameOver(false);
    setSnake(initialSnake);
    setFood(generateFood(initialSnake));
    setDirection({ x: 1, y: 0 });
    setNextDirection({ x: 1, y: 0 });
    setScore(0);
  };

  return (
    <div className="snake-game">
      <h2>🐍 Snake Game</h2>
      
      <div className="game-info">
        <div className="score">Score: <strong>{score}</strong></div>
      </div>

      {!gameStarted && (
        <div className="game-message">
          <p>Use arrow keys or WASD to move</p>
          <button className="btn btn-primary" onClick={startGame}>
            Start Game
          </button>
        </div>
      )}

      {gameOver && (
        <div className="game-message game-over">
          <p>Game Over!</p>
          <p>Final Score: <strong>{score}</strong></p>
          <button className="btn btn-primary" onClick={resetGame}>
            Play Again
          </button>
        </div>
      )}

      <div className="game-board">
        <div className="grid">
          {Array.from({ length: gridSize * gridSize }).map((_, index) => {
            const x = index % gridSize;
            const y = Math.floor(index / gridSize);
            const isSnake = snake.some(segment => segment.x === x && segment.y === y);
            const isFood = food.x === x && food.y === y;
            const isHead = snake[0].x === x && snake[0].y === y;

            return (
              <div
                key={index}
                className={`grid-cell ${isSnake ? 'snake' : ''} ${isFood ? 'food' : ''} ${isHead ? 'head' : ''}`}
              >
                {isFood && '🍎'}
              </div>
            );
          })}
        </div>
      </div>

      <div className="controls">
        <p>⬆️ UP | ⬇️ DOWN | ⬅️ LEFT | ➡️ RIGHT</p>
      </div>
    </div>
  );
};

export default SnakeGame;
