import React, { useState ,useEffect} from 'react';
import { useContext } from 'react';
import {context} from './contex';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';

const CartItemSelected = () => {
    const [{cart},dispatch] = useContext(context);
    const [cartItem, setCartItem] = useState(0);

    const reduce = cart.reduce((item,currItem) =>item+currItem.qty,0);
    useEffect(() =>{
        setCartItem(reduce);
    })
    const handleChange = (e,id) =>{
        dispatch({type: 'ADDQTYPRODUCT', payload:{id,value:+e.target.value}});
    }
    const handleClick = (id) =>{
        dispatch({type: 'REMOVETOCART', payload:id});
    }
    return (
        <div className="cartItem__selected">
                {
                    cart.map((item =>{
                        const {id,imgUrl,title,price,numRating,qty} = item;
                        return(
                            <>
                            <div className="cartItem__cart">
                    <div className="cartItem__right">
                    <img src={imgUrl} alt="" className="cartItem__image" />
                        <div className="cartItem__right-left">
                        <h2 className="cartItem__name">{title}</h2>
                        <select className="cartItem__qty" name={id} value={qty}  onChange={(e) => handleChange(e,id)}>
                            <option value="1">Qty: 1</option>
                            <option value="2">Qty: 2</option>
                            <option value="3">Qty: 3</option>
                            <option value="4">Qty: 4</option>
                            <option value="5">Qty: 5</option>
                        </select>
                        <button className="cartItem__btn" onClick={() => handleClick(id)}>Remove to cart</button>
                        </div>
                    </div>
                    <h2 className="cartItem__price">₹ {price.length > 3? price.slice(0,-3)+','+price.slice(-3) : price}</h2>
                </div>
                <div className="border"></div>
                </>
                        );
                    }))
                }
                <CurrencyFormat
                renderText={(value) =>{
                    return(
                    <>
                        <p className="cartItem__total">Subtotal ({cartItem} items): <strong>{value}</strong></p>
                    </>
                    )
                }}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
                />
                
            </div>
    )
}

export default CartItemSelected
