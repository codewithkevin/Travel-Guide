import React from 'react';
// import Hero1 from './images/japan.jpg';

const Hero = (props) => {
    return (
        <div className="hero">
            <div className="row">

                <div className="col-sm-6">
                    <div className="hero-img">
                        <img src={props.image} alt="hero" />
                    </div>
                </div> 

                <div className="col-sm-6">
                    <div className="hero-text">
                        <h1>{props.location} <span className="view">{props.view}</span></h1>
                        <p className="date">{props.date}</p>
                        <p>{props.description}</p>
                    </div>
                </div> 

                


            </div>

            <hr></hr>
            
        </div>
    );
};

export default Hero;

