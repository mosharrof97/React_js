import React, { useState } from 'react'
import useFetch from './useFetch'
import Form from './Form'

const Project = () => {

    const { datas, isLodding, errors, setDatas , storeddatas} = useFetch(
        "https://jsonplaceholder.typicode.com/users"
    )
    // const [filteredData, setfilteredData] = useState(datas)



    const removedata = (id) => {
 
        const filter = datas.filter(
            (data) => data.id !== id
        );

        setDatas(filter);
    }
    const hendlesearch = (search)=>{
        // console.log(datas)
        // console.log(storeddatas)
        const searchKey= search.toLowerCase()
        const Filtervalue = storeddatas.filter((data)=>{
            const name = data.name.toLowerCase()
            return name.startsWith(searchKey);
        })
        setDatas(Filtervalue)

    }

    const isloddings = <p>Lodding....</p>
    const errorMessage = <p>{errors}</p>


    return (
        <div className='container-fluid'>
                < Form hendlesearch={hendlesearch} />
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
