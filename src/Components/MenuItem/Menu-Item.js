import React, { useState } from "react";
import { Link } from "react-router-dom";
import './menu-item.css';

const MenuItem = ({ route }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowSubMenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };

  const handleTouch = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div
      className="md:mr-6 menu-items relative md:py-2 hover:text-red-600 text-md md:text-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouch}
    >
      <Link to={route.path} className="global-blue-bg">{route.name}</Link>
      {route.subMenu && showSubMenu && (
        <ul className="absolute left-0 global-blue-bg text-white shadow-md">
          {route.subMenu.map((subMenuItem) => (
            <li key={subMenuItem.id} className="submenu-item px-4 py-2 hover:text-red-600">
              <Link to={
                route.name === "Services" ?
                `/services/${subMenuItem.path}` :
                `/${subMenuItem.path}`
              } className="text-md md:text-xl">{subMenuItem.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuItem;
