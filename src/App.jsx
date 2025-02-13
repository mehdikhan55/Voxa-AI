
import { useState } from 'react';
import { 
  SunIcon, MoonIcon, PhoneIcon, EnvelopeIcon, MapPinIcon,
  BoltIcon, ClockIcon, UserGroupIcon, ChartBarIcon,
  ChatBubbleBottomCenterTextIcon, CpuChipIcon, ShieldCheckIcon,
  ArrowPathIcon, CheckCircleIcon, BeakerIcon
} from '@heroicons/react/24/outline';
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
        <div className="logo">
          <CpuChipIcon className="icon" />
          VOXA AI
        </div>
        <button onClick={toggleDarkMode} className="theme-toggle">
          {darkMode ? <SunIcon className="icon" /> : <MoonIcon className="icon" />}
        </button>
      </nav>

      <section className="hero">
        <div className="ai-badge">
          <BoltIcon className="icon" />
          Powered by Advanced AI
        </div>
        <h1>Revolutionary <span className="highlight">AI Voice Agent</span></h1>
        <p className="hero-subtitle">Transform Healthcare Scheduling with Next-Generation Voice Intelligence</p>
        <div className="hero-features">
          <div><CheckCircleIcon className="icon" /> Smart Scheduling</div>
          <div><ClockIcon className="icon" /> 24/7 Availability</div>
          <div><BeakerIcon className="icon" /> AI-Powered</div>
        </div>
        <button className="cta-button">Experience the Future</button>
      </section>

      <section className="benefits">
        <h2>Why Choose <span className="highlight">Voxa AI</span></h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <ClockIcon className="card-icon" />
            <h3>24/7 Availability</h3>
            <p>Book appointments anytime, anywhere with our always-on AI assistant</p>
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

      <section className="demo">
        <div className="demo-content">
          <h2>Experience Our <span className="highlight">AI Voice Agent</span></h2>
          <p>Call our demo line to interact with our intelligent scheduling assistant</p>
          <div className="phone-number">
            <PhoneIcon className="icon" />
            <span>+1 224 2342434</span>
          </div>
          <button className="cta-button">Try Demo Now</button>
        </div>
      </section>

      <section className="team">
        <h2>Meet Our <span className="highlight">Visionary Team</span></h2>
        <div className="team-grid">
          <div className="team-member supervisor">
            <img src="https://api.dicebear.com/7.x/initials/svg?seed=SA" alt="Sir Asif" className="avatar"/>
            <h3>Sir Asif</h3>
            <p>Supervisor & AI Architect</p>
          </div>
          <div className="team-member">
            <img src="https://api.dicebear.com/7.x/initials/svg?seed=MA" alt="Mehdi Ali" className="avatar"/>
            <h3>Mehdi Ali</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <img src="https://api.dicebear.com/7.x/initials/svg?seed=IQ" alt="Israr Qayum" className="avatar"/>
            <h3>Israr Qayum</h3>
            <p>AI Engineer</p>
          </div>
          <div className="team-member">
            <img src="https://api.dicebear.com/7.x/initials/svg?seed=TA" alt="Tayyaba Afzaal" className="avatar"/>
            <h3>Tayyaba Afzaal</h3>
            <p>UX Designer</p>
          </div>
          <div className="team-member">
            <img src="https://api.dicebear.com/7.x/initials/svg?seed=AR" alt="Attique ur Rehman" className="avatar"/>
            <h3>Attique ur Rehman</h3>
            <p>Backend Engineer</p>
          </div>
          <div className="team-member">
            <img src="https://api.dicebear.com/7.x/initials/svg?seed=TK" alt="Taha Khan" className="avatar"/>
            <h3>Taha Khan</h3>
            <p>ML Specialist</p>
          </div>
          <div className="team-member">
            <img src="https://api.dicebear.com/7.x/initials/svg?seed=HJ" alt="Hassan Javed" className="avatar"/>
            <h3>Hassan Javed</h3>
            <p>Voice AI Expert</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How Our <span className="highlight">AI Voice Agent</span> Works</h2>
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
            <ShieldCheckIcon className="step-icon" />
            <h3>Confirm Booking</h3>
            <p>Secure and instant appointment confirmation</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Get in Touch</h2>
        <div className="contact-info">
          <div className="contact-card">
            <EnvelopeIcon className="icon" />
            <h3>Email Us</h3>
            <p>contact@voxaai.com</p>
          </div>
          <div className="contact-card">
            <PhoneIcon className="icon" />
            <h3>Call Us</h3>
            <p>+1 234 567 8900</p>
          </div>
          <div className="contact-card">
            <MapPinIcon className="icon" />
            <h3>Visit Us</h3>
            <p>123 Tech Street, Innovation City</p>
          </div>
        </div>
      </section>
    </div>
  );
}
