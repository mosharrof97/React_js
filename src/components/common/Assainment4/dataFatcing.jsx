import React, { useEffect, useState } from 'react'

const DataFatcing = () => {
    const [datas, setData] = useState(null)
    const [isloding, setIsloding] = useState(true)
    const [error, setError] = useState(null)

    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(!res){
                throw Error("Fetching is not Successful")
            }else{
            return res.json()
            }
        })
        .then((data)=>{
            setData(data)
            setIsloding(false)
            setError(null)
        })
        .catch((error)=>{
            setIsloding(false)
            setError(error.message)
        })
    }, [])

    const lodding =<p>Lodding.... </p>
    const errorMessage = <p>{error}</p>;


    console.log(datas)
  return (
    <div className='row d-flex m-3'>
        {isloding && lodding}
        {error && errorMessage}
        {datas && datas.map((data)=>{
            return <div className='col-3 my-3'  key={data.id}>
                <div className='p-3 'style={{backgroundColor: "#525252", borderRadius: "5px"}}>
                    <h2>{data.name}</h2>
                        <p>{data.username}</p>
                        <p>{data.email}</p>
                        <p>{data.address.street}</p>
                        <p>{data.address.geo.lat}</p>

                    </div>

                </div>
        })}
      
    </div>
  )
}

export default DataFatcing
