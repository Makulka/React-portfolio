import React, { Component } from 'react';
import './QuizPage.scss';
import QuizContent from './QuizContent';
//import TicTacToeGame from './TicTacToeGame';

const Header = () => {
  return(
    <header className="header">
      {/* <div className="game-image"></div> */}
      <h1>Biology Quiz</h1>               
    </header>
  );
}

const Main = () => {
  return (
    <main className="main"> 
      < QuizContent /> 
    </main>
  );
}

class QuizPage extends Component {
  render() {
    return (      
      <div className="container content">  
        < Header />
        < Main />   
      </div>      
    );
  }
}

export default QuizPage;

// "react-bootstrap": "^1.0.0-beta.5",