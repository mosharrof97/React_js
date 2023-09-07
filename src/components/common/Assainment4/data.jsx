import React, { useEffect, useState } from 'react'
import DataFatcing from './dataFatcing'


const Data = () => {
    const [datas, setdata] = useState(null)
    const [isloding, setIsloding] = useState(false)
    const [errors, setErrors] = useState(null)
    const url = "https://jsonplaceholder.typicode.com/users"

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error("Not siccessful");
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                setdata(data)
                setIsloding(false)
                setErrors(null)
            })
            .catch((error) => {
                setErrors(error.message)
                setIsloding(false)
            }
            )
    }, [url])
    const errorMessage = (<p>{errors}</p>)
    const Loding = (<p>Loding.....</p>)

    return (
        <>
        <div className='d-flex row m-3 '>
            {isloding && Loding}
            {datas && datas.map((data) => {
                return <div className='col-3 my-3 ' key={data.id}>
                    <div className='p-3 ' style={{ backgroundColor: "#505050", borderRadius: "5px" }}>
                        <h1>{data.name}</h1>
                        <p>{data.username}</p>
                        <p>{data.email}</p>
                    </div>
                </div>
            })}
            {errors && errorMessage}
        </div>
        <h2>Data Fatcing</h2>
        <DataFatcing />
        </>
    )
}

export default Data 
