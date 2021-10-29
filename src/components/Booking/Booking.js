import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css'
const Booking = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const { _id } = useParams();
    const [tour, setTour] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/tourplans/${_id}`)
            .then(res => res.json())
            .then(data => setTour(data))
    }, [])
    const onSubmit = (data) => {
        const bookingInfo = {
            ...data,
            title: tour.title,
            email: user.email
        };
        console.log(bookingInfo);
        axios.post('http://localhost:5000/bookedevents', bookingInfo)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Event Booking Successful. Visit My Bookings for updated');
                    reset();
                }
            })
    }

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
                    <div className="ps-xl-5 ps-xxl-5 custom-font-booking ">
                        <h3 className="px-1">Book Your Tour!</h3>
                        <div className="d-flex lex-column justify-content-center align-items-center form-container">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <p className="fw-bolder">Name</p>
                                <input type='text' {...register("name")} />
                                <p className="fw-bolder">Contact No</p>
                                <input type='' {...register("contact")} />
                                <p className="fw-bolder">From</p>
                                <input type='date' {...register("startDate")} />
                                <p className="fw-bolder">To</p>
                                <input type='date' {...register("endDate")} />
                                <br /> <br />
                                <input className='pt-' type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;