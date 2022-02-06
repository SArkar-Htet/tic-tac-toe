import React, {useState} from 'react';
import Board from './Board';
import calculateWinner from '../helpers/calculateWinner';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const squares = history[history.length - 1];
  return (
    <div className='Game'>
      <Board squares={squares} />
    </div>
  );
};

export default Game;
