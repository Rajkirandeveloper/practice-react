import React,{useState} from 'react'
import EnhancedCounter from './EnhancedCounter'

const HoverCounter = (props) => {
   // const [count,setCount]=useState(0)

   const {count,IncrementCounter}=props
  return (
    <div>
    <button onMouseEnter={IncrementCounter}>increement Counter{count}</button>
      
    </div>
  )
}

export default EnhancedCounter(HoverCounter)
