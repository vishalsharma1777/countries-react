import '../styles/detailPage.css';
import React from 'react';
import { useEffect, useState,useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DetailCountry from '../components/detailpage/CountryDetail';
import Loading from '../components/common/Loader';
import NoCountryDetail from '../components/errorHandling/NoCountryDetail';
import { ThemeContext } from '../contexts/ThemeContext';

function DetailsPage() {

  const { darkMode } = useContext(ThemeContext);
  const [wrongUrl, setWrongUrl] = useState(false);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const [countryDetail, setCountryDetail] = useState([]);
  const [loader, setLoader] = useState(false);

  let id = useParams().id;

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  const handleHomeClick = () => {
    navigate('/');
  };

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  let countryWithCodeObj = {};
  data.forEach((country) => {
    countryWithCodeObj[country.cca3] = country.name.common;
  });

  useEffect(() => {
    setLoader(false);
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((response) => {
        if (response.status !== 200) {
          setMessage(response);
          setWrongUrl(true);
          setLoader(true);
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setCountryDetail(...data);
        setLoader(true);
        document.title = `${countryDetail.name.common} | Country Info`;
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <div className='detailsPage'>
        <div className="detailPageButton">
        <button onClick={handleBackClick} className={darkMode?'borderCountryDark detailBtns':'detailBtns'}>
          <i className='bi bi-arrow-left'></i>&nbsp;&nbsp;&nbsp;Back
        </button>
        <button onClick={handleHomeClick} className={darkMode?'borderCountryDark detailBtns':'detailBtns'}>
          <i className='bi bi-house'></i>&nbsp;&nbsp;&nbsp;Home
        </button>
        </div>
        {!loader && <Loading />}
        {loader && wrongUrl && <NoCountryDetail message={message} />}
        {loader && !wrongUrl && (
          <DetailCountry
            countryDetail={countryDetail}
            countryWithCodeObj={countryWithCodeObj}
          />
        )}
      </div>
    </>
  );
}
export default DetailsPage;
