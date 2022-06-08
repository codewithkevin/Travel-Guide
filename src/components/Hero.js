import React from 'react';
import Hero1 from './images/japan.jpg';

const Hero = () => {
    return (
        <div className="hero">
            <img src={Hero1} alt="hero" />
            <h4 className="hero-title">JAPANESE</h4>
            <p className="hero-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores alias recusandae dicta impedit voluptatibus? Veniam, sed praesentium sit pariatur cumque libero assumenda cupiditate vero maxime omnis? Tempora maxime neque amet.
            </p>

        </div>
    );
};

export default Hero;

