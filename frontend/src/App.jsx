import { useState } from 'react'
import './App.css'

function App() {

  const [data,setData] = useState([]);
  const [loader,setloader] = useState(false);

  async function getData(){
    try{
       setloader(true);

    const serverData = await fetch("http://localhost:4004/data")
    const data = await serverData.json()
    console.log(data)
    setData(data)
    }
    catch(err){
      console.log(err);
    }
    finally{
      setloader(false);
    }
   
  }

  return (
    <>
      <h2>Fetching Data from node server</h2>
      {JSON.stringify(data)}
      <button onClick={getData}>FetchData</button>
      {
        loader ?(<p style={{color:"yellow"}}>Loading...</p>) : null
      }
    </>
  )
}

export default App