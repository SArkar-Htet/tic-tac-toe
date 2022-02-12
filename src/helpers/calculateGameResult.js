const calculateGameResult = (squares, win) => {
  const [winningMoves, winner] = win ? win : ['', ''];
  const isDraw = !win && !squares.includes(null);
  return [winningMoves, winner, isDraw];
}

export {calculateGameResult};