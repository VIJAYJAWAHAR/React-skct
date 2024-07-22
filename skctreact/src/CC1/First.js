import React, { Component } from 'react'
import Man from "../Img/Mango.jpeg"
import Ban from "../Img/Banana.jpeg"

export default class First extends Component {
  constructor() {
                 super();
                 this.state={
                  count:0,
                  countbanana:0,total:0
                 }
                 
                
  }
    mangoCount = () => {
    this.setState({count:this.state.count+1});
  }
    bananaCount = () => {
    this.setState({countbanana:this.state.countbanana+1});
  }
  render() {
      return (<div>
        <center>
      <h2>Rob ate {this.state.count} Mangoes and {this.state.countbanana} Bananas </h2>
      <img src={Man}height={50}></img>
      <br></br>
      <button onClick={this.mangoCount}> Mango+1</button>
      <br></br>
      <br></br>
<img src={Ban}height={60}width={60}></img>
<br></br>

      <button onClick={this.bananaCount}> Banana+1</button>
</center>
      </div>
      
      
      )
      
     
}
}
