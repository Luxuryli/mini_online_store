import Yourcartimg from '../yourcart_img/Yourcartimg'
import styles from '../yourcart_card/Yourcart_card.module.css'

const yourcart_card = () => {
  return (
    <section className={styles.yours}>
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