import React,{setState} from 'react'

const Counter = () => {
    const [count, setCount] = setState(0);

    const increment =()=>{
            setCount(count+1)
    }

    const decrement=()=>{
        setCount(count-1)

    }


    return (
    <div>
        
        <h1>Simple Counter</h1>
        <p>{count}</p>
        
        <button onClick={increment}>+</button>
        <button  onClick={decrement}>-</button>
        </div>
  )
}

export default Counter