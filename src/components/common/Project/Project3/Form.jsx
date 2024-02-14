import React, { useEffect, useState } from 'react'

const Form = (props) => {

//   const [searchdata, setSearchdata] = useState()
//   const hendleChange= (event)=>{
//     setSearchdata(event.target.value)
//   }
// useEffect(()=>{
//   props.hendlesearch(searchdata)
// })

function hendleChange(e){
    const searchKey = e.target.value;
    props.hendlesearch(searchKey) 
  }

  return (
    <div className='container-fluid'>
        <div className='row d-flex justify-content-center'>
            <div className='cel-4 '>
                <form action="" >
                    <input type="text" name=" " id=" " onChange={hendleChange} />
                </form>

            </div>

        </div>
    </div>
  )
}

export default Form
