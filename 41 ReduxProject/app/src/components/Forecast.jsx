import { useSelector } from 'react-redux'

function Forecast() {

    const forecast = useSelector(state => state.weatherReducer.forecast)
    const loading = useSelector(state => state.weatherReducer.loading)
    const error = useSelector(state => state.weatherReducer.error)

    if (!forecast || loading || error) {
        return null
    }

    return (
        <div className="w-full flex justify-center px-4 pb-10">
            <div className="w-full max-w-2xl overflow-x-auto">
                <div className="flex gap-4">

                    {forecast.map(item => {
                        const icon = item.weather?.[0]?.icon
                        const description = item.weather?.[0]?.description
                        const [date, time] = item.dt_txt.split(' ')

                        return (
                            <div
                                key={item.dt}
                                className="card bg-base-200 shadow-sm shrink-0 w-32"
                            >
                                <div className="card-body items-center text-center p-4">

                                    <p className="text-xs opacity-70">{date}</p>
                                    <p className="text-xs opacity-70">{time.slice(0, 5)}</p>

                                    {icon && (
                                        <img
                                            src={`https://openweathermap.org/img/wn/${icon}.png`}
                                            alt={description}
                                            className="w-12 h-12"
                                        />
                                    )}

                                    <p className="text-lg font-semibold">
                                        {Math.round(item.main?.temp)}°C
                                    </p>

                                    <p className="text-xs capitalize opacity-70">{description}</p>

                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Forecast
