import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {authOver} from '../redux/actions/auth'


function Logout() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(authOver())
    },[])

    return (
        <div>
            <Redirect to="/"/>
        </div>
    )
}

export default Logout
