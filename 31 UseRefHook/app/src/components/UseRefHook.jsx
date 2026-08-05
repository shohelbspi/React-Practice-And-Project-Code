import React, { useRef } from 'react'

function UseRefHook() {
    const inputRef = useRef()
    
    // function handleFocus(){
    //     inputRef.current.focus();
        
    // }

    function handleChange(){
        inputRef.current.style.backgroundColor='blue';
        inputRef.current.style.borderRadius = '100%'
        
    }
  return (
    <div>
      {/* <input ref={inputRef} type="text" name="name" placeholder='Enter Your Name ' id="" /> */}

      <div ref={inputRef} className='bg-red-400 w-40 h-40' ></div>


      <button className='bg-[tomato] p-2 rounded-2xl text-2xl text-black' onClick={handleChange}>Submit</button>
    </div>
  )
}

export default UseRefHook
