import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import './style.css';
const ToastMassege = () => {

    const ToastMassege = ()=> toast( "Toast Massege Successful")
  return (
    <div>
      <h2>Toast Massege</h2>
      <button  onClick={ToastMassege}>Toast Massege</button>
      <ToastContainer  />
    </div>
  )
}

export default ToastMassege
