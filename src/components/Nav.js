import logo from "../assets/img/logo.svg";

function Nav() {
  return (
    <nav>
      <img className="logo" src={logo} alt="logo" />
      <ul>
        <li className="nav-item">
          <a className="nav-link" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Menu">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#reservation">Reservations</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#order-online">Order Online</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
