import { useDispatch, useSelector } from 'react-redux'
import { fetchWeatherData, setCity } from '../store/actions/weatherAction'

function Search() {

    const dispatch = useDispatch()
    const city = useSelector(state => state.weatherReducer.city)
    console.log(city);
    
    

    function handleSearchInput(e){
            dispatch(setCity(e.target.value))

    }

    function handleSearchButton(){
        dispatch(fetchWeatherData(city))
    }

    

    return (

        <div className="w-full flex justify-center px-4 py-10">

            <div className="join w-full max-w-2xl">

                <label
                    className="
                        input
                        join-item
                        flex-1
                        flex
                        items-center
                        gap-2
                        border
                        border-accent
                        hover:border-accent
                        focus-within:border-accent
                    "
                >

                    <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >

                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >

                            <circle
                                cx="11"
                                cy="11"
                                r="8"
                            />

                            <path d="m21 21-4.3-4.3" />

                        </g>

                    </svg>

                    <input
                        type="search"
                        placeholder="Search product..."
                        className="grow outline-none"
                        value={city}
                        onChange={handleSearchInput}

                    />

                </label>


                <button className="btn btn-accent join-item" onClick={handleSearchButton}>

                    Search

                </button>

            </div>

        </div>

    )

}

export default Search