import React from 'react';

const ScoreBox = (props) => {
    return(
        <div className="score-display">
            <span>Question {props.current} out of {props.questions.length}</span><span>Score: {props.score} </span> 
        </div>
    );
}

export default ScoreBox;