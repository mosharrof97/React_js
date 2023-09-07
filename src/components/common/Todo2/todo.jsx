import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import './style.css'
// import Todoform from './todoform.jsx'


const Todo = (props) => {
 const{id,name, course} = props.todo

 const deleteTodo = (id ) => {
    props.onRemove(id)

 }
    return (
        <section className='  bg-light '>
            
            <div className=' d-flex justify-content-center border todoTable'>
                <div className='d-flex    todoTablechild '>
                    <div className=''><h2>{id}</h2></div>
                    <div className=''><h2>{name}</h2></div>
                    <div><h2>{course}</h2></div>
                    <div><button onClick={()=> {deleteTodo(id)}} ><AiFillDelete /></button></div>
                </div>
            </div>
        </section>

    )
}

export default Todo
