import React from 'react';

//First class component
// class App extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             isLoggedIn: true
//         }
//     }
//     render(){
//         // let worddisplay;
//         // if(this.state.isLoggedIn === true){
//         //     worddisplay = 'in';
//         // }else{
//         //     worddisplay = 'out'
//         // }
//         return(
//             <div>
//                 <h1>You are currently logged {this.state.isLoggedIn == true ? 'in' : 'out' }</h1>
//             </div>
//         )
//     }
// }


//First state practice
// class App extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             name: 'Nirmala',
//             age: '30'
//         }
//     }

//     render(){
//         return(
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <h3>{this.state.age} years old</h3>
//             </div>
//         )
//     }
// }

//Second state practice
// class App extends React.Component{

//     constructor(){
//         super();
//         this.state = {
//             isloggedIn: true
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <h1>You are currently logged {this.state.isloggedIn ? 'In' : 'Out'}</h1>
//             </div>
//         )
//     }
// }

//Change State example - counter
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState => {
            return{
                count: prevState.count + 1
            }
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick = {this.handleClick}>Click</button>
            </div>
        )
    }
}

export default App;