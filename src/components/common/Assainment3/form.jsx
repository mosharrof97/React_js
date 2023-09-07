import React from 'react'
import './style.css'
import { Formik, useFormik } from 'formik'
import * as yup from 'yup'

const Newdata = (props) => {

    const Formik = useFormik({
        initialValues:{
            title : '',  desc : '',
        },
        validationSchema: yup.object ({
            title: yup.string().required(),
            desc: yup.string().required(),
        }),
       
        onSubmit: (values,{ resetForm})=>{
            props.formdata(values);
            resetForm({values : ''})
        }
    })

  return (
    <div className=' main'>
        <div className=' formMain'>
            <form className='form' onSubmit={Formik.handleSubmit}>
                <div className='inputDiv'>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id=" title" onChange={Formik.handleChange} value={Formik.values.title} />
                    <div className=' errorMsg'>
                        {Formik.touched.title && Formik.errors.title && <span>{Formik.errors.title}</span>}
                    </div>
                </div>
                <div className='inputDiv'>
                    <label htmlFor="desc">Desc</label>
                    <textarea type="text" name="desc" id=" desc" onChange={Formik.handleChange} value={Formik.values.desc} />
                    <div className=' errorMsg'>
                        {Formik.touched.desc && Formik.errors.desc && <span>{Formik.errors.desc}</span>}
                    </div>
                </div>
                <div className='buttonDiv'>
                    <button type='submit'>Submit</button>
                </div>
            </form>

        </div>
      
    </div>
  )
}

export default Newdata
