import React from 'react';
import './ListView.css';
import ShopItem from '../ShopItem/ShopItem'

function ListView({items}) {
    return (
        <div className='CardsView'>
            {items.map((item, index) =>  <ShopItem item={item} key={index}/>)}
        </div>
    )
}

export default ListView


