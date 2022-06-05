import React from "react";
import Hero from './images/Hero.png'

import './Header.css';

const Header = () => {

    return (
        <section className="header">
            <img src={Hero} alt="Hero" />
            <h4>CODEWITHKEVIN</h4>
            <h6>MREN SATCK</h6>

            <div className="row">
                <div className="col-sm-6">
                    <button className="btn btn-primary">
                       Hello
                    </button>
                </div>    
                <div className="col-sm-6">
                    <button className="btn btn-primary">
                       Hello
                    </button>
                </div>    
            </div>

        </section>    
    )
};


export default Header;