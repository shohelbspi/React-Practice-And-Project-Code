import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToProdcut, Increment } from './redux/action/ProductAction'

function App() {

  const dispatch = useDispatch()

  const handleAddProduct = () => {
    dispatch(addToProdcut(
      {
        id:1,
        name :"iphone"
      }
    ))
  }

  function handleCount(){
    dispatch(Increment())
  }

  const products = useSelector(function (state) {
    return state.products
  })
  const count = useSelector(state=>state.count)



  return (
    <>
      <h1>{count}</h1>

      {JSON.stringify(products)}


      <button className='bg-[lightseagreen] mb-10' onClick={handleAddProduct}>Add Product</button>
      <br />
      <br />
      <button className='bg-[lightseagreen]' onClick={handleCount}>Count</button>
    </>
  )
}

export default App
