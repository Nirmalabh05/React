import React from 'react';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoggedIn: true
        }
    }
    render(){
        // let worddisplay;
        // if(this.state.isLoggedIn === true){
        //     worddisplay = 'in';
        // }else{
        //     worddisplay = 'out'
        // }
        return(
            <div>
                <h1>You are currently logged {this.state.isLoggedIn == true ? 'in' : 'out' }</h1>
            </div>
        )
    }
}

export default App;