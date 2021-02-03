import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setCart } from '../redux/actions/cart'

function Product(props) {

    const [product,setProduct] = useState({})

    const getTitle = async() =>{
        const responce = await axios.get(`https://e-com-777f7.firebaseio.com/products/${props.match.params.id}.json`)
        const data = responce.data;
        setProduct({name:data.title,price:data.price,desc:data.desc,imgUrl:data.img,id:Math.random()})

    }
    
    useEffect(()=>{
        getTitle()
    },[])

    const addCart = () =>{
        const prev = product ? props.cart.find(item=>item===product) : ''
        console.log(prev);
        if(!prev){
            props.setCart(product)
        }
    }

    return (
        <li className="product">
            <div className="product-img">
                <img src={product.imgUrl} alt=""/>
            </div>
            <div className="product-content">
            <h4>{product.name}</h4>
            <p>Цена: {product.price}$</p>
            <p>{product.desc}</p>
            <button onClick={addCart}>Добавить в корзину</button>
            </div>
        </li>
    )
}

function mapDispatchToProps(dispatch){
    return{
        setCart:(item)=>dispatch(setCart(item))
    }
}

function mapStateToProps(state){
    return{
        cart:state.cart.cart
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)
