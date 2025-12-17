import "../assets/css/LandingPageContainer.css";
import {
  FaUserTie,
  FaStore,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaBolt,
  FaClipboardCheck,
  FaEnvelope,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";

function LandingPageContainer() {
  return (
    <>

      <nav className="navbar">
        <div className="logo-wrap">
          <span className="logo-badge">HP</span>
          <span className="logo-text">HawkerPro</span>
        </div>

        <ul className="nav-links">
          <li>Home</li>

          <li className="dropdown">
            <span className="nav-pill">Sign In ▾</span>
            <ul className="dropdown-menu modern-dropdown">
              <li><FaUserTie className="dd-icon" /> Hawker Login</li>
              <li><FaStore className="dd-icon" /> Vendor Login</li>
            </ul>
          </li>

          <li className="dropdown">
            Services ▾
            <ul className="dropdown-menu modern-dropdown">
              <li><FaUserTie className="dd-icon" /> Hawker Portal</li>
              <li><FaStore className="dd-icon" /> Vendor Portal</li>
              <li><FaMapMarkerAlt className="dd-icon" /> GPS-Based Delivery</li>
              <li><FaShieldAlt className="dd-icon" /> Digital KYC Verification</li>
            </ul>
          </li>

          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="badge">
          <FaCheckCircle /> Now with Digital KYC Verification
        </div>

        <h1>
          Streamline Your <span>Hawker</span> & <br />
          <span>Vendor</span> Operations
        </h1>

        <p className="subtitle">
          A comprehensive platform for managing hawker licenses, vendor registrations,
          GPS-based deliveries, and digital KYC verification — all in one place.
        </p>

        <div className="hero-features">
          <span><FaStore /> Seamless vendor management</span>
          <span><FaMapMarkerAlt /> Real-time GPS tracking</span>
          <span><FaShieldAlt /> Secure digital verification</span>
        </div>

        <div className="hero-buttons">
          <button className="primary">Get Started Free →</button>
          <button className="secondary">Learn More</button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Everything You Need in One Platform</h2>
        <p className="section-subtitle">
          Our comprehensive suite of tools helps you manage hawkers, vendors, and deliveries efficiently.
        </p>

        <div className="feature-grid">
          <Feature icon={<FaUserTie />} title="Hawker Portal"
            text="Complete hawker license management with easy application tracking and renewal reminders." />

          <Feature icon={<FaStore />} title="Vendor Portal"
            text="Streamlined vendor registration and management with real-time status updates." />

          <Feature icon={<FaClipboardCheck />} title="Admin Panel"
            text="Powerful admin dashboard for overseeing all operations and generating reports." />

          <Feature icon={<FaMapMarkerAlt />} title="GPS-Based Delivery"
            text="Real-time location tracking for efficient delivery management and route optimization." />

          <Feature icon={<FaShieldAlt />} title="Digital KYC"
            text="Secure digital verification process with document upload and instant validation." />

          <Feature icon={<FaBolt />} title="Instant Updates"
            text="Real-time notifications and status updates across all portals and services." />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="steps">
        <h1>How It Works</h1>
        <p className="section-subtitle">
          Get started in four simple steps and unlock the full potential of our platform.
        </p>

        <div className="step-grid">
          <Step num="01" icon={<FaUserTie />} title="Create Account"
            text="Sign up as a hawker or vendor with your basic information." />

          <Step num="02" icon={<FaClipboardCheck />} title="Submit Documents"
            text="Upload required documents for KYC verification." />

          <Step num="03" icon={<FaShieldAlt />} title="Get Verified"
            text="Our team reviews and verifies your application quickly." />

          <Step num="04" icon={<FaBolt />} title="Start Operating"
            text="Access your portal and start managing your business." />
        </div>
      </section>

{/* CONTACT */}
<section className="contact-section">
  <div className="contact-container">
    <div className="contact-left">
      <h2>Need Help? Contact Us</h2>
      <p className="contact-desc">
        Our support team is here to help you with any questions or concerns.
        Reach out through any of these channels.
      </p>

      <div className="contact-grid">
        <div className="contact-item">
          <FaEnvelope />
          <div>
            <span>Email</span>
            <p>support@hawkerpro.com</p>
          </div>
        </div>

        <div className="contact-item">
          <FaPhoneAlt />
          <div>
            <span>Phone</span>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt />
          <div>
            <span>Address</span>
            <p>123 Business District, City Center</p>
          </div>
        </div>

        <div className="contact-item">
          <FaBolt />
          <div>
            <span>Support Hours</span>
            <p>Mon–Fri, 9AM – 6PM</p>
          </div>
        </div>
      </div>
    </div>

    <div className="contact-card">
      <div className="contact-icon-circle">
        <FaEnvelope />
      </div>
      <h2>Quick Response</h2>
      <p>
        We typically respond to all inquiries within 24 hours during business days.
      </p>
    </div>
  </div>
</section>


{/* FOOTER */}
<footer className="footer">
  <div className="footer-grid">
    <div>
      <div className="logo-wrap">
        <span className="logo-badge">HP</span>
        <span className="logo-text">HawkerPro</span>
      </div>
      <p>
        Streamlining hawker and vendor management for modern businesses.
      </p>
    </div>

    <div>
      <h4>Portals</h4>
      <p>Hawker Portal</p>
      <p>Vendor Portal</p>
      <p>Admin Panel</p>
    </div>

    <div>
      <h4>Services</h4>
      <p>GPS Delivery</p>
      <p>KYC Verification</p>
      <p>License Management</p>
    </div>

    <div>
      <h4>Login</h4>
      <p>Hawker Login</p>
      <p>Vendor Login</p>
      <p>Admin Login</p>
    </div>
  </div>

  <div className="footer-bottom">
    © 2024 HawkerPro. All rights reserved.
  </div>
</footer>

    </>
  );
}

const Feature = ({ icon, title, text }) => (
  <div className="card">
    <div className="icon-circle">{icon}</div>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

const Step = ({ num, icon, title, text }) => (
  <div className="step-card">
    <div className="step-icon">{icon}</div>
    <span className="step-num">{num}</span>
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
);

export default LandingPageContainer;