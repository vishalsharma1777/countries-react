import '../../styles/sortbar.css';
import '../../styles/searchbar.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';

function Sorting({setSortBy,setOrderBy}) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div className='sorting sortColumn'>
        <select
          className={
            darkMode ? 'searchDropDownDark searchDropDownContainer searchDropDown' : ' searchDropDownContainer searchDropDown'
          }
          id='setSubRegion'
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value=''>Select Sort By</option>
          <option value='area'>Area</option>
          <option value='population'>Population</option>
        </select>
        <select
          className={
            darkMode ? 'searchDropDownDark searchDropDownContainer searchDropDown' : ' searchDropDownContainer searchDropDown'
          }
          id='setSubRegion'
          onChange={(e) => {
            setOrderBy(e.target.value);
          }}
        >
          
          <option value='dec'>Descending</option>
          <option value='asc'>Ascending</option>
        </select>
      </div>
    </>
  );
}

export default Sorting;
