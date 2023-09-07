import React, { Component } from 'react';
import './state.css';

export default class State extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count: 0,
      }
    }
    incriment1 =()=>{
        this.setState({
            count : this.state.count +1,
        })

    }
    decriment1 =()=>{
        this.setState({
            count : this.state.count -1,
        })

    }
    
  render() {

    const {count} = this.state;
    return (
        
      <div className='state'>
            <h1>State</h1>
            <h1>count: {count}</h1>
            <button onClick={this.incriment1} disabled={count===100 ? true : false}> + </button>
            <button onClick={this.decriment1} disabled={count===0 ? true : false}> - </button>
      </div>
    )
  }
}
