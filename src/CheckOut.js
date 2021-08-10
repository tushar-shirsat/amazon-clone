import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React,{useContext,useState,useEffect} from 'react'
import CurrencyFormat from 'react-currency-format';
import CartItemSelected from './CartItemSelected'
import './CheckOut.css'
import {context} from './contex'; 
import { getCartTotal } from './reducer';
import axios from './axios'
import { useHistory } from 'react-router';
import { db } from './firebase';


const CheckOut = () => {
    const [{cart,user},dispatch] = useContext(context);
    const [cartItem, setCartItem] = useState(0);
    const [disabled,setDisabled] = useState(true);
    const [error,setError] = useState(null);
    const [succeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [clientSecret, setClientSecret] = useState(true);
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() =>{
        const getClientSecret = async () =>{v   
            const response = await axios({
                method: 'POST',

                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            });
            setClientSecret(response.data.clinetSecret);
        }
        getClientSecret();
    },[cart])

    const reduce = cart.reduce((item,currItem) =>item+currItem.qty,0);
    useEffect(() =>{
        setCartItem(reduce);
    })
    const handleSubmit = async e =>{
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                cart: cart,
                amount: paymentIntent.amount/100,
                created: paymentIntent.created
            })
            setSucceded(true);
            setError(null);
            setProcessing(false);
            dispatch({type: 'EMPTYCART'})
            history.replace('/orders');
        })
    }
    const handleChange = e =>{
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }
    return (
        <div className="checkOut">
            <h1>Checkout ({cartItem} items)</h1>

            <div className="checkOut__container">
                <div className="checkOut__address">
                    <h2 className="address__title"><span>Delivery</span><span>Address</span></h2>
                    <p className="address"><span className="email__adress">tushaar@gmail.com</span><span>123 react lane</span><span>surat, gujrat</span></p>
                </div>
                <hr />
                <div className="chekOut__items">
                    <h2 className="checkOut__items-title"><span>Review items</span><span>and delivery</span></h2>
                    <div className="chekOut__items-selected">
                        <CartItemSelected/>
                    </div>
                </div>
                <hr />
                <div className="checkOut__payment">
                    <h2 className="checkOut__payment-title"><span>Payment</span><span>Method</span></h2>
                    <div className="checkOut__payment-cart">
                        <h2 className="checkOut__payment-cart-title">Card Details</h2>
                        <div className="paymentDetails">
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} className="StripElement"/>

                                    <div className="payment__priceContainer">
                                    <CurrencyFormat
                                        renderText={(value) =>{
                                            return(
                                            <>
                                                <h3 style={{fontWeight: 'bolder'}}><strong style={{fontSize: '1.6rem'}}>Oreder Total: {value}</strong></h3>
                                            </>
                                            )
                                        }}
                                        decimalScale={2}
                                        value={getCartTotal(cart)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₹"}
                                            />
                                    <button disabled={processing || disabled || succeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>
                                {error && <div>{error}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut
