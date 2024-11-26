import React, { useState } from 'react'

const Form = ({value,setValue,Submit}) => {

  console.log(value);
  

    

  return (
    <div>
        <form onSubmit={Submit} className='flex gap-5'>
            <input value={value} onChange={(e)=> setValue(e.target.value) } type="text" />
            <button>Add</button>
        </form>
        
    </div>
  )
}

export default Form