import React from 'react'
import useFatch from './UseFatch'


const DataFatch = () => {
  
   const {data, isLoding, error } = useFatch(
    "https://jsonplaceholder.typicode.com/todos" 
   )
    const loadingMessage = (<p>Todos is Loading</p>)
    const errorMessage = (<p>{error}</p>)

    const todosElement = 
    data &&  data.map((data)=> {
            return  <p style={{backgroundColor: "#454545", margin: "5px", padding: "5px"}} key={data.id}>{data.title}</p>
        })
    
  return (
    <div>
      <h2>Todo data</h2>
      {error && errorMessage}
      {isLoding && loadingMessage}
      {todosElement}
    </div>
  )
}

export default DataFatch
