import React, { useEffect, useState } from 'react';

function Update() {
    const [count,setCount] = useState(0);
    const handleIncrement= () =>{
        setCount( prevcount=>prevcount+1 );
    };
    const handleDecrement=() =>{
        setCount( prevcount=>prevcount-1 );
    };
    useEffect(() =>{
        alert("component has updated");
    },[count]);

  return (
    <div>
        <h2>changestate:{count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>decrement</button>
    </div>
  )
}

export default Update