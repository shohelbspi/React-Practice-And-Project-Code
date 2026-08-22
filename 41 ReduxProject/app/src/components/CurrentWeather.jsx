import { useSelector } from 'react-redux'

function CurrentWeather() {

    const current = useSelector(state => state.weatherReducer.current)
    const loading = useSelector(state => state.weatherReducer.loading)
    const error = useSelector(state => state.weatherReducer.error)

    if (!current || loading || error) {
        return null
    }

    const { name, sys, main, weather, wind } = current
    const icon = weather?.[0]?.icon
    const description = weather?.[0]?.description

    return (
        <div className="w-full flex justify-center px-4 py-6">
            <div className="card w-full max-w-2xl bg-base-200 shadow-md">
                <div className="card-body items-center text-center">

                    <h2 className="card-title text-2xl">
                        {name}{sys?.country ? `, ${sys.country}` : ''}
                    </h2>

                    {icon && (
                        <img
                            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                            alt={description}
                            className="w-24 h-24"
                        />
                    )}

                    <p className="text-5xl font-bold">
                        {Math.round(main?.temp)}°C
                    </p>

                    <p className="capitalize opacity-70">{description}</p>

                    <div className="flex gap-6 mt-4 text-sm opacity-80">
                        <span>Feels like {Math.round(main?.feels_like)}°C</span>
                        <span>Humidity {main?.humidity}%</span>
                        <span>Wind {wind?.speed} m/s</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CurrentWeather
