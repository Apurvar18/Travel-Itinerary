'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className='about-background'>
      <Navbar />
    
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-white p-4">
        {/* Animated container */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="container bg-light text-dark p-5 rounded shadow-lg text-center"
        >
          <h1 className="display-4 fw-bold mb-3">About Our Travel Itinerary</h1>
          <p className="lead mb-4">
            Our goal is to make travel seamless, exciting, and personalized. 
            Whether you’re a solo traveler, a couple, or exploring with family, we provide itineraries tailored to your needs.
            Explore the world with confidence and ease, as we guide you every step of the way!
          </p>

          {/* Three key values with animation */}
          <div className="row">
            {[
              { title: 'Personalization', text: 'Custom itineraries designed just for you, based on your preferences and travel style.' },
              { title: 'Flexibility', text: 'Adjust and tailor your trip in real-time to fit your changing plans and needs.' },
              { title: 'Local Experience', text: 'Immerse yourself in authentic local experiences with insider knowledge from locals.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                className="col-md-4 mb-4"
              >
                <div className="card shadow-sm p-4 h-100">
                  <h2 className="h4">{item.title}</h2>
                  <p className="text-muted">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-4" style={{ position: 'relative', zIndex: 10 }}>
            <p className="fw-semibold fs-5">Ready to plan your next adventure?</p>
            <div className="d-flex justify-content-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn btn-primary btn-lg mt-3"
                  style={{ zIndex: 20 }} // Ensure the button stays above other content
                >
                  Start Your Journey
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
