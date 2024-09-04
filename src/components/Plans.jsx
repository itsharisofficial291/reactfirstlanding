import React from 'react';
import { VscAccount } from 'react-icons/vsc';
import '../global.css'; 

export default function Plans() {
  return (
    <section id="plans" className="py-10">
    <div className="plan-container">
      <div className="plan-grid">
        {/* First Plan */}
        <div className="plan-box">
          <VscAccount className="plan-icon" />
          <h2 className="plan-title">Web Development</h2>
          <h3 className="plan-price">$149</h3>
          <p className="plan-text">lorem ipsum is simple</p>
          <hr className="plan-divider" />
          <p className="plan-text-center">lorem ipsum is simply dummy text of HTML</p>
          <hr className="plan-divider" />
          <p className="plan-text">lorem ipsum is simple dummy</p>
          <button className="plan-button">Get Started</button>
        </div>

        {/* Second Plan */}
        <div className="border border-gray-200 rounded-lg flex flex-col justify-center items-center p-6 hover:scale-105 transition-transform duration-300 bg-blue-100">
          <VscAccount className="plan-icon" />
          <h2 className="plan-title">Web Development</h2>
          <h3 className="plan-price">$149</h3>
          <p className="plan-text">lorem ipsum is simple</p>
          <hr className="plan-divider" />
          <p className="plan-text-center">lorem ipsum is simply dummy text of HTML</p>
          <hr className="plan-divider" />
          <p className="plan-text">lorem ipsum is simple dummy</p>
          <button className="plan-button">Get Started</button>
        </div>

        {/* Third Plan */}
        <div className="plan-box">
          <VscAccount className="plan-icon" />
          <h2 className="plan-title">Web Development</h2>
          <h3 className="plan-price">$149</h3>
          <p className="plan-text">lorem ipsum is simple</p>
          <hr className="plan-divider" />
          <p className="plan-text-center">lorem ipsum is simply dummy text of HTML</p>
          <hr className="plan-divider" />
          <p className="plan-text">lorem ipsum is simple dummy</p>
          <button className="plan-button">Get Started</button>
        </div>
      </div>
    </div>
    </section>
  );
}
