import React from 'react';

const Hero = (props) => {
    return (
        <div className="hero">
            <div className="row">

                <div className="col-sm-6">
                    <div className="hero-img">
                        <img src={props.item.image} alt="hero" />
                    </div>
                </div> 

                <div className="col-sm-6">
                    <div className="hero-text">
                        <h1>{props.item.location} <span className="view">{props.item.view}</span></h1>
                        <p className="date">{props.item.date}</p>
                        <p>{props.item.description}</p>
                    </div>
                </div> 

                


            </div>

            <hr></hr>
            
        </div>
    );
};

export default Hero;

