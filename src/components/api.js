import axios from 'axios'
import React from 'react'
const url="http://localhost:3004/products"

export const GetData = async () => {
 const data=await axios.get(url)
 let jsondata=await data.json()
 return jsondata
  
}


