import React, { useEffect, useState } from 'react'

const useFetch = (url ) => {
    const [datas, setDatas] = useState(null) 
    const [isLodding, setIsLodding] = useState(true) 
    const [errors, setErrors] = useState(null) 


    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw Error("fetching is Not Successful");
            }else{
                return  res.json()
            }
        })
        .then((data)=>{
            setDatas(data)
            setIsLodding(false)
            setErrors(null)
        })
        .catch((error)=>{
            setErrors(error.message);
            setIsLodding(false)
        })
    }, [url])

    
        return {datas, isLodding, errors}
   
}
export default useFetch 
