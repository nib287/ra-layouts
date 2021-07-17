import React from 'react'
import ShopCard from '../ShopCard/ShopCard'
import './CardsView.css'

function CardsView({cards}) {
    return (
        <div className='CardsView'>
            {cards.map((card, index) =>  <ShopCard card={card} key={index}/>)}
        </div>
    )
}

export default CardsView
