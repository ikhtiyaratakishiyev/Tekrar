import React from 'react'

const Todos = ({arr}) => {
    
    console.log(arr);
    
  return (
    <div>
        <ul>
            {arr.map((item)=><li>{item}</li>)}
        </ul>
    </div>
  )
}

export default Todos