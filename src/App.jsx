import { useState } from 'react';
import reactLogo from './assets/greenlandslogo.png';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={reactLogo} className="logo" alt="Greenlands Café, Bar & Restaurant logo" />
          <h1>Greenlands Café, Bar & Restaurant</h1>
        </div>
        <nav>
          <a href="#photos">Photos</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="photos" className="photos-section">
        <h2>Photos</h2>
        <div className="photos-grid">
          <img src="photo1.jpg" alt="Interior 1" />
          <img src="photo2.jpg" alt="Interior 2" />
          <img src="photo3.jpg" alt="Dish 1" />
          <img src="photo4.jpg" alt="Dish 2" />
        </div>
      </section>

      <section id="menu" className="menu-section">
        <h2>Menu</h2>
        <div className="menu">
          <div className="menu-category">
            <h3>Appetizers</h3>
            <p>Delicious starters to begin your meal.</p>
          </div>
          <div className="menu-category">
            <h3>Main Courses</h3>
            <p>A variety of mouth-watering main dishes.</p>
          </div>
          <div className="menu-category">
            <h3>Desserts</h3>
            <p>Sweet treats to end your meal.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>Welcome to Greenlands Café, Bar & Restaurant. We pride ourselves on offering a unique dining experience with a wide selection of dishes made from the freshest ingredients.</p>
        <p>Our mission is to provide excellent service and delicious food in a welcoming atmosphere. Join us for breakfast, lunch, or dinner and enjoy a variety of culinary delights.</p>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>For reservations or inquiries, please contact us:</p>
        <p>Email: info@greenlandscafe.com</p>
        <p>Phone: (123) 456-7890</p>
        <div className="location">
          <h3>Location</h3>
          <p>123 Greenlands Street, City, Country</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9529132338743!2d-122.08385168468965!3d37.3860517798289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5aa5d88e1b7%3A0x69c8c09e3c5b5b0c!2sGoogleplex!5e0!3m2!1sen!2sus!4v1619130415405!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Greenlands Café, Bar & Restaurant. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
