
import Sidebar from '../side_bar/Sidebar';
import Dress from '../dress/dress';
import style from '../cards/Cards.module.css';

const Cards = () => {
  return (
    <section className={style.card_wrp}>
        <div className={style.wrp}>
            <Sidebar/>
        </div>
        <div className={style.cards}>
            <Dress/>
        </div>
    </section>
  )
}

export default Cards
