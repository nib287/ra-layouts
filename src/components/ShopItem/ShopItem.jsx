import React from 'react';
import './ShopItem.css';

function ShopCard({item}) {
    return (
        <div className='ShopCard'>
            <header className='ShopCard-Header'>
                <h2 className='ShopCard-Title'>{item.name}</h2>
                <h3 className='ShopCard-Subtitle'>{item.color}</h3>
            </header>
            <img className='ShopCard-Img' src={item.img} alt="" />
            <span className='ShopCard-price'>${item.price}</span>
            <button className='ShopCard-button'>add to cart</button>
        </div>
    )
}


export default ShopCard
