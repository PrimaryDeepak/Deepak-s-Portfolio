import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({ human: 0, computer: 0, draws: 0 });

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const isBoardFull = (squares) => squares.every(square => square !== null);

  const makeComputerMove = (currentBoard) => {
    const emptySquares = currentBoard
      .map((square, index) => (square === null ? index : null))
      .filter(val => val !== null);

    if (emptySquares.length === 0) return currentBoard;

    // Simple AI: try to win, then block, then random
    const newBoard = [...currentBoard];

    // Try to win
    for (let i = 0; i < 9; i++) {
      if (newBoard[i] === null) {
        newBoard[i] = 'O';
        if (calculateWinner(newBoard) === 'O') return newBoard;
        newBoard[i] = null;
      }
    }

    // Block player
    for (let i = 0; i < 9; i++) {
      if (newBoard[i] === null) {
        newBoard[i] = 'X';
        if (calculateWinner(newBoard) === 'X') {
          newBoard[i] = 'O';
          return newBoard;
        }
        newBoard[i] = null;
      }
    }

    // Take center if available
    if (newBoard[4] === null) {
      newBoard[4] = 'O';
      return newBoard;
    }

    // Random move
    const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
    newBoard[randomIndex] = 'O';
    return newBoard;
  };

  const handleClick = (index) => {
    if (board[index] || winner || !isXNext) return;

    let newBoard = [...board];
    newBoard[index] = 'X';

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner('X');
      setScore(prev => ({ ...prev, human: prev.human + 1 }));
      setBoard(newBoard);
      return;
    }

    if (isBoardFull(newBoard)) {
      setWinner('draw');
      setScore(prev => ({ ...prev, draws: prev.draws + 1 }));
      setBoard(newBoard);
      return;
    }

    setIsXNext(false);
    setBoard(newBoard);

    setTimeout(() => {
      newBoard = makeComputerMove(newBoard);
      const computerWinner = calculateWinner(newBoard);
      
      if (computerWinner) {
        setWinner('O');
        setScore(prev => ({ ...prev, computer: prev.computer + 1 }));
      } else if (isBoardFull(newBoard)) {
        setWinner('draw');
        setScore(prev => ({ ...prev, draws: prev.draws + 1 }));
      }
      
      setBoard(newBoard);
      setIsXNext(true);
    }, 500);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const resetScore = () => {
    setScore({ human: 0, computer: 0, draws: 0 });
    resetGame();
  };

  return (
    <div className="tictactoe">
      <h2>Tic Tac Toe</h2>
      
      <div className="score-board">
        <div className="score-item">
          <span>You</span>
          <strong>{score.human}</strong>
        </div>
        <div className="score-item">
          <span>Draws</span>
          <strong>{score.draws}</strong>
        </div>
        <div className="score-item">
          <span>Computer</span>
          <strong>{score.computer}</strong>
        </div>
      </div>

      {winner && (
        <div className="winner-message">
          {winner === 'draw' ? "It's a Draw! 🤝" : winner === 'X' ? 'You Won! 🎉' : 'Computer Won! 🤖'}
        </div>
      )}

      <div className="board">
        {board.map((square, index) => (
          <button
            key={index}
            className={`square ${square}`}
            onClick={() => handleClick(index)}
            disabled={winner !== null || square !== null}
          >
            {square}
          </button>
        ))}
      </div>

      <div className="button-group">
        <button className="btn btn-primary" onClick={resetGame}>New Game</button>
        <button className="btn btn-secondary" onClick={resetScore}>Reset Score</button>
      </div>
    </div>
  );
};

export default TicTacToe;
