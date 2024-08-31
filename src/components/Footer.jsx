import React from 'react';
import { TiSocialFacebookCircular, TiSocialTwitterCircular, TiSocialLinkedinCircular, TiSocialInstagramCircular } from "react-icons/ti";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 md:py-20 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full items-center">
        {/* First Column */}
        <section className="text-center md:text-left p-4">
          <h2 className="font-bold text-gray-200 md:text-2xl lg:text-4xl text-2xl mb-4">
            Haris Ahmed Tech
          </h2>
          <p className="text-sm md:text-base mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ut porro reprehenderit quaerat. Dolor repudiandae veritatis quidem libero, in labore ab ad quis!?
          </p>
          <ul className="flex flex-wrap justify-center md:justify-start gap-4">
            <li>
              <TiSocialFacebookCircular
                className="w-10 h-10 text-white"
                aria-label="Facebook"
              />
            </li>
            <li>
              <TiSocialTwitterCircular
                className="w-10 h-10 text-white"
                aria-label="Twitter"
              />
            </li>
            <li>
              <TiSocialLinkedinCircular
                className="w-10 h-10 text-white"
                aria-label="LinkedIn"
              />
            </li>
            <li>
              <TiSocialInstagramCircular
                className="w-10 h-10 text-white"
                aria-label="Instagram"
              />
            </li>
          </ul>
        </section>

        {/* Second Column */}
        <section className="w-full md:w-[20%] text-center md:text-left">
          <h4 className="font-bold text-lg md:text-xl mb-4">Solutions</h4>
          <ul className="list-none text-sm md:text-base space-y-2">
            <li>Analytical</li>
            <li>Marketing</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </section>

        {/* Third Column */}
        <section className="w-full  md:w-[20%] text-center md:text-left">
          <h4 className="font-bold text-lg md:text-xl mb-4">Services</h4>
          <ul className="list-none text-sm md:text-base space-y-2">
            <li>Consulting</li>
            <li>Support</li>
            <li>Development</li>
            <li>Training</li>
          </ul>
        </section>

        {/* Fourth Column */}
        <section className="w-full  text-center md:text-left">
          <h4 className="font-bold text-lg md:text-xl mb-4">Contact Us</h4>
          <ul className="list-none text-sm md:text-base space-y-2">
            <li>Email: contact@harisahmedtech.com</li>
            <li>Phone: +123-456-7890</li>
            <li>Address: 123 Tech Street, Silicon Valley</li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
