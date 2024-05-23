import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <img className="logo" src={logo} alt="logo" />
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
    </nav>
  );
}

export default Nav;
