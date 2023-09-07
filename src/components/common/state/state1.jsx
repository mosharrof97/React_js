import React, { Component } from 'react'

export default class state1 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
         
      }
    }
    incriment2 = ()=> {
        this.setState({
            count : this.state.count +1
        })
    }
    decriment2 = ()=> {
        this.setState({
            count : this.state.count -1,
           
        })
    }
    
  render() {
    const {count} = this.state
  
    return (
      <div className='state'>
        <h1>count : {count}</h1>
        
        <button onClick={this.incriment2} disabled={count===10 ? true : false}>+</button>
        <button onClick={this.decriment2} disabled={count===0 ? true : false}>-</button>
      </div>
    )
  }
}

