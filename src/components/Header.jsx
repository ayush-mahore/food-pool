import { APP_LOGO } from "../utils/configMap";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={APP_LOGO} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
