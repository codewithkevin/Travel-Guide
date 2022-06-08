import React from 'react';
// import Hero1 from './images/japan.jpg';

const Hero = () => {
    return (
        <div className="hero">
            <div className="row">

                <div className="col-sm-6">
                    <div className="hero-img">
                        <img  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
                    </div>
                </div> 

                <div className="col-sm-6">
                    <div className="hero-text">
                        <h1>Japan <span className="view">View on Google Map</span></h1>
                        <p className="data">12 Jan, 2021-24 Jan, 2021</p>
                        <p> Japan is a country in East Asia. It is the world's most populous country, with over 127,000,000 inhabitants. It is also one of the most populous countries in the world, with over 38.6 million people living in Tokyo.</p>
                    </div>
                </div> 

                


            </div>

            <hr></hr>
            
        </div>
    );
};

export default Hero;

