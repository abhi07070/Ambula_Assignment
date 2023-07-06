import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const CardHeader = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header>
      <div className='homeLink'>
        <Link to='/Ambula_Assignment/'>Back to home</Link>
      </div>
      <div className='links'>
        <Link to='/Ambula_Assignment/cartDetail'>Home</Link>
        <Link to='/Ambula_Assignment/cart'>Cart</Link>
        <Link>items: {cartItems.length}</Link>
      </div>
    </header>
  );
};

export default CardHeader;