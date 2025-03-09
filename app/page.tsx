'use client';

import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import { fetchImages } from '../utils/unsplash';
import Link from 'next/link';
import Chatbot from "./components/Chatbot";
//mport '../styles/Home.css';

// Slick carousel settings
const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

export default function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      try {
        const fetchedImages = await fetchImages(5);
        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    getImages();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="hero-container">
        {loading ? (
          <p className="loading-text">Loading images...</p>
        ) : images.length > 0 ? (
          <Slider {...settings} className="hero-slider">
            {images.map((image) => (
              <div key={image.id} className="hero-slide">
                <img
                  src={`${image.urls.raw}&w=1920&h=1080&fit=crop&auto=format&q=80`}
                  alt={image.alt_description || 'Travel Image'}
                  className="hero-image"
                  loading="lazy"
                />
                <div className="overlay">
                  <h1 className="hero-title">EXPLORE THE CANADA</h1>
                  <button className="explore-btn">
                    <Link href='/itinerary'>START YOUR JOURNEY</Link>
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="loading-text">No images found.</p>
        )}
      </div>

      <div className="itinerary-section">
      {/* Row 1: Box 1 + Image */}
      <div className="custom-row">
      <motion.img 
    src="/plan.jpg" 
    alt="Travel" 
    className="custom-image image1"
    initial={{ opacity: 0, x: 50 }} 
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 0.6, delay: 0.2 }}
  />
  <motion.div 
    initial={{ opacity: 0, x: -50 }} 
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 0.6 }} 
    className="text-box text-box1"
  >
    <h2 className="section-title">Plan Your Dream Trip</h2>
    <p className="intro-text">
      Discover breathtaking destinations, cultural landmarks, and exciting adventures. 
      Our travel itinerary helps you plan every step of your journey with ease.
    </p>
  </motion.div>
</div>

{/* Row 2: Image + Box 2 */}
<div className="custom-row reverse-row">
  <motion.img 
    src="/top.jpg" 
    alt="City Travel" 
    className="custom-image image2"
    initial={{ opacity: 0, x: 50 }} 
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 0.6, delay: 0.2 }}
  />
  <motion.div 
    initial={{ opacity: 0, x: -50 }} 
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 0.6 }} 
    className="text-box text-box2"
  >
    <h3 className="destination-title">Top Destinations in Canada</h3>
    <ul className="destination-list">
      <li><strong>Vancouver:</strong> Experience beautiful mountain views, Stanley Park, and vibrant city life.</li>
      <li><strong>Toronto:</strong> Explore the iconic CN Tower, Royal Ontario Museum, and cultural hubs.</li>
      <li><strong>Banff:</strong> Discover breathtaking landscapes, stunning lakes, and outdoor adventures.</li>
      <li><strong>Montreal:</strong> Experience a unique blend of French and English culture.</li>
    </ul>
  </motion.div>
</div>

{/* Row 3: Box 3 + Image */}
<div className="custom-row">
<motion.img 
    src="/backet.jpg" 
    alt="Adventure Travel" 
    className="custom-image image3"
    initial={{ opacity: 0, x: 50 }} 
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 0.6, delay: 0.2 }}
  />
  <motion.div 
    initial={{ opacity: 0, x: -50 }} 
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 0.6 }} 
    className="text-box text-box3"
  >
    <h3 className="travel-tips-title">Travel Tips</h3>
    <ul className="travel-tips-list">
      <li>Plan ahead but stay flexible.</li>
      <li>Pack light and carry essentials.</li>
      <li>Learn a few basic local phrases.</li>
      <li>Embrace the unexpected adventures!</li>
    </ul>
  </motion.div>
  
</div>

      
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-white p-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="container bg-light text-dark p-5 rounded shadow-lg text-center"
        >
          <h1 className="display-4 fw-bold mb-3">Tag us on your next trip.</h1>
          <p className="lead mb-4">
            Share your travel experiences with us! We’d love to see where you’ve been.
          </p>
          
          {/* Email */}
          <p className="fw-bold text-primary fs-5">
            📩 Email us at: <a href="mailto:apurvarajput1812@gmail.com">apurvarajput1812@gmail.com</a>
          </p>

          {/* Travel Image Portals */}
          <div className="row mt-4">
            {[
              "/1.jpg",
              "/2.jpg",
              "/3.jpg",
              "/4.jpg"
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="col-md-3 mb-4"
              >
                <div className="portal">
                  <img src={image} alt="Travel" className="img-fluid rounded-4 shadow-lg" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hashtags */}
          <div className="mt-4">
            <p className="fw-semibold fs-5">#traveldifferently #mindtripping #mindtripai #traveltogether #travelyourway</p>
          </div>
        </motion.div>
      </div>

</div>
    <Chatbot />
    </div>
  );
}
