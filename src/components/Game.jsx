import React, {useState, useEffect} from 'react';
import Board from './Board';
import calculateWinner from '../helpers/calculateWinner';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({
    playerX: 0, playerY: 0, tie: 0
  });

  const handleClick = (i) => {
    const newHistory = [...history];
    const current = [...newHistory[newHistory.length - 1]];
    if (current[i] || calculateWinner(current)) return;
    current[i] = xIsNext ? "X" : "O";
    newHistory.push(current);
    setHistory(newHistory);
    setXIsNext(!xIsNext);
  }

  const squares = history[history.length - 1];
  const win = calculateWinner(squares);
  const winner = win && squares[win[0]];
  const isDraw = !win && !squares.includes(null);
  const gameStatus = win ? `${winner} Win!` 
                    : isDraw ? "Draw!"
                    : xIsNext ? "X Turn" 
                    : "O Turn";

  useEffect(() => {
    let {playerX, playerY, tie} = {...scores};
    if (winner) {
      winner === "X" ? playerX++ : playerY++;
      const newScores = {playerX, playerY, tie};
      setScores({...newScores});
    } 
    if (isDraw) {
      tie++;
      const newScores = {...scores, tie};
      setScores({...newScores});
    }
  }, [xIsNext]);

  const {playerX, playerY, tie} = scores;

  return (
    <div className='game w-100 h-100 p-1'>
      <h1 id='game_status' className='game__status'>{gameStatus}</h1>
      <Board 
        squares={squares} 
        winner={win} 
        isDraw={isDraw} 
        onClick={handleClick}
      />
      <div className="game__scores">
        <div className="game__scores--item">
          <span>Player (X)</span>
          <span>{playerX}</span>
        </div>
        <div className="game__scores--item">
          <span>Tie</span>
          <span>{tie}</span>
        </div>
        <div className="game__scores--item">
          <span>Player (O)</span>
          <span>{playerY}</span>
        </div>
      </div>
    </div>
  );
};

export default Game;
