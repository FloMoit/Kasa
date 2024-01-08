import "./card.scss";

function Card(props) {
  return (
    <article className="card">
      <img className="card__img" src={props.image} alt={props.title} />
      <h2 className="card__title white">{props.title}</h2>
    </article>
  );
}

export default Card;
