// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Experts from './components/Experts';
import Newsletter from './components/Newsletter';
import Plans from './components/Plans';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="banner">
          <Banner />
        </section>
        <section id="experts">
          <Experts />
        </section>
        <section id="newsletter">
          <Newsletter />
        </section>
        <section id="plans">
          <Plans />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
