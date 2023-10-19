import '../../styles/error.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
function NoCountryDetail({ message }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? 'errorDark error' : 'error'}>
      Unable to fetch the country api with status code &nbsp;
      <span className='red'> {message.status} </span> &nbsp; <br />
      and status text &nbsp;
      <span className='red'> {message.statusText} </span>.
    </div>
  );
}

export default NoCountryDetail;
