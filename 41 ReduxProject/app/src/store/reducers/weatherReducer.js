import { FETCH_CURRENT_SUCCESS, FETCH_FORECAST_SUCCESS, FETCH_WEATHER_ERROR, FETCH_WEATHER_PENDING, SET_CITY } from '../constants/weatherConstant'

const initialState = {
    city :'Pabna',
    current : null,
    forecast : null,
    error : null,
    loading:false
}

export function weatherReducer (state=initialState,action){
    if(action.type === FETCH_WEATHER_PENDING){
        return {
            ...state,error:null,loading:true
        }
    }
    else if(action.type === FETCH_CURRENT_SUCCESS){
        return{
            ...state,loading:false,current:action.payload
        }
    }
    else if (action.type === FETCH_FORECAST_SUCCESS) {
        return{
            ...state,loading:false,forecast:action.payload
        }
    }
    else if (action.type === FETCH_WEATHER_ERROR) {
        return {
            ...state,loading:false,error:action.payload
        }
    }
    else if(action.type === SET_CITY){
        return {
            ...state,
            city:action.payload
        }
    }
    else{

        return state
    }  

}


