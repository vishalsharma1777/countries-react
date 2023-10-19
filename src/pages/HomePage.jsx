import '../styles/homepage.css';
import '../styles/countryCards.css';

import React, { useState, useEffect } from 'react';
import subregionsFunction from '../assets/helper/SubRegions';
import SearchBar from '../components/homepage/SearchBar';
import Sorting from '../components/homepage/SortBar';
import WrongUrl from '../components/errorHandling/WrongUrl';
import Loading from '../components/common/Loader';
import NoCountry from '../components/errorHandling/NoCountry';
import CountryCards from '../components/homepage/CountryCard';
import Favicon from 'react-favicon';
function HomePage() {
  //STATES
  const [isWrongUrl, setIsWrongUrl] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setData] = useState([]);
  const [region, setRegion] = useState('');
  const [subRegion, setSubRegion] = useState('');
  const [searchCountry, setSearchCountry] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [orderBy, setOrderBy] = useState('');

  //USE EFFECT
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => {
        if (response.status !== 200) {
          setErrorMessage(response);
          setIsWrongUrl(true);
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        document.title = 'Where in the world?';
      })
      .catch((error) => console.log(error));
  }, []);

  
  let countries = [...data];
  const regions = [...new Set(countries.map((country) => country.region))];
  const subRegions = subregionsFunction(countries);

  if (region !== '') {
    countries = countries.filter((country) => country.region === region);
  }
  if (searchCountry !== '') {
    countries = countries.filter((country) =>
      country.name.common.toLowerCase().startsWith(searchCountry.toLowerCase())
    );
  }
  if (subRegion !== '') {
    countries = countries.filter((country) => country.subregion === subRegion);
  }
  if (sortBy !== '') {
    countries.sort((a, b) => {
      if (orderBy === 'asc') {
        return a[sortBy] - b[sortBy];
      } else {
        return b[sortBy] - a[sortBy];
      }
    });
  }


  return (
    <>
    <Favicon url={'https://img.icons8.com/ios/50/000000/globe.png'} />
    <div className='homePage'>
      <SearchBar
        regions={regions}
        selectedRegion={region}
        subRegions={subRegions}
        setRegion={setRegion}
        setSubRegion={setSubRegion}
        setSearchCountry={setSearchCountry}
      />
      <Sorting setSortBy={setSortBy} setOrderBy={setOrderBy} />
      <div className='countryCards'>
        {data.length === 0 &&
          (isWrongUrl ? <WrongUrl message={errorMessage} /> : <Loading />)}

        {data.length > 0 && countries.length === 0 && (
          <NoCountry
            country={searchCountry}
            region={region}
            subRegion={subRegion}
          />
        )}

        {data.length > 0 &&
          countries.length > 0 &&
          countries.map((country) => (
            <CountryCards key={country.name.common} country={country} />
          ))}
      </div>
    </div>
    </>
  );
}

export default HomePage;
