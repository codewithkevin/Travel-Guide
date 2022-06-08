import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroImage from './images/japan.jpg';




import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">

      <div className="header">
        <Header />
      </div>

      <div className="hero">
        <Hero 
        image={HeroImage}
        location = "Japan"
        date = "12 Jan, 2021-24 Jan, 2021"
        description = "Japan is a country in East Asia. It is the world's most populous country, with over 127,000,000 inhabitants. It is also one of the most populous countries in the world, with over 38.6 million people living in Tokyo."
        view = "View on Google Map"
        />
      </div>



    </div>

       
   


  );
}

export default App;
