import '../../styles/countryCards.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CountryCards({ country }) {
  const { darkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const handleCountryClick = () => {
    navigate(`/country/${country.cca3}`);
  };

  

  return (
    
    <div className={darkMode ? 'countryCardDark countryCard' : 'countryCard'} onClick={handleCountryClick}>
      <img src={country.flags.png} alt='flag' className='flag' />
      <div className='countryInfo'>
        <div className='countryName'>{country.name.common}</div>
        <div className='countryPopulation infos'>
          <p className='description'>Population: </p>
          <span className='weight'> {country.population.toLocaleString()}</span>
        </div>
        <div className='countryRegion infos'>
          <p className='description'>Region: </p>
          {country.region}
        </div>
        <div className='countryRegion infos'>
          <p className='description'>Sub-Region: </p>
          {country.subregion}
        </div>
        <div className='countryCapital infos'>
          <p className='description'>Capital: </p>
          {country.capital}
        </div>
        <div className='countryCapital infos'>
          <p className='description'>Area: </p>
          {country.area.toLocaleString()} sq. km
        </div>
      </div>
    </div>
  );
}

export default CountryCards;
