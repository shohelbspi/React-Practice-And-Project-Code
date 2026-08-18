import { useMyContext } from "../MyContext"

function F() {

    const {setCount} = useMyContext()
    
  return (
    <div className="bg-[lightseagreen] p-8">
        <p>
            <button onClick={function(){
                  setCount(prev=>prev+1)
            }}>Count</button>
        </p>
      F
    </div>
  )
}

export default F
