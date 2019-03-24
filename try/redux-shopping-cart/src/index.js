import { store } from './store';
import { addToCart, updateCart, deleteFromCart } from './actions/cart-actions';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

console.log("initial state: ", store.getState());


let unsubscrible = store.subscribe(() =>
    console.log(store.getState())
)

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));
store.dispatch(updateCart('Coffee 500gm', 1, 2500));
store.dispatch(deleteFromCart('Coffee 500gm'));

unsubscrible();
// src/index.js


const App = <h1>Redux Shopping Cart</h1>;

ReactDOM.render(
  <Provider store={store}>
    { App }
  </Provider> ,
  document.getElementById('root')
);