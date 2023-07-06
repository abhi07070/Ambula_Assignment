import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const CardHeader = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header>
      <div className='homeLink'>
        <Link to='/'>Back to home</Link>
      </div>
      <div className='links'>
        <Link to='/cartDetail'>Home</Link>
        <Link to='/cart'>Cart</Link>
        <Link>items: {cartItems.length}</Link>
      </div>
    </header>
  );
};

export default CardHeader;