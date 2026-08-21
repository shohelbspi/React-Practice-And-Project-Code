export const addToProdcut = (details)=>{
    return {
        type : 'ADD_TO_PRODUCT',
        payload :details
    }
}

export const Increment =()=>{
    return{
        type : "INCREMENT"
    }
}