import React, { useState } from 'react'
import './todo.css'


const NewTodo = (props) => {

    const [todo, settodo] = useState({title : "",  price : "", category : "", desc : ""});
    const { title ,  price , category , desc } = todo;

    const todoChange= (event)=>{
        const name = event.target.name;
        settodo((oldtodo)=>{
            return { ... oldtodo, [name] : event.target.value}
        } )
    }
    
    const FormSubmit= (event)=>{
        event.preventDefault()
        props.addNewtodo(todo)
        settodo({title : "",  price : "", category : "", desc : ""})
    }
  return (
    <div className='todo'>
      <form onSubmit={FormSubmit}>
      {/* <div className='todoChild'>
            <label htmlFor="id">ID</label>
            <input type="text" name="id" id="id" onChange={TodoChange}/>
        </div> */}
        <div className='todoChild'>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={todoChange} value = {title} />
        </div>
        <div className='todoChild'>
            <label htmlFor="price">Price</label>
            <input type="text" name="price" id="price" onChange={todoChange} value = {price}  />
        </div>
        <div className='todoChild'>
            <label htmlFor="category">Category</label>
            <input type="text" name="category" id="category" onChange={todoChange} value = {category} />
        </div>
        <div className='todoChild'>
            <label htmlFor="desc">Description</label>
            <textarea type="text" name="desc" id="desc" onChange={todoChange} value = {desc} />
        </div>
       
            <button type="submit">Submit</button>
        
      </form>
    </div>
  )
}

export default NewTodo
