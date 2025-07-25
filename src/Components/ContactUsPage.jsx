import './ContactUsPage.css';

export default function ContactUs() {
  return (
    <div className="contact-container">
      <div className="emergency-banner">
        Emergency? Dial 911 or contact/visit your nearest law enforcement office immediately.
      </div>

      <h1 className="contact-title">Contact the National Investigation Agency</h1>

      <div className="fbi-contact">
      What would you like to contact the FBI about?
      </div>

      <div className="contact-grid">

        <div className="contact-card">
          <h2>Report a Crime</h2>
          <ul>
            <li><a href="https://tips.fbi.gov/home">Submit a tip online</a></li>
            <li>Call: 1-800-123-4567</li>
          </ul>
        </div>

        <div className="contact-card">
          <h2>Scams & Fraud</h2>
          <ul>
            <li><a href="https://www.ic3.gov/">Report a scam</a></li>
            <li>Email: fraudstar@here.gov</li>
          </ul>
        </div>

          <div className="contact-card">
          <h2>Types of Crimes</h2>
          <ul>
            <li><a href="https://www.fbi.gov/investigate">Crimes to contact about</a></li>
            <li><a href="https://www.fbi.gov/investigate/cyber">Online Crimes</a></li>
          </ul>
        </div>

        <div className="contact-card">
        <h2>Other Reason</h2>
          <ul>
            <li><a href="https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/identity-history-summary-checks">Criminal History Check</a></li>
            <li><a href="https://fbijobs.gov/">Jobs and Internships</a></li>
          </ul>
        </div>

        <div className="contact-card">
        <h2>Find local offices</h2>
          <ul>
            <li><a href="https://www.fbi.gov/contact-us/field-offices">Fields Offices</a></li>
            <li><a href="https://www.fbi.gov/contact-us/fbi-headquarters">FBI Headquaters</a></li>
            <li><a href="https://www.fbi.gov/contact-us/international-offices">International Offices</a></li>
          </ul>
        </div>

          <div className="contact-card">
          <h2>FBI Headquaters Tour</h2>
          <ul>
            <li><a href="https://www.fbi.gov/contact-us/fbi-headquarters/the-fbi-experience">Book a visit to The FBI Experience.</a></li>
            <li>Call: 1-800-987-6543</li>
          </ul>
        </div>


        <div className="contact-card">
          <h2>Public Info Requests</h2>
          <ul>
            <li><a href="https://www.fbi.gov/how-we-can-help-you/more-fbi-services-and-information/freedom-of-information-privacy-act">Submit FOIA request</a></li>
            <li>Call: 1-800-REQ-INFO</li>
          </ul>
        </div>
        


      </div>


    </div>
  );
}
