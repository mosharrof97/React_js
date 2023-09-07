import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setcount] = useState(0)
    const [isloding, setIsloding] = useState(true)
    useEffect(() => {
        console.log('useEffect')
    }, [count])

    return (

        <div>
            {console.log("data")}
            <div>
                <h2>{count}</h2>
                <button onClick={() => {
                    setcount(count => count + 1)
                }}>+</button>
            </div>
            <div>
                <h2>{count}</h2>
                <button onClick={() => {
                    setIsloding(!isloding)
                }}>Isloding</button>
            </div>
        </div>
    )
}

export default UseEffect
