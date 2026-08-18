import './App.css'
import A from './components/A'
import B from './components/B'
import {useMyContext } from './MyContext'

function App() {

  const data = useMyContext()

  return (
    <>
    <div className='bg-red-400 p-10 mt-5'>

      <h1>App Component</h1>


      <A/>
      <B/>
    </div>
    </>
  )
}

export default App
