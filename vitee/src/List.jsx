import React from 'react'

const List = ({list,deleteItem,edititem}) => {
  return (
        
         <ul>
      {list.map((value, index) => (
        <li key={index}>{value} <button onClick={()=>deleteItem(index)} >delete</button>
           <button onClick={()=>edititem(index)} >Edit</button> </li>
      ))}
    </ul>

  )
}

export default List