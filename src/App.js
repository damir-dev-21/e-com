import React from 'react';
import MainPage from './pages/MainPage';
import {Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateProduct from './pages/CreateProduct'
import CartPage from './pages/CartPage'
import Auth from './pages/Auth'
import Product from './pages/Product'
import Logout from './Components/Logout'
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      { props.isAuth 
      ? 
      <MainPage isAuth={props.isAuth}>
            <Route path="/" render={ ()=><Home isAuth={props.isAuth}/>} exact />
            <Route path="/products:id" component={Product} exact/>
            <Route path="/create" component={CreateProduct} exact/>
            <Route path="/cart" component={CartPage} exact/>
            <Route path="/auth" component={Auth} />
            <Route path="/logout" component={Logout}/>
      </MainPage> 
      :
      <MainPage>
      <Route path="/" component={Home} exact />
      <Route path="/products:id" component={Product} exact/>
      <Route path="/cart" component={CartPage} exact/>
      <Route path="/auth" component={Auth} />
      </MainPage> 
}
    </div>
  );
}

function mapStateToProps(state){
  return{
    isAuth:state.auth.isAuth
  }
}

export default connect(mapStateToProps,null)(App);
