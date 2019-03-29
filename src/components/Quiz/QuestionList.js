import React, { Component } from 'react';
import './QuizPage.scss';
import Question from './Question';

class QuestionList extends Component {
    render() {
        const questionList = this.props.questions.map(question => 
            {
                if (question.id === this.props.current) {
                    return <Question key={question.id} question={question} {...this.props}/>
                } 
            }        
        )
        return(
            <div className="questions">
                {questionList}           
            </div>
        );
    }  
}

export default QuestionList;

