import Apple_pay from '../../assets/ApplePay.svg'
import { Link } from 'react-router-dom'
import Paypal from '../../assets/Paypal.svg'
import Visa from '../../assets/Visa.svg'
import Master from '../../assets/Mastercard.svg'
import Gpay from '../../assets/GooglePay.svg'
import Amex from '../../assets/Amex.svg'
import styles from '../cart_summary/Cart_Summary.module.css'


const Cart_Summary = () => {
  return (
    <section className={styles.cart_sum}>
       <div className={styles.cart_summar}>
        <h4>
          Cart Summary
        </h4>
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
       <div className={styles.checkbtn}>
        <Link style={{textDecoration:'None'}} to='/checkout'>
           <button className={styles.check}>
              Check Out
           </button>
        </Link>
          <button className={styles.pal}>
              <img src={Paypal} alt="pal" />
           </button>
       </div>
       <div className={styles.secure}>
        <p>Secure Payments:</p>
        <div className={styles.secure_cards}>
          <img src={Visa} alt="Apple" />
          <img src={Master} alt="Master" />
          <img src={Amex} alt="Amex" />
          <img src={Gpay} alt="Gpay" />
          <img src={Apple_pay} alt="ApplePay" />
        </div>
       </div>
    </section>
  )
}

export default Cart_Summary