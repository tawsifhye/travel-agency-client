import React from 'react';
import Slider from 'react-slick';
import './Review.css'
import person1 from '../../images/person1.jpg'
import person2 from '../../images/person2.jpg'
import person3 from '../../images/person3.jpg'


const Review = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // autoplay: true,
        // autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="mb-5 review-container">
                <div className="row mt-5">
                    <div className="col-lg-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 p-3">
                        <div className="review-container-text text-center">
                            <h2> Happy Client</h2>
                            <h1>Testimonial</h1>
                        </div>
                        <Slider {...settings} className="slider text-center">

                            <div class="card review-card p-3">
                                <img src={person1} class="card-img-top w-50 mx-auto pt-5 client-card-image" alt="..." />
                                <div class="card-body pt-5">
                                    <h3>Jhon Doe</h3>
                                    <h6>Tour Guide</h6>
                                    <p class="card-p">“When he reached the first hills of the Italic Mountains, he had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of his own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued his way.”</p>
                                </div>
                            </div>

                            <div class="card review-card p-3">
                                <img src={person2} class="card-img-top w-50 mx-auto pt-5 client-card-image" alt="..." />
                                <div class="card-body pt-5">
                                    <h3>Tony Stark</h3>
                                    <h6>Designer at Freepik</h6>
                                    <p class="card-p">“When he reached the first hills of the Italic Mountains, he had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of his own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued his way.”</p>
                                </div>
                            </div>
                            <div class="card p-3">
                                <img src={person3} class="card-img-top w-50 mx-auto pt-5 client-card-image " alt="..." />
                                <div class="card-body pt-5">
                                    <h3>Rob Smith</h3>
                                    <h6>Manager</h6>
                                    <p class="card-p">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
                                </div>
                            </div>


                        </Slider>
                    </div>
                    <div className="col-lg-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
                        <div className="review-container-text text-center">
                            <h2 className="mt-3">FAQ</h2>
                            <h1>Frequently Asked Questions</h1>
                        </div>
                        <div class="p-4">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed fs-5 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            What should I consider for travelling?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body fs-6">Try to see the facilities before booking a resort, or plan a safe stay before leaving your home.Make sure you keep id cards for each member going with you, in case of emergency it may be required.If going by road, check weather before leaving, and make necessary arrangements.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed fs-5 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            What is the best time for travelling?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body fs-6">
                                            This is the busiest time for tourism. Usually when the country is experiencing its best weather, high season – or peak season – brings busy crowds and high rates. This can often give it a bad reputation, and many seasoned travellers will avoid travelling during high season to avoid the crowds.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed fs-5 fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            The Best Airlines for Pet Travel?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body fs-6">
                                            TPG lounge member Brittani S. said she was “very pleased” with Delta’s pet cargo. “It’s climate controlled and well-regulated. We flew from Texas to Hawaii during the summer and they were able to accommodate us despite the heat because of air conditioned transport between the terminal and plane.” Likewise, Lindsey B. was also pleased with her experience flying a pet in Delta’s cargo hold. “The crew verified our dog was on board before take off,” she reported. If you have to fly with your pet in cargo, Delta may be the best airline for you.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Review;