import React, { Component } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import TicTacToePage from './components/TicTacToePage';


class App extends Component {  
  constructor(props) {
    super(props);
    this.initialState = { page: "home"};
    this.state = this.initialState;
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleTicClick = this.handleTicClick.bind(this);
  }
  handleHomeClick(e) {
    e.preventDefault();        
    this.setState({
      page: "home"
    });
  }; 
  handleTicClick(e) {
    e.preventDefault(); 
    this.setState({
      page: "tic"
    });
  }
  render() {
    if (this.state.page === "home") {
      var pageContent = <HomePage />
    } else if (this.state.page === "tic") {
      pageContent = <TicTacToePage />
    }
    return (
      <div>
        < Navbar 
          page={this.state.page}
          homeClick={this.handleHomeClick}
          ticClick={this.handleTicClick}
        />
        {pageContent} 
      </div>
    );
  }
}

export default App;
