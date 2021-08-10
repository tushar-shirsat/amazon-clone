import React from 'react'
import './CartItem.css'
import CartItemSelected from './CartItemSelected'


const CartItem = () => {
    return (
        <div className="cartItem">
            <h3 className="cartItme__title">Shopping Cart</h3>
            <p>Price</p>
            <div className="border"></div>
            <CartItemSelected/>
        </div>
    )
}

export default CartItem


