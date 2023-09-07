import React, { Component } from 'react';


export default class states extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0 ,
         count1 : 2 ,
      }
    }

    incriment=()=>{
        this.setState({
         count: this.state.count +2,
         count1: this.state.count1 *2

        })
    }
    decriment=()=>{
        this.setState({
         count: this.state.count -2,
         count1: this.state.count1 /2

        })
    }
    
    
  render() {
    const {count}=this.state;
    const {count1}=this.state;
    return (
      <div className='state'>
         <h1>Count : {count}</h1>
         <h1>Count : {count1}</h1>
         <button onClick={this.incriment} disabled={ count===10 || count1===100 ? true : false}>+</button>
         <button onClick={this.decriment} disabled={ count===0 || count===0 ? true : false}>-</button>
      </div>
    )
  }
}
