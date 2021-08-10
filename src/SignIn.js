import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import {auth} from './firebase'
import './Signin.css'

const SignIn = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();
    const signIn = e =>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth =>{
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e =>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) =>{
                if(auth){
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
        <NavLink to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png" alt="amazon" className="login__logo" />
        </NavLink>
            <div className="login__container">
                <div className="login__main">
                    <h2>Sign In</h2>
                    <form className="login__form" onSubmit={signIn}>
                        <div className="login__form-control">
                            <label htmlFor="email">Email or mobile phone number</label>
                            <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                        </div>
                        <div className="login__form-control">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="login__btn">Sign In</button>
                    </form>
                </div>
                <div className="login__create-account">
                    <h5>New to Amazon?</h5>
                </div>
                <button className="login__create-account-btn" onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default SignIn
