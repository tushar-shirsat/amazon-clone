import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './ProductCart.css'
import { useContext } from 'react';
import {context} from './contex'

const ProductCart = ({id,imgUrl,title,price,numRating,qty}) => {
    const [{cart},dispatch] = useContext(context);
    const handleClick = (id) => {
        const inCart = cart.findIndex(cur => cur.id === id);
        if(inCart===-1){
            dispatch({type:'ADDTOCART',payload:{id,imgUrl,title,price,numRating,qty:1}});
        }
    }
    
    
    return (
        <div className="ProductCart">
            <img src={imgUrl} alt="" className="productCart__image" />
            <div className="productCart__details">
                <h2 className="productCart__title">{title.length > 70 ? title.substr(0,70)+"...": title}</h2>
                <h3 className="price">₹ {price.length > 3? price.slice(0,-3)+','+price.slice(-3) : price}</h3>
                {qty && <p style={{fontSize: "1.6rem", fontWeight:"bold",marginBottom:"1rem"}}>qty: {qty}</p>}
                <div className="productCart__rating">
                    <spna className="rating-star"><StarIcon/> <StarIcon/> <StarIcon/> <StarIcon/></spna>
                    <span className="dropdown"><ExpandMoreIcon/></span>
                    <span className="number-of-rating">{numRating.length > 3? numRating.slice(0,-3)+','+numRating.slice(-3) : numRating}</span>
                </div>
            </div>
            <button className="productCart__add-to-cart" onClick={() => handleClick(id)}>add to cart</button>
        </div>
    )
}

export default ProductCart
