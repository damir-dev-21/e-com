import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav({isAuth}) {
    return (
        <nav>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/create" className={isAuth ? ' ' : 'disabled'}>Добавить</NavLink>
            <NavLink to="/cart">Корзина</NavLink>
            <NavLink to="/auth">Авторизация</NavLink>
            <NavLink to="/logout" className={isAuth ? ' ' : 'disabled'}>Выйти</NavLink>
        </nav> 
    )
}

export default Nav
