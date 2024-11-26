import React from "react";

const Increment = ({number,setNumber}) => {
    console.log(number);
    
  return (
    <div className="flex justify-center flex-col items-center gap-5">
      <div className="flex   gap-3 rounded-sm">
        <button style={{backgroundColor:number===10? "green": ""}} disabled={number ===10 } onClick={()=>setNumber(number+1)} className="border rounded-md p-2">Increment</button>
        <button style={{backgroundColor:number===0 ? "red": ""}} disabled={number === 0} onClick={()=>setNumber(number-1)} className=" border rounded-md p-2">Decrement</button>
      </div>
        <div>{number}</div>
    </div>
  );
};

export default Increment;
