import React, { Component } from 'react';

class StartAgainButton extends Component {
    handleClick = () => {
        this.props.resetQuiz();
    }    
    render() {
        return(
            <button className="start-again-button start-button" onClick = {this.handleClick}>Try again</button>
        );
    }    
}

export default StartAgainButton;