import { GET_PRODUCTS, SEARCH_PRODUCT, SET_PRODUCTS } from "../actions/actionType"

const initialState = {
    products:null,
    product:{}
}

export default function productsReducer(state = initialState, action){
    switch(action.type){
        case SET_PRODUCTS:
            return{
                ...state,
                products:action.products
            }
         
        case SEARCH_PRODUCT:
            return{
                ...state,
                products:action.product
            }
        case GET_PRODUCTS:
            return{
                ...state,
                products:action.products
            }  

        default:
            return state
    }
}