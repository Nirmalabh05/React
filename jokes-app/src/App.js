import React from 'react';

import Joke from './Joke';

function App(){
    return(
        <div>
            <Joke joke = {{question: 'question 1', answer: 'answer 1'}} />
            <Joke joke = {{question: 'question 2', answer: 'answer 2'}}/>
            <Joke joke = {{question: 'question 3', answer: 'answer 3'}}/>
            <Joke joke = {{question: 'question 4', answer: 'answer 4'}}/>
            <Joke joke = {{question: 'question 5', answer: 'answer 5'}}/>
        </div>
    )
}

export default App;