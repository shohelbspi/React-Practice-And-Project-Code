import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Details from './components/Details'
import Help from './components/Help'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import A1 from './components/A1'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}>
          <Route path='a1' element={<A1/>}/>
        </Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/help' element={<Navigate to={'/'} />}></Route>

        <Route path="/details/:name" element={<Details />} />     

      </Routes>


    </>
  )
}

export default App
