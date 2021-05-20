import classes from './Card.module.css';

const Card = props => {
  const { title, image, color } = props;
  return (
    <article className={classes.Card} style={{ border: `2px solid ${color}` }}>
      <div className={classes.CardDivider} style={{ background: color }}></div>
      <div className={classes.CardDetails}>
        <img className={classes.CardImage} src={image} alt={title} />
        <p className={classes.CardTitle}>{title}</p>
      </div>
    </article>
  );
};

export default Card;
