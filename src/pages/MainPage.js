import React from 'react'
import Header from '../Components/Header';

function MainPage(props) {
    return (
        <div>
            <Header isAuth={props.isAuth}/>
            {props.children}
        </div>
    )
}

export default MainPage
