import React, { useState } from 'react'
import './formik.css'
import { useFormik } from 'formik'

const Formik = () => {

    // const [data, setdata] = useState({name: '', username: '', email: '', password: ''});
    // const {name, username, email, password} = data

    // const formData = ( event ) => {
    //     setdata((olddata)=>{
    //         return ({ ... olddata, [event.target.name] : event.target.value})
    //     })
    // }
    // const formSubmit = ( event) => {
    //     event.preventDefault();
    //     console.log(data);
    //     setdata({name: '', username: '', email: '', password: ''});
    // }
     const Formik = useFormik({
        initialValues : {
            name: '', username: '', email: '', password: ''
        },
        onSubmit: (values, { resetForm})=> {
            console.log(values);
            resetForm({values : ""});
        }

     } )

     const {name, username, email, password} = Formik.values

  return (
    <div className='container-fluid bg-dark'>
      <div className=' d-flex justify-content-center py-5'>
        <form className=' p-5 shadow bg-light fromControl justify-content-center' onSubmit={Formik.handleSubmit}>
            <div className=' inputDiv'>
                <label htmlFor=" name">Name :  </label>
                <input type="text" name="name" id="name"  onChange={Formik.handleChange} value={name} />
            </div>
            <div className=' inputDiv'>
                <label htmlFor=" username">UserName :  </label>
                <input type="text" name="username" id="username" onChange={Formik.handleChange} value={username} />
            </div>
            <div className=' inputDiv'>
                <label htmlFor=" email">Email :  </label>
                <input type="email" name="email" id="email" onChange={Formik.handleChange} value={email}  />
            </div>
            <div className=' inputDiv'>
                <label htmlFor=" password">Email :  </label>
                <input type="text" name="password" id="password" onChange={Formik.handleChange} value={password}  /> 
                {/* input type="password" দিলে ([DOM] Input elements should have autocomplete attributes (suggested: "current-password"): (More info: https://goo.gl/9p2vKq) <input type=​"password" name=​"password" id=​"password" value>​)  আসে. */}
            </div>
            
            <div className=' inputDiv' >
                <button type='submit'>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Formik
