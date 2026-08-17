import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Help from './components/Help'
import Layout from '../Layout'
import A1 from './components/A1'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />,
          loader:function(){
            return fetch("https://jsonplaceholder.typicode.com/users")
          },
          children:[
            {
              path:'a1',
              element:<A1/>
            }
          ]
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/help',
          element: <Help />
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

