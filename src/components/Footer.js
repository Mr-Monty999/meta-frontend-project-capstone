import footerLogo from "../assets/img/restaurant.jpg";
function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <img src={footerLogo} alt="logo" />
        </li>
        <li>
          <h1>Doormat Navigation</h1>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#Menu">Menu</a>
            </li>
            <li>
              <a href="#reservation">Reservations</a>
            </li>
            <li>
              <a href="#order-online">Order Online</a>
            </li>
            <li>
              <a href="#login">Login</a>
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
