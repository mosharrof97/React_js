import React, { useEffect, useState } from 'react'

const loadingMessage = <p>Todos is Loading</p>;

const FetcingData = () => {
    const [todos, settodo] = useState(null);
    const [isLoding, setIsLoding] = useState(true);
    const [error, seterror] = useState(null);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
            if (!res.ok ) {
                throw Error("Fetching is not successful");
            } else {            
            return res.json();
            }
        })
        .then((data)=>{
           settodo(data);
           setIsLoding(false);
           seterror(null);
        })
        .catch((error)=>{
            seterror(error.message);
            setIsLoding(false);
        })
    },[ ]);
    const todosElement = 
        todos &&  todos.map((data)=> {
            return  <p style={{backgroundColor: "#454545", margin: "5px", padding: "5px"}} key={data.id}>{data.title}</p>
        })
    
  return (
    <div>
      <h2>Todo data</h2>
      {error && <p>{error}</p>}
      {isLoding && loadingMessage}
      {todosElement}
    </div>
  )
}

export default FetcingData
