import React, {Component} from 'react';
import './Navbar.scss';

// const NavItem = (props) => {
//   const pageURI = window.location.pathname+window.location.search;
//   const liClassName = (props.path == pageURI) ? "nav-item active" : "nav-item";
//   return(
//     <li className={liClassName}>
//       <a className="nav-link" href={props.path}>{props.name}</a>
//     </li>
//   );
// }

class Navbar extends Component {
  render() {
    var homeActive="";
    var ticActive="";
    if (this.props.page === "home") {
      homeActive = "nav-item active";
      ticActive = "nav-item ";
    } else if (this.props.page === "tic") {
      homeActive = "nav-item";
      ticActive = "nav-item active";
    }
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
        <div className="navbar-brand brand">React</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <li className={homeActive}>
              <a onClick={this.props.homeClick} className="nav-link" href="/">Home</a>
              {/* <a onClick={this.props.homeClick} className="nav-link" href="/">Home<span className="sr-only">(current)</span></a> */}
            </li> 
            <li className={ticActive}>
              <a onClick={this.props.ticClick} className="nav-link" href="/">Tic-tac-toe</a>
            </li>

            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Something else here</a>
              </div>
            </li>             */}
          </ul>  
          <a className="nav-link portfolio-link" href="http://herebegregs.uk/stana/portfolio/portfolio.html">Main portfolio</a>      
        </div>
      </nav>
    )
  }
}




export default Navbar;

// https://m.pardel.net/react-and-bootstrap-4-part-1-setup-navigation-d4767e2ed9f0