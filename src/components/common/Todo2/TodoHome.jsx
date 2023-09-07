import React, { useState } from 'react'
import Todoform from './todoform.jsx'
import {v4 as uuidv4} from "uuid";
import Todos from './todos.jsx'

const TodoHome = () => {

    const demoData = [
        {
            id: 1,
            name : "Mosharrof Hosain",
            course : "WDPF",
        },
        {
            id: 2,
            name : "Sheuly",
            course : "WDPF",
        },
        {
            id: 3,
            name : "Miraj",
            course : "WDPF",
        },
    ]

     const [todos, settodos] = useState([])

   const newdata =(data) =>{
    settodos((olddata)=>{
      return [...olddata, data]
     
    })
   }
   const onRemove = (id)=>{
    const datafilter =  todos.filter((todo) => todo.id != id)
    settodos(datafilter)
   }

  return (
    <div>
      < Todoform newdata ={newdata}/>
      <Todos todos={todos} onRemove= {onRemove} />
    </div>
  )
}

export default TodoHome
