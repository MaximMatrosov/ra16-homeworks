import React from 'react';

export default function ShopCard({ name, price, color, img }) {
    return <div className='shop-card'>
        <h3>{name}</h3>
        <h5>{color}</h5>
        <img src={img} />
        <div className='price-btn'>
            <span>${price}</span>
            <button>Add to cart</button>
        </div>
    </div>
}