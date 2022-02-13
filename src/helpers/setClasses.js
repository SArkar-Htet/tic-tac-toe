const setClasses = (winningMoves, isDraw, index) => {
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

  const conditionalClasses = winningMoves ? 
                              `square--border--secondary ${winningMoves.includes(index) 
                              ? 'square--winner' : 'square--secondary'}` 
                              : isDraw ? `square--secondary square--border--secondary` 
                              : `square--border`;

  return `square btn ${conditionalClasses} ${borderX} ${borderY}`;
}

export default setClasses;