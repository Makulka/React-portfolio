import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
// import HomePage from './components/HomePage/HomePage';
// import TicTacToePage from './components/TicTacToe/TicTacToePage';
// import GithubPage from './components/Github/GithubPage';



class App extends Component {  
  render() {
    return (
      <div>
        < Navbar /> 
      </div>
    );
  }
  
  // constructor(props) {
  //   super(props);
  //   this.initialState = { page: "home"};
  //   this.state = this.initialState;
  //   this.handleHomeClick = this.handleHomeClick.bind(this);
  //   this.handleTicClick = this.handleTicClick.bind(this);
  //   //this.handleGithubClick = this.handleGithubClick.bind(this);
  // }
  // handleHomeClick(e) {
  //   e.preventDefault();        
  //   this.setState({
  //     page: "home"
  //   });
  // }; 
  // handleTicClick(e) {
  //   e.preventDefault(); 
  //   this.setState({
  //     page: "tic"
  //   });
  // }
  // // handleGithubClick(e) {
  // //   e.preventDefault(); 
  // //   this.setState({
  // //     page: "github"
  // //   });
  // // }
  // render() {
  //   if (this.state.page === "home") {
  //     var pageContent = <HomePage />
  //   } else if (this.state.page === "tic") {
  //     pageContent = <TicTacToePage />
  //   }
  //   // else if (this.state.page === "github") {
  //   //   pageContent = <GithubPage />
  //   // }
  //   return (
  //     <div>
  //       < Navbar 
  //         page={this.state.page}
  //         homeClick={this.handleHomeClick}
  //         ticClick={this.handleTicClick}
  //         //githubClick={this.handleGithubClick}
  //       />
  //       {pageContent} 
  //       <GithubPage />
  //     </div>
  //   );
  // }
}

export default App;
