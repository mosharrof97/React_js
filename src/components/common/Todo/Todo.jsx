import React from 'react'
import Table from 'react-bootstrap/Table';
import { AiFillDelete } from "react-icons/ai";

const Todo = (props) => {
    const { title, price, desc, category } = props.todo;
    const {  id } = props;
    const deleteTodo = (id) =>{
       props.onRemove(id)
    }



    return (
        <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>{price}</td>
          <td>{category}</td>
          <td>{desc}</td>
          <td>
            <button onClick={()=> {deleteTodo(id)}}><AiFillDelete /></button>
          </td>
        </tr>
        </tbody>
        </Table>
        </div>
    )
}

export default Todo
