import React from 'react'
import CartItem from './CartItem'
import CartItemTotal from './CartItemTotal'

const Cart = () => {
    return (
        <div className="cart">
            <CartItem/>
            <CartItemTotal/>
        </div>
    )
}

export default Cart
