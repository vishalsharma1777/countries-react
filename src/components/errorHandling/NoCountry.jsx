import '../../styles/error.css'
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function NoCountry({ country, region, subRegion }) {
  const { darkMode } = useContext(ThemeContext);
  if (region === '' && subRegion === '') {
    return (
      <div className={darkMode ? 'noCountryDark noCountry' : 'noCountry'}>
        No Country Found of name &nbsp;
        <span className='red'> {country.toUpperCase()} </span> &nbsp;.
      </div>
    );
  } else if (subRegion === '') {
    return (
      <div className={darkMode ? 'noCountryDark noCountry' : 'noCountry'}>
        No Country Found of name &nbsp;
        <span className='red'> {country.toUpperCase()} </span> &nbsp; in region
        &nbsp;<span className='red'> {region.toUpperCase()} </span> &nbsp;.
      </div>
    );
  } else {
    return (
      <div className={darkMode ? 'noCountryDark noCountry center' : 'noCountry center'}>
        No Country Found of name &nbsp;
        <span className='red'> {country.toUpperCase()} </span> &nbsp; in region
        &nbsp;<span className='red'> {region.toUpperCase()} </span> &nbsp;{' '}
        and sub region{' '}
        <span className='red'> {subRegion.toUpperCase()} </span> &nbsp;.
      </div>
    );
  }
}

export default NoCountry;
