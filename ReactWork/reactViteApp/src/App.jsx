import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      {/* <h2>Welcome to react vite</h2> */}
      <h3 >
        <Profile/>
      </h3>
    </div>
  )
}

export default App
