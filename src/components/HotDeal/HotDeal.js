import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import hotdeals from '../../images/hot-deals.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HotDeal.css"

const HotDeal = () => {
    return (
        <div className=" container hot-deal-container mb-5 mt-5">
            <div className="row p-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 d-flex flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row-flex-xxl-row text-white custom-font-hotdeal">
                    <h1><span>45%</span>OFF SALE</h1>
                    <div className="p-3">
                        <h4>Just hurry up limited offer!</h4>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-5 text-center">
                    <img className="w-50" src={hotdeals} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HotDeal;