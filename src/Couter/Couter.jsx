import React, { useState } from 'react'

export default function MyCounter() {

    const [data,setdata]=useState(0);
    const handelIncrement = ()=>{
        setdata(data+1);
    }
    const handelDiccrement = ()=>{
        setdata(data-1);
    }
    const Handelreset = ()=>[
        setdata(0)
    ]
  return (
       <div>
            <div>
                 <input type="text" value={data} style={{width:100, padding:'10px'}}/>
            </div>
         <div>
           <button style={{background:"black", color:"white", padding:'10px'}} onClick={handelDiccrement}>Decrement--</button>
           <button style={{background:"black", color:"white",padding:'10px'}} onClick={handelIncrement}>Increment++</button>
           <button style={{background:"green", color:"white",padding:'10px'}} onClick={Handelreset}>Reset</button>
           
         </div>
       </div>
  )
}
