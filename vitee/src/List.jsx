import React from 'react'

const List = ({list,deleteItem,edititem,className,className2}) => {
  return (
        
         <ul>
      {list.map((value, index) => (
        <li className={`${className}`} key={index}>{value} <div className=' flex ml-auto gap-2'><button className={ ` ${className2}`}  onClick={()=>deleteItem(index)} >Delete</button>
           <button className={`${className2}`} onClick={()=>edititem(index)} > Edit </button> 
          </div> 
           </li>
      ))}
    </ul>

  )
}

export default List