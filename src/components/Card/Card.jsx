import Styles from './Card.module.css';

export const Card = (props) => {
  return(
    <div className={Styles.card}>
      <a href="" className={Styles.card_link}>
        <img src={props.image} alt="adidas Campus 00s"/>
        <div className={Styles.card__info}>
          <h3 className={Styles.card__title}>{props.title}</h3>
          <p className={Styles.card__text}>{props.text}</p>
        </div>
      </a>
    </div>
  );
}