import React from 'react';
import './Card.css'

const Card = ({film}) => {
    return (
        <div className='card'>
            <div>
                <img alt={`Poster of ${film.title}`}/>
            </div>
            <div className="card-info">
                <p>{film.title}</p>
                <p>{film.description}</p>
                <button className='card-button'>Book</button>
            </div>
        </div>
    )
}

export default Card;