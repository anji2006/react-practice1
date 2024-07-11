import { useState } from "react"



const Counter = () => {
    const [count, setCount] = useState(888)

    const incrementHandle = () => {
        setCount(count + 1)
    }
    return(
        <div>
            <h2> Counter App {count}</h2>
            <button onClick={incrementHandle}> Increment clicked</button>
            <button onClick={() => setCount(count- 1)}> Decrement clicked</button>
        </div>
    )
}

export default Counter