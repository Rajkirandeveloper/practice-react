import React ,{useEffect}from 'react'
import { GetData } from './api'

const Crud = () => {
    useEffect(()=>{
        getDataFromAPI()

    },[])

   async function getDataFromAPI(){
    const data=await GetData()
    console.log("data",data)

    }
  return (
    <div className="btn btn-primary">
      Crud Operations
    </div>
  )
}

export default Crud
