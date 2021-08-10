import './App.css';
import Hero from './Hero';
import Navbar from './Navbar'
import ProductList from './ProductList';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Cart from './Cart';
import SignIn from './SignIn';
import { useEffect } from 'react';
import { useContext } from 'react';
import {context} from './contex'
import { auth } from './firebase';
import CheckOut from './CheckOut';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51IEov1HcHUE1yY9LRhOB9MTAmIExI9jX8iAJDtXHDHyNNF6CmD6uuJ2lNRBERWtNWAzqs01ojCEJuQgsUUmfb7lU00MCE5b52l');

function App() {
  const [{user}, dispatch] = useContext(context);
  useEffect(() =>{
    auth.onAuthStateChanged(authUser =>{
      if(authUser){
        dispatch({
          type: 'SETUSER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SETUSER',
          user: null
        })
      }
    })
  },[])
  return (
    <div className="App">
      <Router>
        
        <Switch>
          <Route exact path="/">
          <Navbar />
          <Hero/>
          <ProductList/>
          </Route>
          <Route path="/login">
            <SignIn/>
          </Route>
          <Route path="/cart">
            <Navbar />
            <Cart/>
          </Route>
          <Route path="/checkOut">
            <Navbar />
            <Elements stripe={promise}>
              <CheckOut/>
            </Elements>
          </Route>
          <Route path="/orders">
            <Navbar />
            <Orders/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
