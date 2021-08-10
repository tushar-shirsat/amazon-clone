import React, { useContext,useState,useEffect } from 'react'
import logo from './logo.png';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import {context} from './contex'
import { auth } from './firebase';

const Navbar = () => {
    const [{cart,user}] = useContext(context);
    const [cartItem, setCartItem] = useState(0);

    const reduce = cart.reduce((item,currItem) =>item+currItem.qty,0);
    useEffect(() =>{
        setCartItem(reduce);
    },[cart])

    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }

    const formateName = (name) =>{
        const index = name.indexOf('@');
        return name.slice(0,index);
    }
    return (
        <nav className="navbar">
            <NavLink to="/">
            <img src={logo} alt="amazon" className="navbar__logo" />
            </NavLink>
            <div className="navbar__search-container">
                <input type="text" className="navbar_search-input" />
                <button className="navbar__search-btn-go"><SearchOutlinedIcon/></button>
            </div>
            <div className="navbar__left">
                <NavLink to={!user && '/login'} style={{color: '#fff', textDecoration:'none'}} onClick={handleAuthentication}>
                <div className="Navbar__account">
                    <span className="account__name">hello, {user ? formateName(user?.email): "user"}</span>
                    <h2 className="account">Account</h2>
                </div>
                </NavLink>
                <NavLink to="/orders" style={{color: '#fff', textDecoration:'none'}}>
                    
                <div className="Navbar__order">
                    <span>Returns</span>
                    <h2>&amp; Orders</h2>
                </div>
                </NavLink>
                <NavLink to="/cart" style={{color: '#fff'}}>
                <div className="cart-logo">
                    <ShoppingCartOutlinedIcon  />
                    <span className="cart-number">{cartItem}</span>
                </div>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar
