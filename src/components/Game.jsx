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
      xIsNext: true,
    }
  }
  
  handleClick = (i) => {
    const history = [...this.state.history];
    const current = history[history.length - 1];
    console.log(current);
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

  render() {
    const { history, xIsNext } = this.state;
    const current = history[history.length - 1];
    const squares = current.squares;
    const winner = calculateWinner(squares);
    const status = winner ? 
                    `Winner : ${winner}` 
                    :`Next player: ${xIsNext ? "X" : "O"}`;
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={squares} onClick={this.handleClick} />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}