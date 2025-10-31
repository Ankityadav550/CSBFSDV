import {useState} from 'react'
import React from 'react'

function Statehandling() {

    const[counter,setCounter]=useState(20);      //counter's initial value is 20

    function increaseCount(){
        setCounter(counter+5);
    }
    function decreaseCount(){
        setCounter(counter-4);
    }
  return (
    <div>
      <div>
        <h2>Counter value={counter}</h2>
        <button onClick={increaseCount}>Increment Count</button>
        <button onClick={decreaseCount}>decrease Count</button>
        <button onClick={()=>{setCounter(counter-2)}}>decrease Count</button>
        

      </div>
    </div>
  )
}

export default Statehandling
