import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Layout from "./components/Layout"


function App() {
  const [data, setData] = useState('Shohel Hossain')

  function childDataReceive(data){
    console.log('Receive');
    
    setData(data)
  }
  console.log(data);
  
  

  return (
    <div>
      <Header data={data} func={childDataReceive}/>

    </div>
  )
}

export default App
