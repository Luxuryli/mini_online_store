import Mycart from '../my_cart/Mycart';
import Cartsum from '../cart_summary/Cart_Summary';
import style from '../cards1/Card.module.css';

const Card = () => {
  return (
    <section className={style.card_wrp}>
        <div>
            <Mycart/>
        </div>
        <div className={style.cards}>
            <Cartsum/>
        </div>
    </section>
  )
}

export default Card