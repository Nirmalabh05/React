import React from 'react';
import ReactDom from 'react-dom';


//setState example
class App extends React.Component{

  constructor(){
    super();
    this.state = {
      count:1
    }
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick1(){
    this.setState(prevState => {
      return{
        count: prevState.count + 1
      }
    })
  }
  handleClick2(){
    this.setState(prevCount => {
      return{
        count: prevCount.count * 2
      }
    })
  }

  render(){
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick = {this.handleClick1}>Click1</button>
        <button onClick = {this.handleClick2}>Click2</button>
      </div>
    )
  }
}



ReactDom.render(<App />, document.getElementById('root'));