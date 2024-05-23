import footerLogo from "../assets/img/restaurant.jpg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <img className="footer-image" src={footerLogo} alt="logo" />
        </li>
        <li>
          <h1>Doormat Navigation</h1>
          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/specials" className="nav-link">
                Specials
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/testimonials" className="nav-link">
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/booking" className="nav-link">
                Booking
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h1>Contact Info</h1>
          <ul>
            <li>
              <p>Address</p>
            </li>
            <li>
              <p>Phone Number</p>
            </li>
            <li>
              <p>Email</p>
            </li>
          </ul>
        </li>
        <li>
          <h1>Social Media Links</h1>
          <ul>
            <li>
              <p>Address</p>
            </li>
            <li>
              <p>Phone Number</p>
            </li>
            <li>
              <p>Email</p>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
