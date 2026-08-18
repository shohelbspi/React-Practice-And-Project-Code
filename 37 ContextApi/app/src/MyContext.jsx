import { createContext, useContext, useState } from "react";

const MyContext = createContext()


function MyContectProvider({children}){

    const [count,setCount] = useState(0)

    const value = {
        count,
        setCount
    }
    return(
        <MyContext.Provider value={value}>

            {children}
        </MyContext.Provider>
    )
}

function useMyContext (){
    return useContext(MyContext)
}

export { MyContectProvider, useMyContext }