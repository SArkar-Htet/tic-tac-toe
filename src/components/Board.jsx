import React from 'react';
import Square from './Square';

const Board = ({squares, winner, onClick}) => {
  const squareComponents = squares.map((square, index) => {
    const borderBottom = [0, 1, 2];
    const borderTop = [6, 7, 8];
    const borderRight = [0, 3, 6];
    const borderLeft = [2, 5, 8];
    const borderX = borderRight.includes(index)
                    ? 'square--border-right'
                    : borderLeft.includes(index) 
                    ? 'square--border-left'
                    : '';
    
    const borderY = borderBottom.includes(index) 
                    ? 'square--border-bottom'
                    : borderTop.includes(index)
                    ? 'square--border-top'
                    : '';

    const isWinner = winner && winner.includes(index)
                            ? 'square-winner'
                            : '';

    const classes = winner ? `square square--border-secondary ${winner.includes(index) 
                            ? 'square--winner' 
                            : 'square--secondary'}` 
                            : `square square--border`;

    return (
      <Square 
        key={index} 
        // borderX={borderX} 
        // borderY={borderY} 
        value={square} 
        classes = {`${classes} ${borderX} ${borderY}`}
        onClick={() => onClick(index)} 
      />
      )
    });
  return (
    <div className="Board">
      {squareComponents}
    </div>
  );
};

export default Board;

