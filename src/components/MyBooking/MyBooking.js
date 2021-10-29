import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import './MyBooking.css'
const MyBooking = () => {
    const { user } = useAuth();
    const [events, setEvents] = useState([]);
    const email = user.email;
    useEffect(() => {
        fetch(`http://localhost:5000/bookedevents/${email}`)
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [email])
    const deleteEvent = (id) => {
        console.log(id);
    }
    return (
        <div className='mybooking-container'>
            <div className='text-center main-container mybooking-custom-font'>
                <h1>Manage Your Booking</h1>
                {events.map(event => <div key={event._id} className="shadow-sm p-3 mb-5 bg-body rounded">
                    <h5>{event.title}</h5>
                    <p>Name: {event.name}</p>
                    <p>Contact: {event.contact}</p>
                    <p>Email: {event.email}</p>
                    <p>Booking Date: {event.startDate} to {event.endDate}</p>
                    <p>Status: {event.status}</p>
                    <button onClick={() => deleteEvent(event._id)} className="btn btn-danger"><FontAwesomeIcon icon={faEraser} /> Cancel</button>
                </div>)}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyBooking;