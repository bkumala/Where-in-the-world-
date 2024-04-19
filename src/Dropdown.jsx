/* eslint-disable react/prop-types */
import { FaAngleDown } from "react-icons/fa";

const Dropdown = ({ darkMode, open, toggleMenu, menu, filterRegion }) => {
  return (
    <div className={darkMode ? "dark-mode dropdown" : "dropdown"}>
      <div
        className={darkMode ? "dark-mode dropdown-text" : "dropdown-text"}
        onClick={toggleMenu}
      >
        Filter by Region<i>{<FaAngleDown />}</i>
      </div>
      {open ? (
        <ul className={darkMode ? "dark-mode menu" : "menu"}>
          {menu.map((menuItem, index) => (
            <li
              key={index}
              className={darkMode ? "dark-mode menu-item" : "menu-item"}
            >
              <button onClick={() => filterRegion(menuItem)}>{menuItem}</button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
export default Dropdown;
