import '../../styles/searchbar.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
function SearchBar({
  regions,
  setRegion,
  setSearchCountry,
  subRegions,
  setSubRegion,
  selectedRegion
}) {
  let selectedSubRegionsArray = [];
  if (selectedRegion === '') {
    selectedSubRegionsArray = subRegions.get('All');
  } else {
    selectedSubRegionsArray = subRegions.get(selectedRegion);
  }
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className='searchBar'>
      <label htmlFor='searchInput'className={
            darkMode
              ? 'searchBarDark searchInput'
              : 'searchInput searchBarLight'
          }>
        <div
          className={
            darkMode
              ? 'searchBarDark searchInput'
              : 'searchInput searchBarLight'
          }
        >
          <i className='bi bi-search'></i>
          <input
            type='text'
            id='searchInput'
            className={darkMode ? 'inputFieldDark inputField' : 'inputField'}
            placeholder='Search for a country...'
            onInput={(e) => {
              setSearchCountry(e.target.value);
            }}
          />
        </div>
      </label>
      <label htmlFor='setRegion'>
        <div
          className={
            darkMode
            ? 'searchDropDownDark searchDropDownContainer'
            : 'searchDropDownContainer'
          }
        >
          <select
            className={
              darkMode ? 'searchDropDownDark searchDropDown' : 'searchDropDown'
            }
            id='setRegion'
            onChange={(e) => {
              setRegion(e.target.value);
              setSubRegion('');
            }}
          >
            <option value=''>Filter by Region</option>
            <option value=''>All</option>
            {regions.map((region) => (
              <option value={region} key={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </label>
      <label htmlFor='setSubRegion'>
      <div
        className={
          darkMode
          ? 'searchDropDownDark searchDropDownContainer'
          : 'searchDropDownContainer'
        }
      >
        <select
          className={
            darkMode ? 'searchDropDownDark searchDropDown' : 'searchDropDown'
          }
          disabled={selectedRegion === '' ? true : false}
          id='setSubRegion'
          onChange={(e) => {
            setSubRegion(e.target.value);
          }}
        >
          <option value=''>Filter by Sub Region
          </option>
          <option value=''>All</option>
          {selectedSubRegionsArray.map((subRegion) =>
            subRegion ? (
              <option value={subRegion} key={subRegion}>
                {subRegion}
              </option>
            ) : null
          )}
        </select>
      </div>
      </label>
    </div>
  );
}

export default SearchBar;
