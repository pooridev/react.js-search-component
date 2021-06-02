import { useState } from 'react';
import Cards from '../components/Cards';
import Search from '../components/Search';
import { CARDS_DETAILTS } from '../constants/cards-constant';
import classes from './App.module.css';

function App() {
  const [cards, setCards] = useState([...CARDS_DETAILTS]);

  const searchHandler = ({ target }) => {
    if (target.value === '') return setCards([...CARDS_DETAILTS]);

    const filtredCards = cards.filter(card => {
      return card.title.toLowerCase().includes(target.value.toLowerCase());
    });

    setCards(filtredCards);
  };
  return (
    <div className={classes.App}>
      <Search onSearchHandler={searchHandler} />
      <Cards cards={cards} />
    </div>
  );
}

export default App;
