/* eslint-disable react/prop-types */
import { FaRegMoon } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa6";

const Title = ({ darkMode, setDarkMode }) => {
  return (
    <div className={darkMode ? "dark-mode title" : "title"}>
      <h2>Where in the world?</h2>
      <button type="button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaRegSun /> : <FaRegMoon />}
        {darkMode ? " Light Mode" : " Dark Mode"}
      </button>
    </div>
  );
};
export default Title;
