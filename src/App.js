import React, {useState} from 'react'

const App = () => {
    const [count, setCount] = useState(0);
    return <div onClick={() => setCount((c) => c + 1)} style={{background: 'orange'}}>hello {count}</div>
}

export default App;

