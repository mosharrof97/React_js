import { useFormik } from 'formik'
import React from 'react'

const Formik2 = () => {

    const Formik = useFormik ({
        initialValues : {
            name : "", email: "", password : ""
        },
        onSubmit : (values, {resetForm}) =>{
            console.log(values);
            resetForm({values: ""});
        }
    })

  return (
    <div className='container-fluid bg-dark'>
      <div className=' d-flex justify-content-center py-5'>
        <form className='p-5 shadow bg-light fromControl justify-content-center' onSubmit={Formik.handleSubmit}>
            <div className='inputDiv'>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={Formik.handleChange} value={Formik.values.name}/>
            </div>
            <div className='inputDiv'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={Formik.handleChange} value={Formik.values.email}/>
            </div>
            <div className='inputDiv'>
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" onChange={Formik.handleChange} value={Formik.values.password}/>
            </div>
            <div className='inputDiv'>
                <button type="submit" > Submit </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Formik2
