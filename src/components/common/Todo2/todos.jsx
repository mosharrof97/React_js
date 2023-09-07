import React from 'react'
import Todo from './todo'

const Todos = ( props) => {
    // const {name, course} = props.todos

    // const todo =() => {
       

    // }
    // const todo = []
    //  todo = props.todos.map((todo) => {
    //     console.log (todo)
    //     return <Todo todo= {todo.todo} key = {todo.id}  />
    // })

  return (
    <div>
      {
     props.todos.map((todo) => {
        
        return <Todo todo= {todo} key = {todo.id}  onRemove={props.onRemove} />
    })
        
    }
    </div>
  )
}

export default Todos
