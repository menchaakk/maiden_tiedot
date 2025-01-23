import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import CountryList from './Components/CountryList';
import CountryDetails from './Components/CountryDetails';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => {
        setCountries(response.data);
        setFilteredCountries(response.data);
      })
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const result = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query)
    );
    setFilteredCountries(result);
    setSelectedCountry(null);
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <h1>Country Search</h1>
      <SearchBar value={searchQuery} onChange={handleSearchChange} />
      {selectedCountry ? (
        <CountryDetails country={selectedCountry} />
      ) : (
        <CountryList
          countries={filteredCountries}
          onCountryClick={handleCountryClick}
        />
      )}
    </div>
  );
};

export default App;
