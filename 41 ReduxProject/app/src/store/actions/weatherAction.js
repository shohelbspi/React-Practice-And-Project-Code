import { FETCH_CURRENT_SUCCESS, FETCH_FORECAST_SUCCESS, FETCH_WEATHER_ERROR, FETCH_WEATHER_PENDING, SET_CITY } from '../constants/weatherConstant'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_WEATHER_API

function fetchWeatherPending() {
    return {
        type: FETCH_WEATHER_PENDING
    }
}

function fetchCurrentSucess(data) {
    return {
        type: FETCH_CURRENT_SUCCESS,
        payload: data
    }
}

function fetchforecastSucess(data) {
    return {
        type: FETCH_FORECAST_SUCCESS,
        payload: data
    }
}

function fetchWeatherError(error) {
    return {
        type: FETCH_WEATHER_ERROR,
        payload: error
    }
}

export function setCity(city) {
    return {
        type: SET_CITY,
        payload: city
    }
}

export function fetchWeatherData(city) {
    return async (dispatch) => {
        dispatch(fetchWeatherPending())
        try {
            const currentDetails = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)

            const forecastDetails = await axios(`https://pro.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)

            dispatch(fetchCurrentSucess(currentDetails.data))
            dispatch(fetchforecastSucess(forecastDetails.data.list))

        } catch (error) {
            dispatch(fetchWeatherError('something went wrong'))

        }

    }


}
