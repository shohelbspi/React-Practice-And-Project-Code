function Popup({popup,setPopup,title,desc}) {
    
    return (
        <div>
            {popup && (
                <div className='absolute top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center'>
                    <button onClick={() => {
                        setPopup(false);
                    }} className='bg-[#242424] absolute top-[1rem] right-[1rem]'>❌</button>

                    <div className='w-full h-full max-w-[40rem] max-h-[20rem] bg-[#242424] rounded-2xl p-5 flex items-center justify-center flex-col'>
                        <h1 className='text-2xl text-white'>⚠️ {title}</h1>
                        <p className='text-lg my-5 text-white'>{desc}</p>

                        <div className='flex gap-10'>
                            <button className='bg-[tomato] p-4 rounded-2xl'>No</button>
                            <button className='bg-green-500 p-4 rounded-2xl'>Yes</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Popup
