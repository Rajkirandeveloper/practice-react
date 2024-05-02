import React from 'react'
import EnhancedCounter from './EnhancedCounter'

const ClickCounter = (props) => {
   // const [count,setCount]=useState(0)
   console.log(props,"clicked")
   const {count,IncrementCounter}=props
  return (
    <div>
    <button onClick={IncrementCounter}>increement Counter{count}</button>
    <h1>{props.name}</h1>
      
    </div>
  )
}

export default EnhancedCounter(ClickCounter)
