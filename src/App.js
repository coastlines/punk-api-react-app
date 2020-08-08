import React from 'react';
import './App.css';
import List from "./List";




class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      beers: [],
      likes: 0
    }
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(examples => {
            this.setState({beers: examples})
        })
  }
  Counter = ()=>{
    this.setState({likes : this.state.likes + 1})
  }

  render(){
    return(
      <div className="App">
        hjjhjhjhk
         <div >
           {this.state.beers.map((beer, index)=>{
             return (
               <div>
                 <List beers = {beer} key = {index} likes = {this.state.likes} counter = {this.Counter} />
                 <button onClick ={this.Counter}>like</button>
                 <h2>{this.state.likes}</h2>  
               </div>             
              )
           })}
         </div>
      </div>
    )
  }
 
}

export default App;

