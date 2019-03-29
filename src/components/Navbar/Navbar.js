import React, {Component} from 'react';
import './Navbar.scss';
import HomePage from '../HomePage/HomePage';
import TicTacToePage from '../TicTacToe/TicTacToePage';
import GithubPage from '../Github/GithubPage';
import QuizPage from '../Quiz/QuizPage';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {    
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
          <div className="navbar-brand brand">React</div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <NavLink to="/index.html" activeClassName="active" className="nav-link">Home</NavLink>
              <NavLink to="/tic-tac-toe" activeClassName="active"className="nav-link">Tic-tac-toe</NavLink>
              <NavLink to="/GitHub" activeClassName="active"className="nav-link">GitHub</NavLink>
              <NavLink to="/Quiz" activeClassName="active"className="nav-link">Quiz</NavLink>
                {/* <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">Action</a>
                  <a className="dropdown-item" href="/">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">Something else here</a>
                </div> */}                        
            </ul>  
            <a className="nav-link portfolio-link" href="http://herebegregs.uk/stana/portfolio/portfolio.html">Main portfolio</a>      
          </div>        
        </nav>
        <Route path="/index.html" component={HomePage}/>
        <Route path="/tic-tac-toe" component={TicTacToePage}/>
        <Route path="/GitHub" component={GithubPage}/>
        <Route path="/Quiz" component={QuizPage}/>
      </div>
    )
  }
}


export default Navbar;

// https://m.pardel.net/react-and-bootstrap-4-part-1-setup-navigation-d4767e2ed9f0