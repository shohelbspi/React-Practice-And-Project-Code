import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeatherData } from './store/actions/weatherAction'
import Search from './components/Search'
import FetchStatus from './components/FetchStatus'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
function App() {

  const dispatch = useDispatch()
  const city =  useSelector(state => state.weatherReducer.city)

  useEffect(()=>{
    dispatch(fetchWeatherData(city))
  },[])

  return (
    <>
    <Search/>
    <FetchStatus/>
    <CurrentWeather/>
    <Forecast/>
    </>
  )
}

export default App
