import React from 'react'

const Child = (props) => {
    const [name,setName]=React.useState('')
   
   function HandleChange(e){
    setName(e.target.value)
   }
   function HandleSubmit(e){
    e.preventDefault()
    props.onSubmit(name)
   // console.log(name,"in Child.js")
   }

  return (
    <div>
    <form onSubmit={HandleSubmit}>
    <input type="text" value={name} onChange={HandleChange}/>
    <button type='submit'>Click</button>
    </form>

      
    </div>
  )
}

export default Child
