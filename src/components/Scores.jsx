import React from 'react'

const Scores = ({player, score}) => {
  const playerName = player === "playerX" ? "Player (X)" : player === "playerO" ? "Player (O)" : player === "tie" && "Tie";
  return (
    <div className="game__scores__item">
      <span>{playerName}</span>
      <span>{score}</span>
    </div>
  )
}

export default Scores;