import React,{useReducer} from "react"
const USeReducerComponent=()=>{
    function reducer(state,action){

        if(action.type === "INC"){
            return {
                count: state.count+1
            }
        }
        if(action.type === "DEC"){
            return {
                count: state.count-1
            }
        }

    }

   const [state,dispatch]= useReducer(reducer,{count:0})

    return(
        <div>
        <h1>Count :{state.count}</h1>
        <button onClick={()=>{ dispatch({"type":"INC"})}}>Incre+</button>
        <button onClick={()=>{ dispatch({"type":"DEC"})}}>Decre-</button>
        </div>
    )
}

export default USeReducerComponent

