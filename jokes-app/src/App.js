import React from 'react';

import Joke from './Joke';
import jokesData from './jokesData'

function App(){
    const jokeComponents = jokesData.map(jokeItem => <Joke key ={jokeItem.id} joke={jokeItem}/>)

    return(
        <div>
            {jokeComponents}
        </div>
    )
}


export default App;
