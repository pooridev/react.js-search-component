import { useState } from 'react';
import Cards from '../components/Cards';
import Search from '../components/Search';
import { CARDS_DETAILS } from '../constants/cards-constant';
import classes from './App.module.css';

function App() {
  const [cards, setCards] = useState([...CARDS_DETAILS]);

  const searchHandler = ({ target }) => {
    const cards = [...CARDS_DETAILS];
    const filtredCards = cards.filter(card => {
      return card.title.toLowerCase().includes(target.value.toLowerCase());
    });

    setCards(prevCards => {
      prevCards.length = 0;
      return filtredCards;
    });
  };
  return (
    <div className={classes.App}>
      <Search onSearch={searchHandler} />
      <Cards cards={cards} />
    </div>
  );
}

export default App;
