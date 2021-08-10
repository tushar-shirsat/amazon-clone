import React, { useEffect, useState, useContext } from 'react'
import { db } from './firebase';
import {context} from './contex';
import Order from './Order';
import './Order.css'

const Orders = () => {
    const [{user},dispatch] = useContext(context);
    const [orders, setOrders] = useState([]);
    useEffect(() =>{
        if(user){
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot((snapshot) =>{
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
        }else{
            setOrders([]);
        }
    },[user])
    console.log(orders);
    return (
        <div className="orders">
            <h2>Your Orders</h2>

            <div className="orders__order">
                {
                    orders.map((order) =>{
                        return <Order order={order} />
                    })
                }
            </div>
        </div>
    )
}

export default Orders
