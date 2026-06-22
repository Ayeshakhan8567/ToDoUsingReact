import React, { useState } from 'react'


const Input = ({task,settask,className}) => {
    
    
  return (
    <label > <h1 className='font-bold'>Add a task</h1>
        <input className= { `     ${className}`} type="text" value={task} onChange={(e)=>settask(e.target.value)}/>
    </label>
  )
}

export default Input