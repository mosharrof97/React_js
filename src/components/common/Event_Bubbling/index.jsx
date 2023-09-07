import React, { useState } from 'react'
import '../state/state.css'


export default function Event_Bubbling() {
  const  [hello, setHi] = useState('Hello')

    const parentEvent = (event ) => {
        console.log( "Parent Event call", event )
    };
    const childEvent = (event ) => {
        event.stopPropagation()
        console.log( "Child Event call", event  )
        hello === "Hello" ? setHi( 'Hi') :  setHi( "Hello")
       
    };

  return (
    <div className='state' onClick={parentEvent}>
      <h1>Event_Bubbling</h1>
      <h1>{hello}</h1>
      <button onClick={childEvent} >{hello}</button>
    </div>
  )
}
