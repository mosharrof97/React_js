import React, { useState } from 'react'
import './style.css'
import { useFormik } from 'formik'
import * as yup from 'yup';

const YupFormValidetion = () => {

     const Formik = useFormik({
        initialValues : {
            name: '', username: '', email: '', password: ''
        },
        validationSchema: yup.object({
            name: yup.string().min(2, "Enter atleast 2 characters").required(),
            username: yup.string().min(6, "Enter atleast 6 characters").required(),
            email: yup.string().email().required(),
            password: yup.string().min(6, "Enter atleast 6 characters").required(),
        }),
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
                <input type="text" name="name" id="name"  onChange={Formik.handleChange} value={name}  required/>
                <div className='errorMsg'>{Formik.touched.name && Formik.errors.name && <span>{Formik.errors.name }</span>} </div>
            </div>
            <div className=' inputDiv'>
                <label htmlFor=" username">UserName :  </label>
                <input type="text" name="username" id="username" onChange={Formik.handleChange} value={username}  required/>
                <div className='errorMsg'>{Formik.touched.username && Formik.errors.username && <span>{Formik.errors.username }</span>} </div>
            </div>
            <div className=' inputDiv'>
                <label htmlFor=" email">Email :  </label>
                <input type="email" name="email" id="email" onChange={Formik.handleChange} value={email} required />
                <div className='errorMsg'> { Formik.touched.email && Formik.errors.email &&  <span>{Formik.errors.email }</span>} </div>
            </div>
            <div className=' inputDiv'>
                <label htmlFor=" password">Email :  </label>
                <input type="text" name="password" id="password" onChange={Formik.handleChange} value={password} required /> 
                {/* input type="password" দিলে ([DOM] Input elements should have autocomplete attributes (suggested: "current-password"): (More info: https://goo.gl/9p2vKq) <input type=​"password" name=​"password" id=​"password" value>​)  আসে. */}
                <div className='errorMsg'>{ Formik.touched.password && Formik.errors.password && <span>{Formik.errors.password }</span>} </div>
            </div>
            
            <div className=' inputDiv' >
                <button type='submit'>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default YupFormValidetion
