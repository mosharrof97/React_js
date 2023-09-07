import React, { useState } from 'react'
import './style.css'

const Toggle = () => {
    const [toggle, settoggle] =  useState(true);
  return (
    <div className='toggle'>
      
     { toggle && (<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, dolorem! Illo possimus ipsa fugit ex fuga reprehenderit corrupti non atque dolorum dolores exercitationem enim ducimus, aperiam, mollitia eligendi aliquid nam.</p>)}
      {/* <div className='buttonDiv'>
        <button onClick={()=>{settoggle(true)}}>Show</button>
        <button onClick={()=>{settoggle(false)}}>Hide</button>
      </div> */}
       <div className='buttonDiv'>
        
        <button onClick={()=>{settoggle(! toggle)}}>{toggle ? "Hide" : "Show" }</button>
      </div>
      
    </div>
  )
}

export default Toggle
