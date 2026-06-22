import React from 'react'
import Input from './Input.jsx'

const SaveButton = ({savetask,className}) => {
   
  return (
    <button className={`px-2 py-1 mt-5 rounded text-centre ${className}`} onClick={savetask}>Save</button>
  )
}

export default SaveButton