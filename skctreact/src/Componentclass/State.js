import React, { Component } from 'react'

export default class State extends Component {
    constructor() {
                   super();
                   this.state={
                    count:0
                   }
    }
      incrementCount = () => {
      this.setState({count:this.state.count+1});
    };
      decrementCount = () => {
      this.setState({count:this.state.count-1});
    };
    render() {
        return (<div>
        <h1>THis is a State</h1>
        <h2>Count:{this.state.count}</h2>
        <button onClick={this.incrementCount}> Increment</button>
        <br></br>
        <br></br>
        <button onClick={this.decrementCount}> decrement</button>

        </div>
        
        
        )
        
       
  }
}
