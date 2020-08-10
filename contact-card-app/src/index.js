import React from "react";
import ReactDom from "react-dom";
import './index.css';

function App (){
  return(
    <div>
      <Header />
      <Greeting />
    </div>
  )
}

function Header(props){
  return(
    <header>
      <p>Welcome, {props.userName}!</p>
    </header>
  )
}

function Greeting(){
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

ReactDom.render(<HelloWorld />, document.getElementById("root"));