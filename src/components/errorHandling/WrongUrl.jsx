import '../../styles/error.css';

import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
function WrongUrl({ message }) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? 'errorDark error' : 'error'}>
      Unable to fetch countries api with status code &nbsp;
      <span className='red'> {message.status} </span> &nbsp; <br />
      and status text &nbsp;
      <span className='red'> {message.statusText} </span>.
    </div>
  );
}

export default WrongUrl;
