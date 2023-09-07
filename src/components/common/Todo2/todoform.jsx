import React, { useState } from 'react'
import './style.css'

const Todoform = (props) => {
     const [data, setdata] = useState({id:'', name: '', course : ''})

    const formData = (event)=>{
        setdata((olddata)=>{
            return({... olddata, [event.target.name] : event.target.value})
        }
            
        )
    }
    const FormSubmit = (event) => {
        event.preventDefault();
        props.newdata(data);
        setdata({id:'', name: '', course : ''})
    }

    return (
        <div className='d-flex justify-content-center'>
            <form  onSubmit={FormSubmit}>
                <div className=' formDiv'>
                    <label htmlFor="id">ID: </label>
                    <input type="text" name="id" id="id"   onChange={formData}  value={data.id}/>
                </div>
                <div className=' formDiv'>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name"   onChange={formData}  value={data.name}/>
                </div>
                <div className=' formDiv'>
                    <label htmlFor="course">Course: </label>
                    <input type="text" name="course" id="course"  onChange={formData}  value={data.course}/>
                </div>
                <div className=' formDiv'>
                    <button type='submit'> Submit</button>
                </div>

            </form>

        </div>
    )
}

export default Todoform
