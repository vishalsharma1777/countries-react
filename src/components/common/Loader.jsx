import '../../styles/loader.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
function Loading() {
    const { darkMode } = useContext(ThemeContext);
    return (
      <div className='loaderContainer'>
        <br />
        <br />
        <span className={darkMode?'loaderDark':'loader'}></span>
        <br />
        <h1>LOADING...</h1>
      </div>
    );
  }
  
  export default Loading;
  