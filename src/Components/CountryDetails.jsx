import React from 'react';

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Population: {country.population}</p>
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        width="100"
      />
    </div>
  );
};

export default CountryDetails;