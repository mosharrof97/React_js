import React from 'react'
import './style.css'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Formik3 = () => {
  const Formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      password:""
    },
    validationSchema: yup.object ({
      name: yup.string().min(3, "Enter Atleast 3 characters").required(),
      email: yup.string().email().required(),
      password: yup.string().min(6, "Enter Atleast 6 characters").required(),
    }),
    onSubmit:(values, {resetForm})=>{
    console.log(values)
    resetForm(values)}
  })

 

  
  return (
    <div className='container-fluid bg-dark'>
      <div className=' d-flex justify-content-center py-5'>
        <form className='p-5 shadow bg-light fromControl justify-content-center' onSubmit={Formik.handleSubmit}>
          <div className='inputDiv'>
            <label htmlFor="name">Name :</label>
            <input type="text" name="name" id="name" onChange={Formik.handleChange} value={Formik.values.name}/>
            <div className='errorMsg'>{Formik.touched.name && Formik.errors.name && <span>{ Formik.errors.name}</span> }</div>
          </div>
          <div className='inputDiv'>
            <label htmlFor="email">Email :</label>
            <input type="text" name="email" id="email" onChange={Formik.handleChange} value={Formik.values.email} />
           <div className='errorMsg'>{Formik.touched.name && Formik.errors.email && <span>{ Formik.errors.email}</span> }</div> 
          </div>
          <div className='inputDiv'>
            <label htmlFor="password">Password :</label>
            <input type="text" name="password" id="password" onChange={Formik.handleChange} value={Formik.values.password} />
            <div className='errorMsg'>{Formik.touched.name && Formik.errors.password && <span>{ Formik.errors.password}</span> }</div>
          </div>
          <div className='inputDiv'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Formik3
