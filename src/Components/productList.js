import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductItem from './productItem'

function ProductList({titles}) {
    return (
        <ul className="main-list">
            { titles ?  titles.map((item,index)=>{
                return(
                        <NavLink to={`/products` + item.id} key={index}><ProductItem id={item.id}/></NavLink>
                )
            }) : 'Список пуст'}
        </ul>
    )
}

export default ProductList
