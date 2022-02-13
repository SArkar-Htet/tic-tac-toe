import React from 'react'

const Scores = ({player, score}) => {
  const playerName = player === "playerX" ? "Player (X)" : player === "playerY" ? "Player (Y)" : player === "tie" && "Tie";
  return (
    <div className="game__scores__item">
      <span className="game__scores__status">{playerName}</span>
      <span className="game_scores__value">{score}</span>
    </div>
  )
}

export default Scores;