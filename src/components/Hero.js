import React from 'react';


const Hero = (props) => {

    let place 
    if(props.location === "Mount Fuji"){
        place = "Vacation in Japan"
    } else if(props.location === "Sydney Opera House"){
        place = "Vacation in Australia"
    } else if(props.location === "Geirangerfjord"){
        place = "Vacation in Norway"
    }

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
                        <p className="counrty">{props.country}  <span className="view">{props.view}</span></p>
                        <h1>{props.location}</h1>
                        <p className="date">{props.date}</p>
                        <p>{props.description}</p>
                        {place && <p className="place">{place}</p>}
                    </div>
                </div> 

                


            </div>

            <hr></hr>
            
        </div>
    );
};

export default Hero;

