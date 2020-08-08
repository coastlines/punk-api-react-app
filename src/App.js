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
          console.log(examples)
            this.setState({beers: examples})
        })
  }


  render(){
    return(
      <div className="App">
         <div >
           {this.state.beers.map((beer, index)=>{
             return (
               <div key = {index}>
                 <List beer = {beer}  likes = {this.state.likes} counter = {this.Counter} />
                 
               </div>             
              )
           })}
         </div>
      </div>
    )
  }
 
}

export default App;

