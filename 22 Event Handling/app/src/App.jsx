import './App.css'

function App() {

  // function greet() {
  //   alert('Hello Shohel Hossain ')
  // }

  // function handleInput() {
    
  //   console.log('change is input');

  // }

  // function test(event){
  //   console.log(event.target.value);
    
  //   console.log('doing test');
    
  // }

  // function testing(name){
  //   console.log(name);
  //   console.log('testing hocche');
    
    
  // }

  function handleSubmit(event){
    event.preventDefault()

    console.log('save data');
    
  }

  return (
    <>

    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter Your Name' />
      <button>Submit</button>
    </form>

      {/* <button onClick={()=>testing('Shohel')}>Clicked</button> */}
      {/* <h1 className='bg-amber-300 p-4'>Welcome to Event handling in React Js</h1>

      <div className="flex justify-center items-center">
        <button
          onClick={greet}
          className="bg-[lightseagreen] p-4 text-white rounded"
        >
          Click Me
        </button>

        <input type="text" placeholder='Enter Your Name' className='border border-amber-300 m-auto rounded-lg' onChange={handleInput} />

      </div>

      <form action="" onSubmit={handleInput} className='flex gap-4 mt-8'>
        <input type="text" placeholder='Enter Email'  className='border border-amber-500 py-4'/>
        <button className='bg-[tomato] p-4 rounded-lg'>Submit</button>
      </form>

      <button className='p-4 bg-amber-600 rounded-2xl mt-8 w-[200px] text-white' onClick={test}>Click</button> */}

      {/* <input type="text" placeholder='Enter Your Name' onChange={test}  className='mt-8 border border-amber-500'/> */}

    </>
  )
}

export default App
