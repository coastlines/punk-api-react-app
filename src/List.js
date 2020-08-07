import React from "react"
import App from "./App"

// function Counter (props){
//   this.setState({props.like})
// }


function List(props){

  return(
    <div >
      <img src={props.beers.image_url}/>
      <button onClick = {props.Counter}> Like </button> 
      <h1>{props.beers.name}h1</h1>
      <h3>{props.beers.tagline}</h3>
      <p>{props.beers.description}</p>
    </div>
 ) 

}


export default List