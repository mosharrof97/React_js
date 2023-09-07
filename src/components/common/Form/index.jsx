import React, { useState } from 'react'
import './index.css'
import Form2 from './index2.jsx'

export default function Form() {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const NameEvent = (e) => {
        setName(e.target.value);
    };
    const EmailEvent = (e) => {
        setEmail(e.target.value);
    };
    const PasswordEvent = (e) => {
        setPassword(e.target.value);
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

        <>
            <div className='state'>
                <h1>Collect form data</h1>
                <form action="" onSubmit={Submit}>
                    <div>
                        <label htmlFor="" className='text-white'>Name: </label>
                        <input type="text" onChange={NameEvent} name="" id="" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor=" " className='text-white'>Email: </label>
                        <input type="text" onChange={EmailEvent} name="" id="" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="" className='text-white'>Password: </label>
                        <input type="password" onChange={PasswordEvent} name="" id="" />
                    </div>
                    <br />
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
            

                <Form2 />

            
        </>
    )
}
