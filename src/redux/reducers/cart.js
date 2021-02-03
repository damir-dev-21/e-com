import { DELETE_ITEM, SET_CART } from "../actions/actionType";

const initialState = {
  cart: [],
  totalPrice:0
};



export default function cartReducer(state = initialState, action) {

  const setPrice = (price) =>{
    state.totalPrice += +price;
      return state.totalPrice;    
  }

  const decPrice = (price)=>{
    state.totalPrice -= +price;
    return state.totalPrice
  }


  switch (action.type) {
    case SET_CART:
        return{
            ...state,
            cart:[...state.cart, action.item],
            totalPrice:setPrice(action.item.price)
        }
    case DELETE_ITEM:
      return{
        ...state,
        cart:state.cart.filter(item=>item.id !== action.id),
        totalPrice:decPrice(action.price)
      }    
    default:
      return state;
  }
}
