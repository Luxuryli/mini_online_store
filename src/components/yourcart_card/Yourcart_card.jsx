import Yourcartimg from '../yourcart_img/Yourcartimg'
import Location from '../../assets/location.svg'
import Car from '../../assets/car.svg'
import styles from '../yourcart_card/Yourcart_card.module.css'

const yourcart_card = () => {
  return (
    <section className={styles.yours}>
            <div className={styles.deliverybtn}>
                <h2>How do you want your delivery?</h2>
        <div className={styles.delivery_btn}>
                <button>
                    <img src={Car} alt="Car" />
                    <p>Delivery</p>
                </button>
                <button>
                    <img src={Location} alt="Location" />
                    <p>In-Store Pickup</p>
                </button>
            </div>
            </div>
                <div className={styles.cart_summar}>
                <p>
                In Your Cart
                </p>
            </div>
            <div className={styles.cart_total}>
                <ul>
                    <li>Sub-total</li>
                    <li>$160</li>
                </ul>
                <ul>
                    <li>Shipping</li>
                    <li>Free</li>
                </ul>
                <ul>
                    <li>Add Promo Code</li>
                    <li>--</li>
                </ul>
                <ul>
                    <li><b>Total</b></li>
                    <li><b>$160</b></li>
                </ul>
            </div>
            <hr />
            <div className={styles.delivery}>
                <p>Delivery is on Wednesday, 10th July, 2024</p>
                <div>
                    <Yourcartimg/>
                </div>
            </div>
    </section>
  )
}

export default yourcart_card