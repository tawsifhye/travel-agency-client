import React from 'react';

const Services = () => {
    return (
        <>
            <div className="col">
                <div className="card h-100 card-design border-dark p-1 rounded">
                    <img src='{thumb}' className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center fw-bold">title</h5>
                        <p>description</p>
                    </div>
                    <div className="mx-auto pb-2">
                        {/* <Link to={`/details/${_id}`}>
              <button className="btn btn-dark fw-bold">Details</button>
            </Link> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;