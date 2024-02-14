import React, { useState } from 'react'
import './index.css'

export default function Form2() {
    const [Data, setData] = useState({ Name: '', Email: '', Password: '' })
    const { Name, Email, Password } = Data

    const ChangeEvent = (e) => {
        // const fullName = e.target.name
        // if(fullName ==='name'){
        //     setData({Name: e.target.name, Email, Password })
        // }
        // if(fullName ==='email'){
        //     setData({Name, Email: e.target.name, Password })
        // }
        //  if (fullName ==='password'){
        //     setData({Name, Email, Password: e.target.name })
        // }

        setData({
            ...Data, [e.target.name]: e.target.value
        })

    };
    const Submit = (e) => {
        console.log("e.target.value");
        let UserData = {
            'Name ': Name,
            'Email ': Email,
            'Passwerd ': Password
        }
        console.log(UserData);
        e.preventDefault();
    };


    return (
        <div className='state'>
            <h1>useSatate with Object in From</h1>
            <form action="" onSubmit={Submit}>
                <div>
                    <label htmlFor="" className='text-white' >Name: </label>
                    <input type="text" onChange={ChangeEvent} name="Name" id="" />
                </div>
                <br />
                <div>
                    <label htmlFor=" " className='text-white' >Email: </label>
                    <input type="text" onChange={ChangeEvent} name="Email" id="" />
                </div>
                <br />
                <div>
                    <label htmlFor="" className='text-white' >Password: </label>
                    <input type="password" onChange={ChangeEvent} name="Password" id="" />
                </div>
                <br />
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}
