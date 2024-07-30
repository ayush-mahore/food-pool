import { useState } from "react";
import { APP_LOGO } from "../utils/configMap";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginButtonState, setLoginButtonState] = useState(true);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={APP_LOGO} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            {" "}
            <Link to="/" className="header-links">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link to="/About" className="header-links">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/ContactUs" className="header-links">
              Contact
            </Link>
          </li>
          <li className="header-links">Cart</li>
          <button
            className="login"
            onClick={() => {
              setLoginButtonState(!loginButtonState);
            }}
          >
            {loginButtonState ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
