const restartGame = (history) => {
  const newSquares = [Array(9).fill(null)];
  const newHistory = [...history, ...newSquares];
  return newHistory;
}

export {restartGame};