import React, {useState, useEffect} from 'react';
import Board from './Board';
import GameScores from './GameScores';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftRotate } from '@fortawesome/free-solid-svg-icons';
import calculateWinner from '../helpers/calculateWinner';
import {calculateScores} from '../helpers/calculateScores';
import {restartGame} from '../helpers/gameHandle';
import {calculateGameResult} from '../helpers/calculateGameResult';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({
    playerX: 0, tie: 0, playerO: 0
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

  const handleUndo = () => {
    const newHistory = [...history];
    const current = [...newHistory[newHistory.length - 1]];
    const gameStart = current.every(step => step === null);
    const winner = calculateWinner(current);
    const isDraw = !winner && !current.includes(null); 
    if (gameStart || winner || isDraw) {
      return 
    }
    newHistory.pop();
    setHistory(newHistory);
    setXIsNext(!xIsNext);
  }

  const squares = history[history.length - 1];
  const [winningMoves, winner, isDraw] = calculateGameResult(squares, calculateWinner(squares));
  const gameStatus = winner ? `${winner} Win!` 
                    : isDraw ? "Draw!"
                    : xIsNext ? "X Turn" 
                    : "O Turn";
  const undoIcon = <FontAwesomeIcon icon={faArrowLeftRotate} size="xs" />;

  const completeGame = () => {
    if (!winner && !isDraw) {
      return;
    }
    setScores({...calculateScores(scores, winner, isDraw)});
    setTimeout(() => setHistory([...restartGame(history)]), 1500);
  }

  useEffect(() => {
    completeGame();
    
  }, [xIsNext]);

  return (
    <div className='game w-100 h-100 p-1'>
      <h1 id='game_status' className='game__status'>{gameStatus}</h1>
      <Board 
        squares={squares} 
        winningMoves={winningMoves} 
        isDraw={isDraw} 
        onClick={handleClick}
      />
      <GameScores scores={scores} undoIcon={undoIcon} onClick={handleUndo} />
    </div>
  );
};

export default Game;
