import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from './ReduxToolkit/CartSlice';

function App() {
  let dispatch = useDispatch();
  let cartItems = useSelector((state)=>state.cart.items)
  let products = [
    {
      id: 1, 
      name: "Laptop",
      price: 999
    },
    {
      id: 2, 
      name: "Keyboard",
      price: 99
    },
    {
      id: 3, 
      name: "Mouse",
      price: 9
    }
  ]
  return (
    <div>
      
      <h2>Products</h2>
      {
        products.map(product=>(
          <div>
            <span>{product.name}---${product.price}</span>
            <button onClick={()=>dispatch(addToCart(product))}>Add</button>
          </div>
        ))
      }
      <br /><br />
      <h2>Cart</h2>
      {cartItems.length===0?<p>Cart is empty</p>:null}
      {
        cartItems.map((item)=>(
          <div>
            <span>{item.name}----${item.price}</span>
            <button onClick={()=>dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        ))
      }
    </div>
  )
}

export default App
