import React from 'react';
// import Conditional from './Conditional';

// class App extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             isLoading:true
//         }
//     }

//     componentDidMount(){
//         setTimeout(() => {
//             this.setState({
//                 isLoading:false
//             })
//         }, 1500)
//     }

//     render(){
//         return(
//             <div>
//                 {
//                     this.state.isLoading ? <h1>Loading...</h1> : <Conditional/>
//                 }
//             </div>
//         )
//     }
// }

//Conditional Rendering Practice
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoggedIn : true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => {
            return{
                isLoggedIn : !prevState.isLoggedIn
            }
        })
    }
    render(){
        let buttonText = this.state.isLoggedIn ? 'Log In' : 'Log Out';
        let displayText = this.state.isLoggedIn ? 'You Are Logged Out' : 'You Are Logged In'
        return(
            <div>
                <button onClick = {this.handleClick}>{buttonText}</button>
                <h2>{displayText}</h2>
            </div>
        )
    }
}

export default App;