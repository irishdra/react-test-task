import React from 'react';
import { ORDINARY_SEATS_QUANTITY } from '../../common/constants/cinemaСharacteristics';
import './Seats.css';
import Seat from '../../components/Seat/Seat';

const Seats = () => {
    const seatsArray = [...Array(ORDINARY_SEATS_QUANTITY).keys()]

    return (
        <div className="seats">
            <div className="seats-container">
                {seatsArray.map((seat) => <Seat />)}
            </div>
        </div>
    )
}

export default Seats;