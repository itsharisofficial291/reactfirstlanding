import React from 'react';
import Header from './components/Header.jsx'; 
import Banner from './components/Banner.jsx';
import Experts from './components/Experts.jsx'; // Corrected import path
import Newsletter from './components/Newsletter.jsx';
import Plans from './components/Plans.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
  <Header />
   <Banner />
  <Experts />
   <Newsletter />
   <Plans/>
   <Footer/>
    </div>
  );
}

export default App;
