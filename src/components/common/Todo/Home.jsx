import React, { useState } from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'
import {v4 as uuidv4} from "uuid";

const Home = () => {

 const demoTodo = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      rating: {
        rate: 3.9,
        count: 120
      }
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Sol 'id' stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
    
      
    }
]
const [todos, settodos] = useState([])

const addNewtodo=(todo)=> {
    settodos((oldtodos)=> {
        return [... oldtodos, {id: uuidv4(), todo}];
    });
};
const removeTodo = (id)=>{
    // alert(id)
    const filtertodos = todos.filter((todo) => todo.id != id)
    settodos(filtertodos);

}


  return (
    <div>
        <NewTodo  addNewtodo={addNewtodo}/>
      <Todos todos={todos}  onRemove={removeTodo}/>
    </div>
  )
}

export default Home
