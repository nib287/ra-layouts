import React from 'react';
import './ShopItem.css';

function ShopItem({item}) {
    return (
        <li className='ShopItem'>
            <img className='ShopItem-Img' src={item.img} alt="" />
            <h2 className='ShopItem-Title'>{item.name}</h2>
            <h3 className='ShopItem-Subtitle'>{item.color}</h3>
            <span className='ShopItem-Price'>${item.price}</span>
            <button className='ShopItem-Button'>add to cart</button>
        </li>
    );
}


export default ShopItem;


