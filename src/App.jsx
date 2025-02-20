import react, { useState } from "react";
import {
  SunIcon,
  MoonIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  BoltIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form data:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <nav>
        <div className="logo">VOXA AI</div>
        <button onClick={toggleDarkMode} className="theme-toggle">
          {darkMode ? (
            <SunIcon className="icon" />
          ) : (
            <MoonIcon className="icon" />
          )}
        </button>
      </nav>

      <section className="hero">
        <div className="ai-badge">
          <BoltIcon className="advance-ai-icon"/>
          Powered by Advanced AI
        </div>
        <h1>
          Hospital Appointments Made Simple with{" "}
          <span className="highlight">AI Voice Agent</span>
        </h1>
        <p className="hero-subtitle">
          Revolutionizing Healthcare Scheduling Through Intelligent Voice
          Technology
        </p>
        <div className="hero-features">
          <div>
            <CheckCircleIcon className="icon" /> Smart Scheduling
          </div>
          <div>
            <ClockIcon className="icon" /> 24/7 Availability
          </div>
          <div>
            <BeakerIcon className="icon" /> AI-Powered
          </div>
        </div>
        <button className="cta-button">
          <a style={{ textDecoration: 'none', color: '#fff' }} href="#demo">
            Experience the Future
          </a>
        </button>
      </section>

      <section className="benefits">
        <h2>
          Why Choose <span className="highlight">Voxa AI</span>
        </h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <ClockIcon className="card-icon" />
            <h3>24/7 Availability</h3>
            <p>
              Book appointments anytime, anywhere with our always-on AI
              assistant
            </p>
          </div>
          <div className="benefit-card">
            <ChartBarIcon className="card-icon" />
            <h3>Efficient Booking</h3>
            <p>Reduce wait times by up to 80% with smart scheduling</p>
          </div>
          <div className="benefit-card">
            <CpuChipIcon className="card-icon" />
            <h3>Smart Scheduling</h3>
            <p>AI-powered optimization for perfect appointment matching</p>
          </div>
          <div className="benefit-card">
            <UserGroupIcon className="card-icon" />
            <h3>Patient-Centric</h3>
            <p>Intuitive voice interface for seamless user experience</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>
          How Our <span className="highlight">AI Voice Agent</span> Works
        </h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <ChatBubbleBottomCenterTextIcon className="step-icon" />
            <h3>Call Our Number</h3>
            <p>Connect with our intelligent AI assistant instantly</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <ArrowPathIcon className="step-icon" />
            <h3>State Your Needs</h3>
            <p>Natural conversation to understand your preferences</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <ClockIcon className="step-icon" />
            <h3>Check Availability</h3>
            <p>AI checks and suggests available time slots</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <ShieldCheckIcon className="step-icon" />
            <h3>Confirm Booking</h3>
            <p>Secure and instant appointment confirmation</p>
          </div>
        </div>
      </section>

      <section className="demo" id="demo">
        <div className="demo-content">
          <h2>
            Experience Our <span className="highlight">AI Voice Agent</span>
          </h2>
          <p>
            Call our demo line to interact with our intelligent scheduling
            assistant
          </p>
          <div className="demo-content-container">
            <div className="phone-number">
              <PhoneIcon className="icon" />
              <span>+1 (760) 825 0076</span>
            </div>
            <a href="tel:+17608250076">
              <button className="cta-button">Try Demo Now</button>
              </a>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>
          Meet Our <span className="highlight">Visionary Team</span>
        </h2>
        <div className="team-grid">
          <div className="team-member supervisor">
            <UserGroupIcon className="avatar-icon" />
            <h3>Lec. Asif Mehmood</h3>
            <p>Supervisor</p>
          </div>
          <div className="team-member">
            <UserGroupIcon className="avatar-icon" />
            <h3>Mehdi Ali</h3>
            <p>Team Member</p>
          </div>
          <div className="team-member">
            <UserGroupIcon className="avatar-icon" />
            <h3>Israr Qayum</h3>
            <p>Team Member</p>
          </div>
          <div className="team-member">
            <UserGroupIcon className="avatar-icon" />
            <h3>Attique ur Rehman</h3>
            <p>Team Member</p>
          </div>
          <div className="team-member">
            <UserGroupIcon className="avatar-icon" />
            <h3>Tayyaba Afzaal</h3>
            <p>Team Member</p>
          </div>
          <div className="team-member">
            <UserGroupIcon className="avatar-icon" />
            <h3>Taha Khan</h3>
            <p>Team Member</p>
          </div>
          <div className="team-member">
            <UserGroupIcon className="avatar-icon" />
            <h3>Hassan Javed</h3>
            <p>Team Member</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-container">
          <div className="contact-form">
            <h2 style={{ color: "white" }}>
              Connect With <span className="highlight">The Future</span>
            </h2>
            <p className="contact-subtitle">
              Ready to revolutionize your healthcare scheduling?
            </p>
            <form className="future-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="future-input"
                  onChange={handleInputChange}
                  name="name"
                  value={formData.name}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="future-input"
                  onChange={handleInputChange}
                  name="email"
                  value={formData.email}
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  className="future-input"
                  rows="4"
                  onChange={handleInputChange}
                  name="message"
                  value={formData.message}
                ></textarea>
              </div>
              <button type="submit" className="future-button">
                Send Message
              </button>
            </form>
          </div>
          <div className="contact-details">
            <div className="contact-card">
              <EnvelopeIcon className="contact-icon" />
              <div className="contact-info">
                <h3>Email Us</h3>
                <p>mehdikhanofficial@gmail.com</p>
              </div>
            </div>
            <div className="contact-card">
              <PhoneIcon className="contact-icon" />
              <div className="contact-info">
                <h3>Call Us</h3>
                <p>+92 313 2297998</p>
              </div>
            </div>
            <div className="contact-card">
              <MapPinIcon className="contact-icon" />
              <div className="contact-info">
                <h3>Visit Us</h3>
                <p>National University of Technology (NUTECH) Islamabad</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
