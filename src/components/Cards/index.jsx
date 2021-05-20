import Card from './Card';
import { CARDS_DETAILTS } from '../../constants/cards-constant';
import classes from './Cards.module.css';

const Cards = () => {
  
  let card = CARDS_DETAILTS.map(card => (
    <Card
      key={card.themeColor}
      title={card.title}
      image={card.image}
      color={card.themeColor}
    />
  ));

  return <main className={classes.Cards}>{card}</main>;
};

export default Cards;
