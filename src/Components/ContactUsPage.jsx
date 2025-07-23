import './ContactUs.css';

export default function ContactUs() {
  return (
    <div className="contact-container">
      <div className="emergency-banner">
        Emergency? Dial 911 or contact/visit your nearest law enforcement office.
      </div>

      <h1 className="contact-title">Contact the National Investigation Agency</h1>

      <div className="contact-grid">
        <div className="contact-card">
          <h2>Report a Crime</h2>
          <ul>
            <li><a href="#">Submit a tip online</a></li>
            <li>Call: 1-800-123-4567</li>
          </ul>
        </div>

        <div className="contact-card">
          <h2>Scams & Fraud</h2>
          <ul>
            <li><a href="#">Report a scam</a></li>
            <li>Email: fraudstar@here.gov</li>
          </ul>
        </div>

        <div className="contact-card">
          <h2>Field Offices</h2>
          <ul>
            <li><a href="#">Find local offices</a></li>
            <li>Map locator</li>
          </ul>
        </div>

        <div className="contact-card">
          <h2>Public Info Requests</h2>
          <ul>
            <li><a href="#">Submit FOIA request</a></li>
            <li>Phone: 1-800-REQ-INFO</li>
          </ul>
        </div>
      </div>

      <footer className="contact-footer">
        <p>© 2025 National Investigation Agency. All rights reserved.</p>
      </footer>
    </div>
  );
}
