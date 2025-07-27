import "./Header.css";
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-left">
          <div className="fbi-seal">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ffog7VwYCE23P3MWHI6S9Mt87fbNq6XoJQ&s"
              alt=""
            />
          </div>
          <div>
            <h1>FBI</h1>
          </div>
          <div>
            <p>
                <strong>
                FEDERAL BUREAU
              <br />
              OF INVESTIGATION

                </strong>
            </p>
          </div>
        </div>
        <div className="socials">
            <div>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/022/013/808/small/f-initial-letter-for-logo-company-isolated-vector.jpg" alt="facebook" />
            </div>
            <div>
                <img src="https://static.vecteezy.com/system/resources/previews/065/386/813/non_2x/x-circle-black-logo-icon-x-app-editable-transparent-background-premium-social-media-design-for-digital-download-free-png.png" alt="" />
            </div>
            <div>
                <img src="https://static.vecteezy.com/system/resources/previews/027/654/487/non_2x/youtube-glyph-icon-for-personal-and-commercial-use-free-vector.jpg" alt="" />
            </div>
            <div>
                <img src="https://www.shutterstock.com/image-vector/linkedin-american-business-icon-logo-600nw-1779645701.jpg" alt="" />
            </div>
            <div>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/460/small/instagram-logo-instagram-icon-transparent-free-png.png" alt="" />
            </div>
            <div>
                <img src="https://static.vecteezy.com/system/resources/previews/017/608/909/non_2x/e-mail-icon-mail-envelope-service-contact-message-sending-send-email-icon-e-mail-address-vector.jpg" alt="" />
            </div>
        </div>
      </div>
      <div className="nav-links">
        <li><Link to="/criminals">FBI</Link></li>
        <li><Link to="/interpol">INTERPOL</Link></li>
        <li><Link to="/aboutus">ABOUT US</Link></li>
        <li><Link to="/contactus">CONTACT US</Link></li>
      </div>
    </div>
  );
}
export default Header;
