import React from 'react';
import './ShopCard.css';

function ShopCard({card}) {
    return (
        <div className='ShopCard'>
            <header className='ShopCard-Header'>
                <h2 className='ShopCard-Title'>{card.name}</h2>
                <h3 className='ShopCard-Subtitle'>{card.color}</h3>
            </header>
            <img className='ShopCard-Img' src={card.img} alt="" />
            <span className='ShopCard-price'>${card.price}</span>
            <button className='ShopCard-button'>add to cart</button>
        </div>
    )
}


export default ShopCard
