import React, { useState } from 'react'
import '../state/state.css'

export default function Update_State() {

    const [count, setCount] = useState(0);
const Incriment = ( ) => {
    
    setCount((count) => count+1)
    setCount((count) => count+1)
    setCount((count) => count+1)

        
    }

    const Decriment = () =>{

        setCount((count) => count-1)
        setCount((count) => count-1)
        setCount((count) => count-1)

    }

  return (
    <div className='state'>
      <h1>count: {count}</h1>
      <button onClick={Incriment} disabled={count ===30 ? true : false}>+</button>
      <button onClick={Decriment} disabled={count ===0 ? true : false}>-</button>
    </div>
  )
}
