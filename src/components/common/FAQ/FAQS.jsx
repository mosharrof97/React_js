import React from 'react'
import data from './data'
import FAQ from "./FAQ"

const FAQS = () => {


  return (
    <div className=' ' >
      {data.map(Faqdata=> <FAQ key ={Faqdata.id}  {...Faqdata}/>)}
    </div>
  )
}

export default FAQS
