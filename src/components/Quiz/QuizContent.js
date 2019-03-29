import React, { Component } from 'react';
import './QuizPage.scss';
import QuestionList from './QuestionList';
import ScoreBox from './ScoreBox';
import Results from './Results';
import StartAgainButton from './StartAgainButton'

class QuizContent extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      questions: questionList,
      score: 0,
      current: 1 //current question
    }
    this.setCurrent = this.setCurrent.bind(this);
    this.setScore = this.setScore.bind(this);
    this.resetQuiz = this.resetQuiz.bind(this);
  }
  setCurrent(current) {
    this.setState({
      current
    })
  }
  setScore(score) {
    this.setState({
      score
    })
  }
  resetQuiz() {
    this.setState({
      current: 1,
      score: 0
    })
  }
  render() {
    if (this.state.current > this.state.questions.length) {
      var scoreBox = "";
      var results = <Results {...this.state} />
      var button = <StartAgainButton resetQuiz = {this.resetQuiz} />
    } else {
      scoreBox = <ScoreBox {...this.state}/>
    }
    return (      
      <div className=""> 
        {scoreBox}
        {results}
        {button}
        <QuestionList {...this.state} setCurrent = {this.setCurrent} setScore = {this.setScore}/>        
      </div>      
    );
  }
}

export default QuizContent;


const questionList = [
  {
    id: 1,
    text: 'Ordinary table salt is sodium chloride. What is baking soda?',
    choices: [
      {
        id: 'a',
        text: 'Potassium chloride'
      },
      {
        id: 'b',
        text: 'Potassium carbonate'
      },
      {
        id: 'c',
        text: 'Potassium hydroxide'
      },
      {
        id: 'd',
        text: 'Sodium bicarbonate'
      }
    ],
    correct: 'd'
  },
  {
    id: 2,
    text: 'Ozone hole refers to',
    choices: [
      {
        id: 'a',
        text: 'hole in ozone layer'
      },
      {
        id: 'b',
        text: 'decrease in the ozone layer in troposphere'
      },
      {
        id: 'c',
        text: 'decrease in thickness of ozone layer in stratosphere'
      },
      {
        id: 'd',
        text: 'increase in the thickness of ozone layer in troposphere'
      }
    ],
    correct: 'c'
  },
  {
    id: 3,
    text: 'Pollination is best defined as',
    choices: [
      {
        id: 'a',
        text: 'transfer of pollen from anther to stigma'
      },
      {
        id: 'b',
        text: 'germination of pollen grains'
      },
      {
        id: 'c',
        text: 'growth of pollen tube in ovule'
      },
      {
        id: 'd',
        text: 'visiting flowers by insects'
      }
    ],
    correct: 'a'
  },
  {
    id: 4,
    text: 'Plants receive their nutrients mainly from',
    choices: [
      {
        id: 'a',
        text: 'chlorophyll'
      },
      {
        id: 'b',
        text: 'atmosphere'
      },
      {
        id: 'c',
        text: 'light'
      },
      {
        id: 'd',
        text: 'soil'
      }
    ],
    correct: 'd'
  },
  {
    id: 5,
    text: 'Movement of cell against concentration gradient is called',
    choices: [
      {
        id: 'a',
        text: 'osmosis'
      },
      {
        id: 'b',
        text: 'active transport'
      },
      {
        id: 'c',
        text: 'diffusion'
      },
      {
        id: 'd',
        text: 'passive transport'
      }
    ],
    correct: 'b'
  },
  {
    id: 6,
    text: 'One of the following is not a function of bones.',
    choices: [
      {
        id: 'a',
        text: 'Place for muscle attachment'
      },
      {
        id: 'b',
        text: 'Protection of vital organs'
      },
      {
        id: 'c',
        text: 'Secretion of hormones for calcium regulation in blood and bones'
      },
      {
        id: 'd',
        text: 'Production of blood corpuscles'
      }
    ],
    correct: 'c'
  },
  {
    id: 7,
    text: 'Process of cell division can take place by',
    choices: [
      {
        id: 'a',
        text: 'heterosis'
      },
      {
        id: 'b',
        text: 'fusion'
      },
      {
        id: 'c',
        text: 'mitosis'
      },
      {
        id: 'd',
        text: 'None of these'
      }
    ],
    correct: 'c'
  },
  {
    id: 8,
    text: 'Most highly intelligent mammals are',
    choices: [
      {
        id: 'a',
        text: 'whales'
      },
      {
        id: 'b',
        text: 'dolphins'
      },
      {
        id: 'c',
        text: 'elephants'
      },
      {
        id: 'd',
        text: 'kangaroos'
      }
    ],
    correct: 'b'
  },
  {
    id: 9,
    text: 'Plants absorb most part of water needed by them through their',
    choices: [
      {
        id: 'a',
        text: 'embryonic zone'
      },
      {
        id: 'b',
        text: 'growing point'
      },
      {
        id: 'c',
        text: 'root hairs'
      },
      {
        id: 'd',
        text: 'zone of elongation'
      }
    ],
    correct: 'c'
  },
  {
    id: 10,
    text: 'Prokaryotic cells lack',
    choices: [
      {
        id: 'a',
        text: 'nucleolus'
      },
      {
        id: 'b',
        text: 'nuclear membrane'
      },
      {
        id: 'c',
        text: 'membrane bound by organelles'
      },
      {
        id: 'd',
        text: 'All of these'
      }
    ],
    correct: 'd'
  }
  
]
