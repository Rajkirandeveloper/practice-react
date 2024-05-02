import React, { useState } from 'react'

const EnhancedCounter = (OrginalCounter) => {
    const NewCounter=(props)=>{
       // console.log(props)
        const [count,setCount]=useState(0)
        const IncrementCounter=()=>{
            setCount(count+1)
        }

        return(
            <OrginalCounter
            count={count}
            IncrementCounter={IncrementCounter}
            {...props}
            />
        )
    }
  return (
    NewCounter
  )
}

export default EnhancedCounter
