import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'
const Booking = () => {
    const { _id } = useParams();
    const [tour, setTour] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/tourplans/${_id}`)
            .then(res => res.json())
            .then(data => setTour(data))
    }, [])
    console.log(tour);
    return (
        <div className="booking-container">
            {!tour && (<div className="text-center">
                <div class="spinner-grow text-danger text-center" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>)}
            <div className="row p-5">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
                    <div className="custom-font-booking">
                        <h3 className="px-1 py-0">{tour.title}</h3>
                        <p className="p-2">{tour.description}</p>
                        <div className='booking-img-design m-1'>
                            <img className="w-100 rounded" src={tour.thumb} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 p-3">
                    <div className="custom-font-booking">
                        <h3 className="px-1">Book Your Tour!</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;