import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile' 
import Gallery from './component/Gallery'
import Statehandling from './component/Statehandling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h2>Welcome to react vite</h2>
      <h3 >
        {/* <Profile/> */}
        {/* <Gallery/> */}
        {Statehandling()}
        
      </h3>
    </div>
  )
}

export default App
