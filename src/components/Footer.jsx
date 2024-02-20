import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../asset/logo.jpg";
import { FaFacebook, FaLinkedin, FaTwitter, FaGooglePlus } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-4 ">
          <NavLink
            className="navbar-brand"
            to="/"
            title="Web Designing and Development"
          >
            <img
              src={logo}
              alt="Web Designing and Development Company"
              style={{ maxWidth: "80px" }}
            />
            <p>Buslala <br />Technologies</p>
          </NavLink>
          <p>
            SCF 45, Vyapar Sadan, Sector 14
            <br />
            Gurgaon, Haryana 122001.
          </p>
          <NavLink to="#!" className="text-teal-200 hover:text-white">
            Talk to an expert
          </NavLink>
          <p>+91-124-4118270</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 border-b-2 border-teal-700 pb-1">
            Useful Links
          </h3>
          <ul className="grid grid-cols-2 gap-4">
            <li>
              <NavLink to="/" className="hover:text-teal-200">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-teal-200">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-teal-200">
                Reach Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-teal-200">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:text-teal-200">
                Term & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink to="/web-development" className="hover:text-teal-200">
                Web Development
              </NavLink>
            </li>
            <li>
              <NavLink to="/appdevelopment" className="hover:text-teal-200">
                App Development
              </NavLink>
            </li>
            <li>
              <NavLink to="/school" className="hover:text-teal-200">
                School Management
              </NavLink>
            </li>
            <li>
              <NavLink to="/ecommerce" className="hover:text-teal-200">
                Ecommerce Solution
              </NavLink>
            </li>
            <li>
              <NavLink to="/smm" className="hover:text-teal-200">
                Social Media Marketing (SMM)
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 border-b-2 border-teal-700 pb-1">
            Newsletter
          </h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 text-teal-900"
            />
            <button
              type="submit"
              className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded"
            >
              Subscribe
            </button>
          </form>
          <div className="flex justify-start space-x-4 mt-4">
            
            <NavLink to="https://facebook.com" className="hover:text-teal-200 text-2xl">
            <FaFacebook />
            </NavLink>
            <NavLink to="https://www.linkedin.com" className="hover:text-teal-200 text-2xl">
              <FaLinkedin />
            </NavLink>
            <NavLink to="https://twitter.com" className="hover:text-teal-200 text-2xl">
              <FaTwitter />
            </NavLink>
            <NavLink to="https://google.com" className="hover:text-teal-200 text-2xl">
              <FaGooglePlus />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-8">
        © Copyright Buslala Technologies 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
