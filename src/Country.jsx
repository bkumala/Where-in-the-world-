/* eslint-disable react/prop-types */

const Country = ({ darkMode, country, showCountryDetails }) => {
  return (
    <article
      onClick={() => showCountryDetails(country.name.official)}
      className={darkMode ? "dark-mode country" : "country"}
    >
      <img src={country.flags.svg} alt={country.name.official} />
      <div className={darkMode ? "dark-mode country-data" : "country-data"}>
        <h4>{country.name.official}</h4>
        <p>
          <strong>Population: </strong>
          {country.population}
        </p>
        <p>
          <strong>Region: </strong>
          {country.region}
        </p>
        <p>
          <strong>Capital: </strong> {country.capital}
        </p>
      </div>
    </article>
  );
};
export default Country;
