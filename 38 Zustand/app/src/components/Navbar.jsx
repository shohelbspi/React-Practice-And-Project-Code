import { useEffect } from 'react'
import useMyStore from '../Store'

function Navbar() {

//    const state =  useMyStore()
//     const handleClick = ()=>{
//         state.increment()
//     }

    const count = useMyStore(state=>state.count)
    const increment = useMyStore(state=>state.increment)
    const capitalizeName = useMyStore(state => state.capitalizeName)

    useEffect(()=>{
        console.log('re render hoiche',count);
        
    })

  return (
    <div>
      <p>{count}</p>

          <button className='bg-green-600 p-6' onClick={increment}>Increment </button>
      <br /><br />
          <button className='bg-green-600 p-6' onClick={capitalizeName}>Capitailize </button>
    </div>
  )
}

export default Navbar
