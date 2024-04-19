/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";

const Countries = ({
  darkMode,
  countries,
  region,
  searchCountry,
  showCountryDetails,
}) => {
  let selectedCountries = [];

  if (searchCountry) {
    selectedCountries = countries.filter((country) =>
      country.name.official.toLowerCase().includes(searchCountry.toLowerCase())
    );
    if (selectedCountries.length === 0) {
      return (
        <div className={darkMode ? "dark-mode no-result" : "no-result"}>
          {" "}
          <em>Sorry, there is no such country in our database.</em>
          <br />
          <em>Please look for a different country name.</em>
        </div>
      );
    }
  }
  if (selectedCountries.length > 0) {
    region = null;
    countries = selectedCountries;
  }

  if (region === null) {
    return (
      <section
        className={
          darkMode ? "dark-mode countries-container" : "countries-container"
        }
      >
        {countries.map((country) => (
          <Country
            key={uuidv4()}
            country={country}
            darkMode={darkMode}
            showCountryDetails={showCountryDetails}
          ></Country>
        ))}
      </section>
    );
  }
  countries = countries.filter((country) => country.region === region);

  return (
    <section
      className={
        darkMode ? "dark-mode countries-container" : "countries-container"
      }
    >
      {countries.map((country) => (
        <Country key={uuidv4()} country={country}></Country>
      ))}
    </section>
  );
};

export default Countries;
