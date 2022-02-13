import React from 'react';
import Square from './Square';
import setClasses from '../helpers/setClasses';

const Board = ({squares, winningMoves, isDraw, onClick}) => {
  const squareComponents = squares.map((square, index) => {
    return (
      <Square 
        key={index} 
        value={square} 
        classes = {setClasses(winningMoves, isDraw, index)}
        onClick={() => onClick(index)} 
      />
    );
  });

  return (
    <div className="Board">
      {squareComponents}
    </div>
  );
};

export default Board;

