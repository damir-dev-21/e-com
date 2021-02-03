import React, { useState,useEffect } from 'react'
import MessageBox from '../Components/MessageBox'
import ProductList from '../Components/productList'
import { connect } from 'react-redux'
import { checkSearch, getProducts } from '../redux/actions/product'


function Home({isAuth,products,getProducts,checkSearch}) {

    const messageText = 'Вы не авторизованы, авторизируйтесь что-бы добавлять товары!';
    const [search,setSearch] = useState('');


    useEffect( ()=>{
        getProducts()
        
    },[])


    return (
        <div className="main">
            {!isAuth ? <MessageBox clss={'warning'} message={messageText}/> : ''}
            <h2>Список товаров</h2>
            <form action="" onSubmit={(e)=>e.preventDefault()}>
                <input type="text" placeholder="Введите название товара" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <button type="submit" onClick={()=>checkSearch(search,products)}>Поиск</button>
            </form>

            <ProductList titles={products}/>
            
        </div>
    )
}

function mapStateToProps(state){
    return{
        products:state.products.products
    }
}

function mapDispatchToProps(dispatch){
    return{
        getProducts:()=>dispatch(getProducts()),
        checkSearch:(title,products)=>dispatch(checkSearch(title,products))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)