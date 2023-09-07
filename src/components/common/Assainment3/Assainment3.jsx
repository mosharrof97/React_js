import React, { useState } from 'react'
import Newdata from './form'
import './style.css'

const Assainment3 = () => {
    const [fdata, setdata] = useState([]);
    const formdata = (data) => {

        setdata((olddata) => {
            return [...olddata, data]
        })

    }
    return (
        <div>
            <div>
                <Newdata formdata={formdata} />
            </div>
            <div className='tablediv row'>
                {
                    fdata.map((data) => {
                        return (
                            <div className=' tabledata col-4'>
                                <div className=' tabledataChild'>
                                    <h2>{data.title}</h2>
                                    <p>{data.desc}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Assainment3
