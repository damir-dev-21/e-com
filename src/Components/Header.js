import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'

function Header(props) {
        return (
        <div className="header">
            <div className="header-logo">
                <NavLink to="/">E-Com</NavLink>
            </div>
            <Nav isAuth={props.isAuth}/>
        </div>
    )
}

export default Header
