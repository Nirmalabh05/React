import React from 'react';

function Joke(props){
    return(
        <div>
            <h3 style ={{display: !props.joke.question && 'none'}}>Question: {props.joke.question}</h3>
            <h3 style = {{color: !props.joke.question && 'gray'}}>Punchline: {props.joke.punchline}</h3>
            <hr/>
        </div>
    )
}
export default Joke;