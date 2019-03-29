import React from 'react';

const Results = (props) => {
    if (props.score > 5) {
        var results = "Well done! You got " + props.score + " questions right."; 
    } else {
        results = "You got " + props.score + " questions right. Why not try again?"
    }
    return(
        <div className="result-display">
            {results} 
        </div>
    );
}

export default Results;