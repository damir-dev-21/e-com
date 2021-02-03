import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './pages/Home'
import CreateProduct from './pages/CreateProduct'
import CartPage from './pages/CartPage'
import Auth from './pages/Auth'
import ProductItem from './Components/productItem'

export const router = () =>{
    return(
        <Switch>
            <Route path="/" component={Home} exact>
            </Route>
            <Route path="/:id" component={ProductItem} exact>
            </Route>
            <Route path="/create" component={CreateProduct} exact >
            </Route>
            <Route path="/cart" component={CartPage} exact>
            </Route>
            
            <Route path="/auth" component={Auth} >
            </Route>

        </Switch>
    )
}