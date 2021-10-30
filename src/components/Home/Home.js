import React, { useEffect, useState } from 'react';
import Service from '../Service/Service'
import HotDeal from '../HotDeal/HotDeal'
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import './Home.css'
import Review from '../Review/Review';
const Home = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('https://young-crag-40635.herokuapp.com/tourplans')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    // console.log(tours);
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
            {/* Service Section Starts*/}
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
                    <Bounce bottom>
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4 mb-5 mx-auto">
                            {tours.map(tour => (<Service key={tour._id} tour={tour}></Service>))}
                        </div>
                    </Bounce>
                </div>
            </div>
            {/* service Section Ends */}
            {/* Hot Deal Section Starts */}
            <div className="mb-5">
                <Slide left>
                    <div className="pt-5 mt-5">
                        <HotDeal></HotDeal>
                    </div>
                </Slide>
            </div>
            {/* Hot Deal Section Ends */}
            {/* User Review Section Starts */}
            <div className="mt-5">
                <Review></Review>
            </div>
            {/* User Review Section Ends */}
        </>
    );
};

export default Home;