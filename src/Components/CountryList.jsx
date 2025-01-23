import React from 'react';

const CountryList = ({ countries, onCountryClick }) => {
  if (countries.length > 10) {
    return <p>Too many matches, please refine your search.</p>;
  }

  return (
    <div>
      {(countries.map((country) => (
        <div key={country.cca3}>
          <button onClick={() => onCountryClick(country)}>
            {country.name.common}
          </button>
        </div>
        ))
      )}
    </div>
  );
};

export default CountryList;