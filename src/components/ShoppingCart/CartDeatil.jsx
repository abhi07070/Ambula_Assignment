import React, { useState } from 'react'

const CartDeatil = () => {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                console.log(res.data);
                setDetails(res.data);
            }).catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <div className='productsWrapper'>
            {details.map((product) => (
                <div className='card' key={product.id}>
                    <img src={product.image} alt='img' />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className='btn' onClick={() => handleAdd(product)}>Add to cart</button>
                </div>
            ))}
        </div>
    )
}

export default CartDeatil
