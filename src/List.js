  
import React from "react";
import './Pics.css'





class List extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      likes : 0
    }
  }

  Counter = ()=>{
    this.setState({
      likes: this.state.likes + 1
    })
  }
  
  Listing = ()=>{
    console.log(this.props)
    return(
      <div >
      <img className = "size" src={this.props.beer.image_url}/>
      <h1>{this.props.beer.name}h1</h1>
      <h3>{this.props.beer.tagline}</h3>
      <p>{this.props.beer.description}</p>
      <button  onClick = {this.Counter}>like</button>
      <h2>{this.state.likes}</h2>
    </div>
    )
  }

  render(){
    return(
     <this.Listing/>  
    )
  }
}

export default List