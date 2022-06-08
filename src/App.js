import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">

      <div className="header">
        <Header />
      </div>

      <div className="hero">
        <Hero />
      </div>



    </div>

       
   


  );
}

export default App;
