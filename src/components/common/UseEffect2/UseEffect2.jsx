import React, { useEffect, useState } from 'react'


const UseEffect2 = () => {
    const [todos, settodo] = useState(null)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
           settodo(data)
            console.log(todos)
        })
    },[])
  return (
    <div>
      <h2>Todo data</h2>
      {
        todos && todos.map((data)=>{
            return <p style={{backgroundColor: "#454545", margin: "5px", padding: "5px"}} key={data.id}>{data.title}</p>
        })
      }
    </div>
  )
}

export default UseEffect2
