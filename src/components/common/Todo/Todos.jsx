import React from 'react';
import Todo from './Todo';

const Todos = ( props) => {

  return (
    <div>
        { props.todos.map((todo)=> (
        <Todo todo={todo.todo} key={todo.id } id= {todo.id} onRemove = {props.onRemove}/>
        ))}
    
    </div>
  )
}

export default Todos
