import React, {useState} from 'react';
import Board from './Board';
import calculateWinner from '../helpers/calculateWinner';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const squares = history[history.length - 1];

  const handleClick = (i) => {
    const newHistory = [...history];
    const current = [...newHistory[newHistory.length - 1]];
    if (current[i]) return;
    current[i] = xIsNext ? "X" : "O";
    newHistory.push(current);
    setHistory(newHistory);
    setXIsNext(!xIsNext);
  }
  return (
    <div className='Game'>
      <Board squares={squares} onClick={handleClick} />
    </div>
  );
};

export default Game;
