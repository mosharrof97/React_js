import React, { useEffect, useState } from 'react'

const useFatch = (api) => {
    
    const [data, setData] = useState(null);
    const [isLoding, setIsLoding] = useState(true);
    const [error, seterror] = useState(null);
    useEffect(()=>{
        fetch(api)
        .then((res)=>{
            if (!res.ok ) {
                throw Error("Fetching is not successful");
            } else {            
            return res.json();
            }
        })
        .then((data)=>{
            setData(data);
           setIsLoding(false);
           seterror(null);
        })
        .catch((error)=>{
            seterror(error.message);
            setIsLoding(false);
        })
    },[api]);

    return {data, isLoding, error }
    
}

export default useFatch
