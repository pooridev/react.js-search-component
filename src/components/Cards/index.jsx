import Card from './Card';
import classes from './Cards.module.css';

const Cards = ({ cards }) => {
  let card = cards.map(card => (
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
