import classes from './Search.module.css';

const Search = () => {
  return (
    <div className={classes.Search}>
      <input type='text' className={classes.SearchInput} placeholder='Search' />
      <img
        className={classes.SearchIcon}
        src='assets/icons/search.svg'
        alt='search icon'
      />
    </div>
  );
};

export default Search;
