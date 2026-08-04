import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  // const [name,setName] = useState('')
  // const [email,setEmail] = useState('')


  // function nameHandler(e){
  //   setName(e.target.value)
  // }
  // function emailHandler(e){
  //   setEmail(e.target.value)
  // }
  // function handleClear(){
  //   setName('')
  //   setEmail('')
  // }

  // const [data,setData] = useState({
  //   lName :'',
  //   email:''
  // })

  // function nameHandler(e){
  //   setData({...data,lName: e.target.value})
  // }

//   function nameHandler(e) {
//   setData((prev) => ({
//     ...prev,
//     lName: e.target.value,
//   }));
// }

// function nameHandler(e){
//   setData(function(prev){
//     return({
//       ...prev,
//       lName:e.target.value
//     })
//   })
// }

  // function emailHandler(e){
  //   setData({...data,email : e.target.value})

  // }
  // function handleClear(){
  //   setData({
  //     lName:'',
  //     email:''
  //   })

  // }

  const [data,setData] = useState({
    name:'',
    email:'',
    phoneNumber: ''
  })

function inputHandler(e){
  console.log(e.target.name);

  const {name,value} = e.target
  
    setData({...data,[name]:value})
  }

  function handleClear(){
    setData({
      name:'',
      email:'',
      phoneNumber:''

    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">

        <div className="space-y-5">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" onChange={inputHandler} value={data.name} name='name'
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" onChange={inputHandler} value={data.email} name='email'
          />
          <input
            type="number"
            placeholder="Enter Your Phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" onChange={inputHandler} value={data.phoneNumber} name='phoneNumber'
          />

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300" onClick={handleClear}
          >
            Clear
          </button>


        </div>
        <br />
        <br />
        <br />
        <h1>{data.name}</h1>
        <h1>{data.email}</h1>
        <h1>{data.phoneNumber}</h1>
      </div>

    </div>
  )
}

export default App
