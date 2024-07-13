import { Link } from 'react-router-dom';
import ApplePay from '../../assets/ApplePay.svg';
import Paypal from '../../assets/Paypal.svg';
import Visa from '../../assets/Visa.svg';
import Master from '../../assets/Mastercard.svg';
import Gpay from '../../assets/GooglePay.svg';
import Amex from '../../assets/Amex.svg';
import styles from '../cart_summary/Cart_Summary.module.css';
import useStore from '../stores/Store'; // Assuming this is where your Zustand store is imported from

const Cart_Summary = () => {
  const { subtotal } = useStore((state) => ({
    subtotal: state.subtotal,
  }));

  // Calculate total based on subtotal and any additional costs (if applicable)
  const total = subtotal; // Assuming no additional costs for simplicity

  return (
    <section className={styles.cart_sum}>
      <div className={styles.cart_summar}>
        <h4>Cart Summary</h4>
      </div>
      <div className={styles.cart_total}>
        <ul>
          <li>Sub-total</li>
          <li>${subtotal.toFixed(2)}</li>
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
          <li><b>${total.toFixed(2)}</b></li>
        </ul>
      </div>
      <div className={styles.checkbtn}>
        <Link style={{ textDecoration: 'None' }} to='/checkout'>
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
          <img src={ApplePay} alt="ApplePay" />
        </div>
      </div>
    </section>
  );
};

export default Cart_Summary;
