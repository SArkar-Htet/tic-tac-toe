const calculateScores = ({playerX, playerY, tie}, winner, isDraw) => {
  if (!winner && !isDraw) {
    return false;
  }
  winner ? winner === "X" ? playerX++ : playerY++ : isDraw && tie++;
  const newScores = {playerX, playerY, tie};
  return newScores;
}

export {calculateScores};