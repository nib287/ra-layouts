import React from 'react';
import './ListView.css';
import ShopItem from '../ShopItem/ShopItem'

function ListView({items}) {
    return (
        <ul className='ListView'>
            {items.map((item, index) =>  <ShopItem item={item} key={index}/>)}
        </ul>
    )
}

export default ListView


