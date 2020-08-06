import React from 'react';
import Quiz from './Quiz';
import quizData from '../quizData';

function QuizApp(){
    const quizComponent = quizData.map(quizItem => <Quiz quizObject = {quizItem} />)
    return(
        <div>
            {quizComponent}
        </div>
    )
}

export default QuizApp;