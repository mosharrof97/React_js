import React, { useState } from 'react'
import useFetch from './useFetch'
import Form from './Form'

const Project = () => {

    const { datas, isLodding, errors } = useFetch(
        "https://jsonplaceholder.typicode.com/users"
    )
    const [filteredData, setfilteredData] = useState(datas)



    const removedata = (id) => {
        console.log(datas)
        const filter = filteredData.filter(
            (data) => data.id !== id
        );

        setfilteredData(filter);
    }
    // const hendlesearch = (search)=>{
    //     const value= search.toLowerCase()
    //     const Filtervalue = datas.filter((data)=>{
    //         const Newdata = datas.name.toLowerCase()
    //         return Newdata.startsWith(value);
    //     })
    //     setfilteredData(Filtervalue)

    // }

    const isloddings = <p>Lodding....</p>
    const errorMessage = <p>{errors}</p>


    return (
        <div className='container-fluid'>

            <div className='row m-3'>
                {isLodding && isloddings}
                {errors && errorMessage}
                {
                    datas && datas.map((data) => {
                        return <div className=" col-3 my-3 " key={data.id}>
                            <div className=' p-3' style={{ backgroundColor: "#3d3d3d" }} >
                                <h2>Name: {data.name}</h2>
                                <p>UserName: {data.username}</p>
                                <p>Email: {data.email}</p>
                                <p> street: {data.address.street}</p>
                                <p> lat : {data.address.geo.lat}</p>
                                <button onClick={() => { (removedata(data.id)) }} >Delete</button>

                            </div>
                        </div>
                    })
                }

            </div>

        </div>
    )
}

export default Project
