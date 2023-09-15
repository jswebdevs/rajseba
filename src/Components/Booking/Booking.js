import React from 'react';
import './booking.css';
import Mainform from '../Forms/Mainform';

const Booking = () => {
    return (
        <div className='booking-container-wrapper mt-5'>
            <div className="booking-container">
                <Mainform></Mainform>
            </div>
        </div>
    );
};

export default Booking;