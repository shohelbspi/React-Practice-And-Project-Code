import './App.css'
import axios from 'axios'

function App() {

  async function fetchData() {
    // const response = await fetch("https://jsonplaceholder.typicode.com/users")

    // const data = await response.json()
    // console.log(data);
    
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then(function(response){
  //     return response.json()
      
  //   }).then(function(data){
  //     console.log(data);
      
  //   })

    let data = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data);
    

  }



  return (

    <div>
      <h1>App Component</h1>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  )
}

export default App
