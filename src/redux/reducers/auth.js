import {AUTH_START,AUTH_OVER} from '../actions/actionType'

const initialState = {
    token:null,
    isAuth:localStorage.getItem('token'),
}

export default function authReducer(state=initialState, action){
    switch(action.type){
        case AUTH_START:
            return{
                ...state,
                token:action.token,
                isAuth:action.token
            }
        case AUTH_OVER:
            return{
                ...state,
                token:null,
                isAuth:false,
            }    

        case 'CHANGE_AUTH':
            return{
                ...state,
                token:null,
                isAuth:false,
            }    
        default:
            return state
    }
}