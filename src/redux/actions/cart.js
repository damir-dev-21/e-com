import { SET_CART,DELETE_ITEM } from "./actionType";

export function setCart(item){
    return{
        type:SET_CART,
    item
    }
}

export function deleteItem(id,price){
    return{
        type:DELETE_ITEM,
        id,
        price
    }
}