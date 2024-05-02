import React from 'react'

const ChildData = (props) => {
    const {formDataArray}=props
  return (
    <div>
    {
        formDataArray.map((each,index)=>{
            return(
                <div key={index}>
                <h1>Name:{each.name} ======== password:{each.password}</h1>
                </div>
            )

        })
    }
      
    </div>
  )
}

export default ChildData
