'use client';

import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home'); // Track active link

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const black = '#000000'; // Define the black color for text
  const grey = '#808080'; // Define the grey color for hover
  const activeLinkStyle = { borderBottom: '2px solid black' }; // Style for active link

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap" rel="stylesheet" />
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-lg" style={{borderBottom: '2px solid #D3D3D3', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
        <div className="container-fluid">
          {/* Site Title */}
          <span className="navbar-brand" style={{ fontSize: '24px', fontWeight: 'bold', color: 'black', fontFamily: 'Baloo Bhai 2' }}>
  Travel Itinerary
</span>


          {/* Mobile Menu Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" 
                      className="nav-link" 
                      style={{ color: black, transition: 'color 0.3s', ...(activeLink === 'home' ? activeLinkStyle : {}) }} 
                      onClick={() => setActiveLink('home')} // Set "Home" as active
                      onMouseEnter={(e) => e.target.style.color = grey} 
                      onMouseLeave={(e) => e.target.style.color = black}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/itinerary" 
                      className="nav-link" 
                      style={{ color: black, transition: 'color 0.3s', ...(activeLink === 'itinerary' ? activeLinkStyle : {}) }} 
                      onClick={() => setActiveLink('itinerary')} // Set "Itinerary" as active
                      onMouseEnter={(e) => e.target.style.color = grey} 
                      onMouseLeave={(e) => e.target.style.color = black}>
                  Itinerary
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blog" 
                   className="nav-link" 
                   style={{ color: black, transition: 'color 0.3s', ...(activeLink === 'blog' ? activeLinkStyle : {}) }} 
                   onClick={() => setActiveLink('blog')} // Set "Blog" as active
                   onMouseEnter={(e) => e.target.style.color = grey} 
                   onMouseLeave={(e) => e.target.style.color = black}>
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" 
                   className="nav-link" 
                   style={{ color: black, transition: 'color 0.3s', ...(activeLink === 'contact' ? activeLinkStyle : {}) }} 
                   onClick={() => setActiveLink('contact')} // Set "Contact" as active
                   onMouseEnter={(e) => e.target.style.color = grey} 
                   onMouseLeave={(e) => e.target.style.color = black}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/About" 
                   className="nav-link" 
                   style={{ color: black, transition: 'color 0.3s', ...(activeLink === 'About' ? activeLinkStyle : {}) }} 
                   onClick={() => setActiveLink('About')} // Set "About" as active
                   onMouseEnter={(e) => e.target.style.color = grey} 
                   onMouseLeave={(e) => e.target.style.color = black}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
