import React from 'react'
import Input from './Input.jsx'

const SaveButton = ({savetask}) => {
   
  return (
    <button onClick={savetask}>Save</button>
  )
}

export default SaveButton