import React,{useState,useContext,useEffect} from 'react'
import {context} from './contex';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import './CartItemTotal.css'
import { NavLink } from 'react-router-dom';

const CartItemTotal = () => {
    const [{cart},dispatch] = useContext(context);
    const [cartItem, setCartItem] = useState(0);

    const reduce = cart.reduce((item,currItem) =>item+currItem.qty,0);
    useEffect(() =>{
        setCartItem(reduce);
    })
    return (
        <div className="cartTotal">
            <CurrencyFormat
                renderText={(value) =>{
                    return(
                    <>
                        <p className="cartTotal__total">Subtotal ({cartItem} items): <strong>{value}</strong></p>
                        <small>
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                    )
                }}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
                />
                <NavLink to="/checkOut" style={{color: '#111', textDecoration:'none'}}>
                <button className="cartTotal__btn">Proceed to buy</button>
                </NavLink>
        </div>
    )
}

export default CartItemTotal
