import React from "react";




export const ContextAPi= React.createContext()

export const CotextProvider=({children})=>{
    const [dataset,SetdataSet]=React.useState([])
    return(
        <ContextAPi.Provider value={{dataset,SetdataSet}}>
          {children}
        </ContextAPi.Provider>
    )
}


