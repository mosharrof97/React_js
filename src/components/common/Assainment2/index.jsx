import React, { useState } from 'react'
import '../state/state.css'

export default function Assainment2() {
    const [count, setCount] = useState(0); //useState()
    const Incriment = () =>{
        setCount(count + 1);
    }
    const Decriment= () => {
        setCount( count - 1);

    }
    const Restart = () =>{
        setCount(count * 0)
    }

  return (
    <div className='state'>
        <h1>Assainment2</h1>
        <h1> Count: {count}</h1>
        <div>
            <button onClick={Incriment} disabled={count===5 ? true : false}>+</button>
            <button onClick={Decriment} disabled={count=== -5 ? true : false} >-</button>
            <button onClick={Restart} >0</button>
        </div>      
    </div>
  )
}
