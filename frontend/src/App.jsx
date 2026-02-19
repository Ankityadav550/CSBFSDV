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
    setData(data.msg.products);
    }
    catch(err){
      console.log(err);
    }
    finally{
      setloader(false);
    }
   
  }

  function cartItem(ele){
    alert(ele);
  }

  return (
    <>
      <h2>Fetching Data from node server</h2>
      {
        data.map((ele)=>(
          <div style ={{border:"1px solid black",margin:"10px",padding:"10px"}}>
            <h2> {ele.id}:{ele.title}</h2>
            <h3>{ele.description}</h3>
            <h2>{ele.price}</h2>
            <h2>{ele.rating}</h2>
            <button onClick={()=>cartItem(ele)}>Add to cart</button>
          </div>
        ))
      }
      {/* {JSON.stringify(data)} */}
      <button onClick={getData}>FetchData</button>
      {
        loader ?(<p style={{color:"yellow"}}>Loading...</p>) : null
      }
    </>
  )
}

export default App