const calculateScores = ({playerX, playerO, tie}, winner, isDraw) => {
  if (!winner && !isDraw) {
    return false;
  }
  winner ? winner === "X" ? playerX++ : playerO++ : isDraw && tie++;
  const newScores = {playerX, tie, playerO};
  return newScores;
}

export {calculateScores};