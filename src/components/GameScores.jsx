import React from 'react';
import Scores from './Scores';

const GameScores = ({scores, undoIcon, onClick}) => {
  const gameScores = Object.keys(scores).map(score => <Scores key={score} player={score} score={scores[score]} />);

  return (
    <div className="game__scores">
      {gameScores}
      <div className='game__scores__item'>
        <span className='game__scores__status'>Undo</span>
        <button 
          onClick={onClick} 
          className='btn btn-undo'
        >
          {undoIcon}
        </button>
      </div>
    </div>
  )
}

export default GameScores;