import { useState } from "react"

function App() {

  const [name, setName] = useState('')

  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Name"
        className="
    mt-5
    w-full
    max-w-md
    mx-auto
    block
    px-4
    py-3
    text-gray-700
    bg-white
    border
    border-gray-300
    rounded-xl
    shadow-md
    outline-none
    transition-all
    duration-300
    focus:border-blue-500
    focus:ring-4
    focus:ring-blue-200
    focus:shadow-lg
    placeholder:text-gray-400
  "
  value={name}
        onChange={function (e) {
          setName(e.target.value)
        }}
      />

      <button onClick={function(){
        setName('')
      }} className="bg-[tomato] p-4 rounded-2xl">Clear</button>

      <h1>{name}</h1>
    </>
  )
}

export default App
