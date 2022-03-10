import { Link } from "@reach/router";
import logo from "../images/vXpress-logo-small.png";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul className="navigation">
          <Link to="/home" className="navigation__link">
            <img src={logo} alt="Home" className="navigation__logo" />
          </Link>
          <li className="navigation__listItem">
            <Link to="/shop" className="navigation__link">
              Marketplace
            </Link>
          </li>
          <li className="navigation__listItem">
            <Link to="/about" className="navigation__link">
              About us
            </Link>
          </li>
          <li className="navigation__listItem">
            <Link to="/Contact" className="navigation__link">
              Contact
            </Link>
          </li>
          <a href="http://localhost:3000" rel="noreferrer" target="_blank">
            Log in
          </a>
        </ul>
      </nav>
    </header>
  );
}
