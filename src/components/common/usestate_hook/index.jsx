import React, { useState } from 'react'
import '../state/state.css'

export default function UsestateHook() {

    const [count, addcount] = useState(0);
   const incriment = () => {
         addcount(count +1);
    }
    const decriment = ()=> {
        addcount(count - 1)
    }


  return (
    <div className='state'>
        <h1>count: {count}</h1>
      <button onClick={incriment} disabled={count ===20 ? true : false}>+</button>
      <button onClick={decriment} disabled={count === 0 ? true : false}>-</button>
      
    </div>
  )
}
