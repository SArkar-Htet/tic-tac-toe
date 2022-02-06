import React from 'react';
import Square from './Square';

const Board = ({squares, onClick}) => {
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

    return (
      <Square key={index} borderX={borderX} borderY={borderY} value={square} onClick={() => onClick(index)} />
      )
    });
  return (
    <div className="Board">
      {squareComponents}
    </div>
  );
};

export default Board;

