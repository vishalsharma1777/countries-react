import {useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import Favicon from 'react-favicon';
import { ThemeContext } from '../../contexts/ThemeContext';

function DetailCountry({ countryDetail,countryWithCodeObj }) {
const { darkMode } = useContext(ThemeContext);
const navigate = useNavigate();

const handleBorderClick = (e) => {
  navigate(`/country/${e.target.dataset.code}`)
};


  const name = countryDetail.name.common;
  const population = countryDetail.population.toLocaleString();
  const region = countryDetail.region==undefined?'':countryDetail.region;
  const nativeName = countryDetail.name.nativeName==undefined?[]:[
    ...new Set(
      Object.values(countryDetail.name.nativeName).map(
        (nativeName) => nativeName.common
      )
    )
  ];
  const subRegion = countryDetail.subregion;
  const capital = countryDetail.capital;
  const doamin = countryDetail.tld;
  const currencies = countryDetail.currencies==undefined?[]:[
    ...new Set(
      Object.values(countryDetail.currencies).map(
        (currency) => currency.name + '( ' + currency.symbol + ' )'
      )
    )
  ];
  const languages = countryDetail.languages==undefined?[]:[
    ...new Set(
      Object.values(countryDetail.languages).map((language) => language)
    )
  ];


  const [borderCountries] = [
    countryDetail.borders === undefined
      ? () => {
          return;
        }
      : [
          ...new Set(
            Object.values(countryDetail.borders).map((border) => border)
          )
        ]
  ];



  let borderCountriesNames = [];
  if(borderCountries.length === 0){
    borderCountriesNames = '';
  }
  else{
    borderCountriesNames = borderCountries.map((border) => {
      return countryWithCodeObj[border];
    }
    );

  }
  useEffect(() => {
    document.title = name;
  }, []);



  return (
    <>
    <Favicon url={countryDetail.flags.png} />
      <div className={darkMode?'alldetailsDark alldetails':'alldetails'}>
        <div className='flags'>
          <img src={countryDetail.flags.png} alt='flag' className="flagImg" />
        </div>
        <div className='details'>
          <div className='name'> {name} </div>
          <div className='theDetails'>
          <div className="one">
          <div className='nativeName detailType'>
            <div className='detailTitle'>Native Name: </div>
            <div className='detailValue'>{nativeName.join(', ')}</div>
          </div>
          <div className='population detailType'>
            <div className='detailTitle'>Population: </div>
            <div className='detailValue'>{population}</div>
          </div>
          <div className='region detailType'>
            <div className='detailTitle'>Region: </div>
            <div className='detailValue'>{region}</div>
          </div>
          <div className='subRegion detailType'>
            <div className='detailTitle'>Sub Region: </div>
            <div className='detailValue'>{subRegion}</div>
          </div>
          <div className='capital detailType'>
            <div className='detailTitle'>Capital: </div>
            <div className='detailValue'>{capital.join(', ')}</div>
          </div>
          </div>
          <div className='two'>
          <div className='domain detailType'>
            <div className='detailTitle'>Top Level Domain: </div>
            <div className='detailValue'>{doamin.join(', ')}</div>
          </div>
          <div className='currencies detailType'>
            <div className='detailTitle'>Currencies: </div>
            <div className='detailValue'>{currencies.join(', ')}</div>
          </div>
          <div className='languages detailType'>
            <div className='detailTitle'>Languages: </div>
            <div className='detailValue'>{languages.join(', ')}</div>
          </div>
          </div>
          </div>
          <div className='border'>
            <div className='borderTitle'>Border Countries: </div>
            <div className='borderCountries' >

              {borderCountriesNames?borderCountriesNames.map((border,index) => (
                <button className={darkMode?'borderCountryDark borderCountry':'borderCountry'} key={index} data-code={borderCountries[index]} onClick={handleBorderClick}>
                  {border}
                </button>
              )):"No Border Countries"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailCountry;
