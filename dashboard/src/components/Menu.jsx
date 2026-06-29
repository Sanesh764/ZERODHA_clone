import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu-link";
  const activeMenuClass = "menu-link active";

  return (
    <div className="menu-container">
      <div className="logo-brand">
        <Link to="/" onClick={() => handleMenuClick(0)}>
          <img src="logo.png" alt="Kite" className="logo-img" />
        </Link>
      </div>

      <nav className="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" onClick={() => handleMenuClick(0)} className={selectedMenu === 0 ? activeMenuClass : menuClass}>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/orders" onClick={() => handleMenuClick(1)} className={selectedMenu === 1 ? activeMenuClass : menuClass}>
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/holdings" onClick={() => handleMenuClick(2)} className={selectedMenu === 2 ? activeMenuClass : menuClass}>
              Holdings
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/positions" onClick={() => handleMenuClick(3)} className={selectedMenu === 3 ? activeMenuClass : menuClass}>
              Positions
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/funds" onClick={() => handleMenuClick(4)} className={selectedMenu === 4 ? activeMenuClass : menuClass}>
              Funds
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/apps" onClick={() => handleMenuClick(5)} className={selectedMenu === 5 ? activeMenuClass : menuClass}>
              Apps
            </Link>
          </li>
        </ul>

        <div className="nav-divider"></div>

        <div className="profile-section" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <span className="username">USERID</span>
          
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <div className="dropdown-user-details">
                <span className="user-initials">ZU</span>
                <div>
                  <h4 className="dropdown-username">User Name</h4>
                  <span className="dropdown-email">user@zerodha.com</span>
                </div>
              </div>
              <hr className="dropdown-divider" />
              <ul className="dropdown-list">
                <li>
                  <Link to="/" className="dropdown-link">
                    <span className="drop-icon">👤</span> Profile
                  </Link>
                </li>
                <li>
                  <Link to="/" className="dropdown-link">
                    <span className="drop-icon">⚙️</span> Settings
                  </Link>
                </li>
                <li>
                  <Link to="/apps" className="dropdown-link">
                    <span className="drop-icon">🔌</span> Integrations
                  </Link>
                </li>
                <hr className="dropdown-divider" />
                <li>
                  <a href="#" className="dropdown-link logout-btn">
                    <span className="drop-icon">🚪</span> Log out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Menu;