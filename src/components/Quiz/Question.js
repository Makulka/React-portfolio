import React, { Component } from 'react';
import './QuizPage.scss';

class Question extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        e.preventDefault();
        const {setCurrent, setScore, question} = this.props;
        let selected = e.target.value;
        if (selected === question.correct) {
            setScore(this.props.score+1);
        }
        setCurrent(this.props.current+1);
    }
    render() {
        const question = this.props.question;
        return(        
            <div className="card">
                <div className="card-header quiz-heading">
                    <h3>{question.text}</h3>
                </div> 
                <ul className="card-body">
                    {
                        question.choices.map(choice => {
                            return(
                                <li className="list-group-item" key={choice.id}>
                                    {choice.id} <input type="radio" onChange={this.onChange} name={question.id} value={choice.id}/> {choice.text}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
    
}

export default Question;