import moment from 'moment'
import React from 'react'
import CurrencyFormat from 'react-currency-format';
import ProductCart from './ProductCart';


const Order = ({order}) => {
    return (
        <div className="order">
            <div className="order__top">
                <h2>Order</h2>
                <p className="order__id">{order.id}</p>
            </div>
            <p className="order__timeStamp">{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>

            <div className="order__list">
                {
                    order.data.cart.map((item) =>{
                        // const {id,imgUrl,price,qty,title,numRating} = item;
                        return(
                            <ProductCart {...item}/>
                        );
                    })
                }
            </div>
            <CurrencyFormat
                renderText={(value) =>{
                    return(
                    <>
                        <h2 className="orders__total">order Total: {value}</h2>
                        
                    </>
                    )
                }}
                decimalScale={2}
                value={order.data.amount}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
                />

            <hr style={{marginTop: '1rem'}}/>
        </div>
    )
}

export default Order
