import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <div className='productsWrapperCart'>
        {cartItems.length === 0 ? (
          <div className='noCart'><p>Cart is empty</p></div>
        ) : (
          cartItems.map((product) => (
            <div className='card' key={product.id}>
              <img src={product.image} alt='img' />
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
              <button className='btn' onClick={() => removeFromCart(product.id)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
