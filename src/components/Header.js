import React from "react";
import Hero from './images/Hero.png'

import './Header.css';

const Header = () => {

    return (
        <section className="header">
            <img src={Hero} alt="Hero" />
            <h4>CODEWITHKEVIN</h4>
        </section>    
    )
};


export default Header;