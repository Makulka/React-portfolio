import React from 'react';
import '../css/TicTacToeGame.scss';

  function Square(props) {
    return(
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  const StartButton = (props) => {
    return(
      <button className="start-button" onClick={props.onClick}>
        Start new game
      </button>
    );
  }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      };
    }
    handleClick(i) {
      const squaresC = this.state.squares.slice();
      if (calculateWinner(squaresC) || squaresC[i]) {
        return;
      }
      squaresC[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        squares: squaresC,
        xIsNext: !this.state.xIsNext,
      });
    }
    handleStartNewGame() {
      this.setState({
        squares: Array(9).fill(null),
        xIsNext: true,
      });
    }
    renderSquare(i) {
      return (
        <Square 
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }
    renderStartButton() {
      return(
        <StartButton className="start-button"
          onClick={() => this.handleStartNewGame()}
        />
      );
    }
  
    render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? "X" : "O");
      }
  
      return (
        <div className="game-board">
          <div className="status">{status}</div>
          <div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
          {this.renderStartButton()}
        </div>
      );
    }
  }
  
  class TicTacToeGame extends React.Component {
    render() {
      return (
        <div className="game">
          <Board />   
        </div>
      );
    }
  }
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  export default TicTacToeGame;