/* eslint-disable react/prop-types */
import { FaArrowLeftLong } from "react-icons/fa6";

const Details = ({
  darkMode,
  flag,
  name,
  population,
  region,
  subRegion,
  tld,
  capital,
  currencies,
  borders,
  showDetails,
  setShowDetails,
}) => {
  return (
    <div className={darkMode ? "dark-mode country-details" : "country-details"}>
      <button
        className={darkMode ? "dark-mode back-btn" : "back-btn"}
        type="button"
        onClick={() => setShowDetails(!showDetails)}
      >
        <FaArrowLeftLong className="back-arrow" /> Back
      </button>
      <div className="country-card">
        <img src={flag} alt="flag" />
        <div
          className={
            darkMode ? "dark-mode country-card-data" : "country-card-data"
          }
        >
          <h4>{name}</h4>
          <div className="info">
            <div className="main-info">
              <p>
                <strong>Native name: </strong>
              </p>
              <p>
                <strong>Population: </strong>
                {population}
              </p>
              <p>
                <strong>Region: </strong>
                {region}
              </p>
              <p>
                <strong>Subregion: </strong>
                {subRegion}
              </p>
              <p>
                <strong>Capital: </strong> {capital}
              </p>
            </div>
            <div className="additional-info">
              <p>
                <strong>Top level domain: </strong> {tld}
              </p>
              <p>
                <strong>Currencies: </strong>
              </p>
              <p>
                <strong>Languagues: </strong>
              </p>
            </div>
          </div>

          <div className="border-countries">
            <h4>
              <strong>Border countries</strong>
            </h4>
            {borders !== undefined ? (
              <div className="borders">
                {borders.map((border, index) => (
                  <button
                    key={index}
                    className={darkMode ? "dark-mode border-btn" : "border-btn"}
                  >
                    {border}
                  </button>
                ))}
              </div>
            ) : (
              <div className="no-borders">
                <em>There is no border countries.</em>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
