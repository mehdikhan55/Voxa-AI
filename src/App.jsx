
import { useState } from 'react';
import { SunIcon, MoonIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <nav>
        <div className="logo">VOXA AI</div>
        <button onClick={toggleDarkMode} className="theme-toggle">
          {darkMode ? <SunIcon className="icon" /> : <MoonIcon className="icon" />}
        </button>
      </nav>

      <section className="hero">
        <h1>The Future of Hospital Appointments</h1>
        <p>AI-Powered Voice Solutions for Seamless Healthcare Scheduling</p>
        <button className="cta-button">Get Started</button>
      </section>

      <section className="benefits">
        <h2>Why Choose Voxa AI</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>24/7 Availability</h3>
            <p>Book appointments anytime, anywhere</p>
          </div>
          <div className="benefit-card">
            <h3>Efficient Booking</h3>
            <p>Reduce wait times significantly</p>
          </div>
          <div className="benefit-card">
            <h3>Smart Scheduling</h3>
            <p>AI-powered optimization</p>
          </div>
          <div className="benefit-card">
            <h3>Patient-Centric</h3>
            <p>Seamless user experience</p>
          </div>
        </div>
      </section>

      <section className="demo">
        <h2>Experience Voxa AI</h2>
        <p>Call our demo line to try it yourself</p>
        <div className="phone-number">
          <PhoneIcon className="icon" />
          <span>+1 224 2342434</span>
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member supervisor">
            <h3>Sir Asif</h3>
            <p>Supervisor</p>
          </div>
          <div className="team-member">
            <h3>Mehdi Ali</h3>
          </div>
          <div className="team-member">
            <h3>Israr Qayum</h3>
          </div>
          <div className="team-member">
            <h3>Tayyaba Afzaal</h3>
          </div>
          <div className="team-member">
            <h3>Attique ur Rehman</h3>
          </div>
          <div className="team-member">
            <h3>Taha Khan</h3>
          </div>
          <div className="team-member">
            <h3>Hassan Javed</h3>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Call Our Number</h3>
            <p>Connect with our AI assistant</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>State Your Needs</h3>
            <p>Tell us your preferred time and doctor</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Confirm Booking</h3>
            <p>Receive instant confirmation</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div>
            <EnvelopeIcon className="icon" />
            <p>contact@voxaai.com</p>
          </div>
          <div>
            <PhoneIcon className="icon" />
            <p>+1 234 567 8900</p>
          </div>
          <div>
            <MapPinIcon className="icon" />
            <p>123 Tech Street, Innovation City</p>
          </div>
        </div>
      </section>
    </div>
  );
}
