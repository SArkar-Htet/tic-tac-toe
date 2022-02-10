import React, {useState} from 'react';
import Board from './Board';
import calculateWinner from '../helpers/calculateWinner';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const squares = history[history.length - 1];
  const winner = calculateWinner(squares);
  const isDraw = !winner && !squares.includes(null);
  const gameStatus = winner ? `${squares[winner[0]]} Win!` 
                    : isDraw ? "Draw!"
                    : xIsNext ? "X Turn" 
                    : "O Turn";

  const handleClick = (i) => {
    const newHistory = [...history];
    const current = [...newHistory[newHistory.length - 1]];
    if (current[i] || calculateWinner(current)) return;
    current[i] = xIsNext ? "X" : "O";
    newHistory.push(current);
    setHistory(newHistory);
    setXIsNext(!xIsNext);
  }

  return (
    <div className='game w-100 h-100 p-1'>
      <h1 className='game__status'>{gameStatus}</h1>
      <Board 
        squares={squares} 
        winner={winner} 
        isDraw={isDraw} 
        onClick={handleClick}
      />
      <div className="game__scores">
        <div className="game__scores--item">
          <span>Player (X)</span>
          <span>0</span>
        </div>
        <div className="game__scores--item">
          <span>Tie</span>
          <span>2</span>
        </div>
        <div className="game__scores--item">
          <span>Player (O)</span>
          <span>3</span>
        </div>
      </div>
    </div>
  );
};

export default Game;
