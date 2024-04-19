import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./Countries";
import Title from "./Title";
import Details from "./Details";
import SearchBar from "./SearchBar";

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [countryToShow, setCountryToShow] = useState(null);

  let selectedCountry = null;

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  // czemu selectedCountry === null poza funkcją po wykonianiu? Przez state też null, a console.log jest ok
  const showCountryDetails = (name) => {
    selectedCountry = countries.filter(
      (country) => country.name.official === name
    );
    setCountryToShow(selectedCountry[0]);
    setShowDetails(!showDetails);
  };
  console.log(countryToShow);

  if (showDetails) {
    return (
      <main className={darkMode ? "dark-mode" : null}>
        <Title darkMode={darkMode} setDarkMode={setDarkMode}></Title>
        <section className={darkMode ? "dark-mode container" : "container"}>
          <Details
            showDetails={showDetails}
            setShowDetails={showCountryDetails}
            darkMode={darkMode}
            flag={countryToShow.flags.svg}
            name={countryToShow.name.official}
            population={countryToShow.population}
            region={countryToShow.region}
            subRegion={countryToShow.subRegion}
            capital={countryToShow.capital}
            tld={countryToShow.tld}
            languages={countryToShow.languages}
            currencies={countryToShow.currencies}
            borders={countryToShow.borders}
          ></Details>
        </section>
      </main>
    );
  }

  if (countries && countries.length > 0) {
    return (
      <main className={darkMode ? "dark-mode" : null}>
        <Title darkMode={darkMode} setDarkMode={setDarkMode}></Title>
        <section className={darkMode ? "dark-mode container" : "container"}>
          <SearchBar
            inputValue={inputValue}
            setInputValue={setInputValue}
            setRegion={setRegion}
            darkMode={darkMode}
          ></SearchBar>
          <Countries
            searchCountry={inputValue}
            countries={countries}
            region={region}
            darkMode={darkMode}
            showCountryDetails={showCountryDetails}
          ></Countries>
        </section>
      </main>
    );
  }

  return (
    <>
      <div>Loading...</div>
    </>
  );
}

export default App;
