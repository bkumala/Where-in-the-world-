/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Dropdown from "./Dropdown";

const SearchBar = ({ darkMode, inputValue, setInputValue, setRegion }) => {
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const toggleMenu = () => {
    setOpen(!open);
  };

  const filterRegion = (newRegion) => {
    //  dlaczego tutaj nie zadziałało setState(countries.filter(country=>country.region === newRegion)) ???
    toggleMenu();
    setInputValue("");
    if (newRegion === "Show all") {
      setRegion(null);
      return;
    }
    setRegion(newRegion);
  };

  return (
    <section className={darkMode ? "dark-mode search-bar" : "search-bar"}>
      <label
        className={darkMode ? "dark-mode search-input" : "search-input"}
        htmlFor="search"
      >
        <i>
          <FaSearch />
        </i>
        <input
          required
          id={darkMode ? "dark-mode-search" : "search"}
          type="text"
          placeholder="Search for a country..."
          value={inputValue}
          onChange={handleChange}
        />
      </label>
      <Dropdown
        open={open}
        toggleMenu={toggleMenu}
        menu={["Africa", "Americas", "Asia", "Europe", "Oceania", "Show all"]}
        filterRegion={filterRegion}
        darkMode={darkMode}
      ></Dropdown>
    </section>
  );
};
export default SearchBar;
