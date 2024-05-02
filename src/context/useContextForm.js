import React from 'react'

import { ContextAPi } from './UserContext'

const UseContextForm = () => {
    const [value,setValue]=React.useState("")
    const data=React.useContext(ContextAPi)
    const {dataset,SetdataSet}=data

    function HandleSubmit(e){
        e.preventDefault()
        SetdataSet((prevData)=>{
          return([
            ...prevData,value
          ])
        })

        console.log("dataset",dataset)
        console.log("value",value)
    }
  return (
    <div>
    <h1>useContext Form</h1>
    <form onSubmit={HandleSubmit}>
    <input type="text"  onChange={(e)=>setValue(e.target.value)}  />
    </form>

    {
      dataset&& <div>{dataset.map((each,index)=>{
        return(
          <div key={index}>
          {each}
          </div>
        )
      })}</div>
    }
      
    </div>
  )
}

export default UseContextForm
