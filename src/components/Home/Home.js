import React, { useEffect, useState } from 'react';
import Service from '../Service/Service'
import './Home.css'
const Home = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tourplans')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    console.log(tours);
    return (
        <>
            <div className="home-banner-container">
                <div className=" container-fluid text-white home-banner text-center ">
                    <div className="custom-font-home">
                        <h1 className="p-1">Let's Make Your Best</h1>
                        <h1 className="p-1">Trip Ever</h1>
                        <p className="">Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.</p>
                    </div>
                </div>
            </div>
            <div className='service-container' id="service">
                <div className="text-center service-container-header custom-font-home">
                    <h1 className="">
                        Popular Destination
                    </h1>
                    <p className="mx-auto">
                        We love to tell our successful far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                </div>
                <div className="container-fluid row mx-auto">
                    {!tours && (<div className="text-center">
                        <div class="spinner-grow text-danger text-center" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>)}
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4 mb-5 mx-auto">
                        {tours.map(tour => (<Service key={tour._id} tour={tour}></Service>))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;