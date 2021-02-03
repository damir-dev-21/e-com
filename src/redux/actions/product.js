import { GET_PRODUCTS, SEARCH_PRODUCT, SET_PRODUCTS } from "./actionType";
import axios from 'axios'

export function getProducts(){
    return async(dispatch)=>{
        const responce = await axios.get('https://e-com-777f7.firebaseio.com/products.json');
        const data = responce.data
        let arr = [];
        if(data !== null && data !== undefined){
            Object.keys(data).forEach((key,index)=>{
                arr.push({id:key,name:index})
            })
            dispatch(setProducts(arr))
        }
    }
}



export function checkSearch(title,products){

    return async(dispatch)=>{

        const searchFilter = (item)=>{
            let arr= [];
            if(item.data.title === title){
                arr.push({'id':item.key,'name':3})
                return dispatch(setSearchProduct(arr))
            }

        }

        const responce = await axios.get('https://e-com-777f7.firebaseio.com/products.json');
        const data = responce.data
        const countries = [];

        if(data !== null && data !== undefined){
            for (let [key, value] of Object.entries(data)) {
                countries.push({'key':key,'data':value})
            }
            countries.forEach(item=>searchFilter(item))
        }
    }
}

export function setSearchProduct(product){
    return{
        type:SEARCH_PRODUCT,
        product
    }
}

export function setProducts(products){
    return{
        type:SET_PRODUCTS,
        products
    }
}



export function getProductsOfFilter(products){
    return{
        type:GET_PRODUCTS,
        products
    }
}