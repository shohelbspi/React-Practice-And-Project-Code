import { useMyContext } from "../MyContext"
import E from "./E"
import F from "./F"

function B() {

    const {count} = useMyContext()
    return (
        <div className="bg-blue-400 p-10">

            <p className="text-white">{count}</p>
            B

            <E />
            <F />
        </div>
    )
}

export default B
