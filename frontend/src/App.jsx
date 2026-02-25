import { useState } from 'react'
import Main from './Component/Main'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  

  return (
    <>
      {/* <h2>Fetching Data from node server</h2> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes></BrowserRouter>
      
    </>
  )
}

export default App