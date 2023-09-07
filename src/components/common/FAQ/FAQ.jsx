import React, { useState } from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

const FAQ = ({id, title, ans}) => {
    const [toggle, setFaq] = useState(false)

  return (
    <div className='container-fluid d-flex justify-content-center ' >
        <article className='bg-light p-2 m-3  ' style={{width : "50%", }}>
            <div className='d-flex justify-content-between align-items-center'>
                <h2 className=' text-dark'>{title}</h2>
                <span style={{padding : '5px', cursor: 'pointer' }} onClick={ ()=>{ setFaq(!toggle)}} >{toggle ? <IoIosArrowDropup  /> :  <IoIosArrowDropdown />}</span>
            </div>
            { toggle && <div className=' p-3 ' style={{backgroundColor: "#e5e5e5"}}>
                <p className=' text-dark '>{ans}</p>
            </div>}
        </article>
      
    </div>
  )
}

export default FAQ
