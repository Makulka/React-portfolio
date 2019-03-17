import React, { Component } from 'react';
import '../css/TicTacToePage.scss';
import TicTacToeGame from './TicTacToeGame';

const Header = () => {
  return(
    <header className="header">
      <div className="game-image"></div>
      <h1>Tic Tac Toe</h1>               
    </header>
  );
}

const Main = () => {
  return (
    <main className="main"> 
      < TicTacToeGame />      
    </main>
  );
}

class TicTacToePage extends Component {
  render() {
    return (      
      <div className="container content">  
        < Header />
        < Main />   
      </div>      
    );
  }
}

export default TicTacToePage;

// "react-bootstrap": "^1.0.0-beta.5",