import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CartContext } from './CartContext';
import Spinner from '../Spinner';

const CartDetail = () => {
  const { addToCart, loading, setLoading } = useContext(CartContext);
  const [details, setDetails] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        // console.log(res.data);
        setDetails(res.data);
        setLoading(false);
        setTotalItems(res.data.length)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <span className='productItems'>Total Cart Items: {totalItems}</span>
      {loading ? (
        <div className='loader'>
          <Spinner />
        </div>
      ) : (
        <div className='productsWrapper'>
          {details.map((product) => (
            <div className='card' key={product.id}>
              <img src={product.image} alt='img' />
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
              <button className='btn' onClick={() => handleAddToCart(product)}>
                Add to cart
              </button>
            </div>
          ))
          }
        </div>
      )}
    </div>
  );
};

export default CartDetail;
