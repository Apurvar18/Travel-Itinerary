'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar'; 

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, subject, message });
    alert('Your message has been sent!');
  };

  return (
    <div className="contact-background">
      <Navbar />
      <div className="container">
        {/* Contact Section */}
        <div className="contact-header text-center">
          <h1>Contact</h1>
          <p>Send me your questions, comments, or suggestions!</p>
          <p>If you'd like to work with me or have a question, contact me using the form below.</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              className="form-control"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              placeholder="Enter subject"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              className="form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Enter your message"
              style={{ minHeight: '150px' }}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
