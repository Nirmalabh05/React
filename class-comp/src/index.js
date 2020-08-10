import React, { Component } from "react";
import ReactDom from "react-dom";

class App extends React.Component{
    render(){
        return(
            <div>
                <Header userName = {"Nirmala"}/>
                <Greeting />
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <header>
                <p>Welcome, {this.props.userName}!</p>
            </header>
        )
    }
}
class Greeting extends React.Component{
    render(){
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;

        if(hours < 12){
            timeOfDay = 'Morning';
        }
        else if(hours > 12 && hours < 17){
            timeOfDay = 'Afternoon'
        }
        else{
            timeOfDay = 'Evening'
        }
        return(
            <div>
                <p>Good {timeOfDay} to you, sir or madam!</p>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById("root"));