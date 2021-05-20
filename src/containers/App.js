import Cards from '../components/Cards';
import Search from '../components/Search';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Search />
      <Cards />
    </div>
  );
}

export default App;
