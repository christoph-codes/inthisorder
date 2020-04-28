import React from 'react';
import './KidCard.scss'

export default function KidCard(props) {
    const kid = props.data;
    return (
        <div key={kid.id} className='KidCard uk-width-1-3 uk-card uk-card-body uk-card-large uk-card-default'>
            <h3 class="uk-card-title uk-text-center">{kid.name}</h3>
        </div>
    )
}