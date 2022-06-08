import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './components/Header';
import Hero from './components/Hero';
import data from './components/data';

function App() {

  const heroData = data.map(item => {
    return (
      <Hero
        key={item.id}
        item={item}
      />
    );
  });

  return (
    <div className="App">

      <div className="header">
        <Header />
      </div>

      <div className="hero">
        {heroData}
      </div>



    </div>

       
   


  );
}

export default App;
