import { useState } from 'react'

function Home() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount((v) => v+=1)}>count</button>
            <div>{ count }</div>
        </div>
    )
}

export default Home;
