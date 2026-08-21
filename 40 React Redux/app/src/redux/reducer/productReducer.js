import { ADD_TO_PRODUCT,INCREMENT } from "../constant/productConstant";


const initialState = {
  products: [],
  count : 0
};

export function productReducer(state=initialState,action){

    if(action.type === ADD_TO_PRODUCT){
        console.log('add to product reducer',action.payload);
        return {
            ...state,
            products: [...state.products, action.payload]
        }
    }
    else if(action.type === INCREMENT){
        return {
            ...state,
            count: state.count + 1
        }
    }
    else{
        return state
    }

}