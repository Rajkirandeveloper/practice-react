import React from 'react'
import { useContext } from 'react'
import { ContextAPi } from '../context/UserContext'

const GetContextApi = () => {
const data=useContext(ContextAPi)
 const {getOnePlusOne}=data

  return (
    <div>
    <button onClick={()=>getOnePlusOne(10,30)}>Click</button>
      
    </div>
  )
}

export default GetContextApi
