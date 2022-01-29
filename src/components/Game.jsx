import React from 'react';
import Board from './Board';
import calculateWinner from '../helpers/calculateWinner';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history : [
        {squares: Array(9).fill(null)}
      ],
      stepNumber: 0,
      xIsNext: true,
    }
  }
  
  handleClick = (i) => {
    const history = [...this.state.history];
    const current = history[history.length - 1];
    const squares = [...current.squares];
    if (squares[i] || calculateWinner(squares)) {
      return
    };
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{
        squares
      }]),
      xIsNext: !this.state.xIsNext
    });
  };

  jumpTo = (step) => {
    console.log(step);
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const { history, xIsNext } = this.state;
    const current = history[history.length - 1];
    const squares = current.squares;
    const winner = calculateWinner(squares);
    const status = winner ? 
                    `Winner : ${winner}` 
                    :`Next player: ${xIsNext ? "X" : "O"}`;
    const moves = history.map((hist, step) => {
      const desc = step ? `Go to move #${step}` : `Go to game start`;
      return (
        <li key={step}>
          <button onClick={() => this.jumpTo(step)}>
            {desc}
          </button>
        </li>
      );
    });
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={squares} onClick={this.handleClick} />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}