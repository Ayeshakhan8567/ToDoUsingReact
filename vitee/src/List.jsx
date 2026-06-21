import React from 'react'

const List = ({list}) => {
  return (
        
         <ul>
      {list.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>

  )
}

export default List