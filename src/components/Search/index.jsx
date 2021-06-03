import { useState } from 'react';
import classes from './Search.module.css';

const Search = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const filterHandler = e => {
    setInputValue(e.target.value);
    onSearch(e);
  };
  return (
    <div className={classes.Search}>
      <input
        type='text'
        onChange={e => filterHandler(e)}
        value={inputValue}
        className={classes.SearchInput}
        placeholder='Search'
      />
      <img
        className={classes.SearchIcon}
        src='assets/icons/search.svg'
        alt='search icon'
      />
    </div>
  );
};

export default Search;
