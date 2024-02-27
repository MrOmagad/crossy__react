import Styles from './CardsList.module.css';
import { Card } from '../Card/Card';
import { items } from '../../App';

export const CardsList = () => {
  return(
    <main>
      <h2 className={Styles.content__title}>Коллекция. октябрь:2023</h2>
      <div className={Styles.content}>
      {
        items.map((item) => {
          return (
            <div className={Styles.cards} key={item.id}>
              <Card {...item}/>
            </div>
          );
        })
      }
      </div>
    </main>
  );
}