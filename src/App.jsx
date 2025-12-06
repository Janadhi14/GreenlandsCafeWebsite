import { useState } from 'react';
import logo from './assets/greenlandslogo.png';
import insideImage from './assets/inside.jpg';
import outsideImage from './assets/outside.jpg';
import salmonImage from './assets/salmon.jpg';
import './App.css';

function App() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logo} alt="Greenlands Café Logo" />
            <span>Greenlands</span>
          </div>
          <div className="nav-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-label">Welcome to</div>
          <h1>Greenlands Café<br/>& Restaurant</h1>
          <p className="hero-subtitle">Where every meal is a celebration of fresh ingredients,<br/>expert craftsmanship, and warm hospitality.</p>
          <div className="hero-buttons">
            <a href="#menu" className="btn btn-primary">Explore Menu</a>
            <a href="#contact" className="btn btn-secondary">Book a Table</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <div className="section-label">Our Story</div>
              <h2>Crafting memorable<br/>dining experiences</h2>
              <p>At Greenlands Café, Bar & Restaurant, we believe that great food brings people together. Our commitment to quality begins with sourcing the finest local ingredients and ends with every perfectly plated dish.</p>
              <p>From sunrise breakfast to late evening dinners, we've been a cornerstone of the community for over 15 years, serving authentic flavors in an atmosphere that feels like home.</p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
              <div className="stat">
                <div className="stat-number">100+</div>
                <div className="stat-label">Menu Items</div>
              </div>
              <div className="stat">
                <div className="stat-number">50k+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Visual Experience</div>
            <h2>A glimpse inside</h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item gallery-large">
              <img src={insideImage} alt="Restaurant Interior" />
              <div className="gallery-overlay">
                <p>Our Cozy Interior</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src={outsideImage} alt="Restaurant Exterior" />
              <div className="gallery-overlay">
                <p>Welcoming Exterior</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src={salmonImage} alt="Signature Dishes" />
              <div className="gallery-overlay">
                <p>Signature Dishes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="section-label">Get in Touch</div>
              <h2>Visit us today</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-label">Location</div>
                  <p>215 Main South Road<br/>Dunedin, New Zealand</p>
                </div>
                <div className="contact-item">
                  <div className="contact-label">Hours</div>
                  <p>Open Every Day<br/>11:00 AM - 11:00 PM</p>
                </div>
                <div className="contact-item">
                  <div className="contact-label">Contact</div>
                  <p>03-488-4830<br/>greenlandscafe@yahoo.com</p>
                </div>
              </div>
            </div>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.8658447287895!2d170.49842931573957!3d-45.87867997910647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa82eaafa99ccc021%3A0x6c5c2eddbf7e3eb9!2s215%20Main%20South%20Road%2C%20Saint%20Kilda%2C%20Dunedin%209012%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src={logo} alt="Greenlands Logo" />
              <p>Greenlands Café & Restaurant</p>
            </div>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#menu">Menu</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Greenlands Café, Bar & Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
