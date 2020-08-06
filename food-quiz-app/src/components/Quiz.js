import React from 'react';

function Quiz(props){
    return(
        <div className='quiz-component'>
            <h2>Question: {props.quizObject.question}</h2>
            <input type='radio' /><span>{props.quizObject.option1}</span>
            <input type='radio' /><span>{props.quizObject.option2}</span>
            <input type='radio' /><span>{props.quizObject.option3}</span>
            <input type='radio' /><span>{props.quizObject.option4}</span>
            <h3>Answer: {props.quizObject.answer}</h3>
            <hr/>
        </div>
    )
}

export default Quiz;