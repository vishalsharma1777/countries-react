import '../../styles/error.css';

import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Favicon from 'react-favicon';
function WrongRoute() {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    document.title = '404 PAGE NOT FOUND';
  },[]);
  return (
    <>
    <Favicon url='https://icons.getbootstrap.com/assets/icons/bug-fill.svg' />
    <div className={darkMode ? 'errorDark error' : 'error'}>
      <span className='red'> 404 PAGE NOT FOUND <br/>PLEASE CHECK THE URL </span> &nbsp; <br />
      
    </div>
    </>
  );
}

export default WrongRoute;
