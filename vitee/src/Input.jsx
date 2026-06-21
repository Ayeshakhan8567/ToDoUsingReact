import React, { useState } from 'react'


const Input = ({task,settask}) => {
    
    
  return (
    <label > Add a task
        <input  type="text" value={task} onChange={(e)=>settask(e.target.value)}/>
    </label>
  )
}

export default Input