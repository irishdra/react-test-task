import React from 'react';
import Card from '../../components/Card/Card';
import { films } from '../../common/constants/films';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            {films.map((film) => <Card film={film} key={film.id} />)}
        </div>
    )
}

export default Home;