import { useState } from 'react';
import logo from './assets/greenlandslogo.png';
import insideImage from './assets/inside.jpg';
import outsideImage from './assets/outside.jpg';
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
              <div className="gallery-placeholder">
                <p>Signature Dishes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">What We Serve</div>
            <h2>Explore our menu</h2>
            <p className="section-description">Each dish tells a story of passion, precision, and the pursuit of culinary perfection.</p>
          </div>
          <div className="menu-grid">
            <div className="menu-card">
              <div className="menu-number">01</div>
              <h3>Appetizers</h3>
              <p>Start your culinary journey with our carefully curated selection of starters, featuring fresh, seasonal ingredients that awaken your palate.</p>
              <div className="menu-link">View Full Menu →</div>
            </div>
            <div className="menu-card">
              <div className="menu-number">02</div>
              <h3>Main Courses</h3>
              <p>Indulge in our signature main dishes, from classic favorites to innovative creations that celebrate authentic local flavors and traditions.</p>
              <div className="menu-link">View Full Menu →</div>
            </div>
            <div className="menu-card">
              <div className="menu-number">03</div>
              <h3>Desserts</h3>
              <p>Complete your meal with our decadent desserts, handcrafted daily by our pastry chefs using time-honored techniques and premium ingredients.</p>
              <div className="menu-link">View Full Menu →</div>
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
                  <p>123 Greenlands Street<br/>City, Country</p>
                </div>
                <div className="contact-item">
                  <div className="contact-label">Hours</div>
                  <p>Monday - Friday<br/>8:00 AM - 10:00 PM</p>
                  <p>Saturday - Sunday<br/>9:00 AM - 11:00 PM</p>
                </div>
                <div className="contact-item">
                  <div className="contact-label">Contact</div>
                  <p>03-488-4830<br/>greenlandscafe@yahoo.com</p>
                </div>
              </div>
            </div>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9529132338743!2d-122.08385168468965!3d37.3860517798289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5aa5d88e1b7%3A0x69c8c09e3c5b5b0c!2sGoogleplex!5e0!3m2!1sen!2sus!4v1619130415405!5m2!1sen!2sus"
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
