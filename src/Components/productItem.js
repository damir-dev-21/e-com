import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getProduct} from '../redux/actions/product'
import { connect } from 'react-redux'

function ProductItem({id}) {

    const [product,setProduct] = useState({
        name:'',
        price:'',
        desc:'',
        imgUrl:''
    })
    const getTitle = async() =>{
        const responce = await axios.get(`https://e-com-777f7.firebaseio.com/products/${id}.json`)
        const data = responce.data
        setProduct({name:data.title,price:data.price,desc:data.desc,imgUrl:data.img})
    }

    
    useEffect(()=>{
         getTitle(id)
    },[id])
    
    return (
        <div className="productItem" >
            <div className="productItem-img">
                <img src={product.imgUrl} alt=""/>
            </div>
            <div className="productItem-content">
            <h4>{product.name} </h4>
            <p>{product.price}$</p>
            </div>
        </div>
    )
}


export default (ProductItem)
