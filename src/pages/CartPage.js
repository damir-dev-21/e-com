import React from 'react'
import { connect } from 'react-redux'
import { deleteItem } from '../redux/actions/cart';

function CartPage({cart,totalPrice,deleteItem}) {


    
    return (
        <div className="cartPage">
            {cart.length > 0 ? cart.map((item)=>{
                return(
                    <div className="cart">
                        <div className="cart-img">
                            <img src={item.imgUrl} alt="img"/>
                        </div>
                    <div className="cart-text">
                    <div className="cart-text-content">
                    <h3>{item.name}</h3>
                    <h5><span className="price">{item.price}</span>$</h5>
                    </div>
                    <button className="deleteBtn" onClick={()=>deleteItem(item.id,item.price)}>Удалить</button>
                    </div>
                    </div>
                )
            }) : <h3>Корзина пуста</h3>}

            <div className="cartPage-conclude">
            <div className="cartPage-total">
            <h3>Общая сумма: <span>{totalPrice}$</span></h3>
            </div>
            <div className="cartPage-buyBtn">
                <button disabled={cart.length > 0 ? false : true} >Приобрести</button> 
            </div>   
            </div> 
        </div>    
            
    )
}

function mapStateToProps(state){
    return{
        cart:state.cart.cart,
        totalPrice:state.cart.totalPrice
    }
}

function mapDispatchToProps(dispatch){
    return{
        deleteItem:(id,price)=>dispatch(deleteItem(id,price))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CartPage)
