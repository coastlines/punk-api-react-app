import React from "react";
import './Pics.css'




function List(props){

  return(
    <div >
      <img className = "size" src={props.beers.image_url}/>
      <h1>{props.beers.name}h1</h1>
      <h3>{props.beers.tagline}</h3>
      <p>{props.beers.description}</p>
    </div>
 ) 

}


export default List