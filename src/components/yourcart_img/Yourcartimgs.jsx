import Circle from '../../assets/tick-circle.svg'
import useStore from '../stores/Store'; 
import styles from '../yourcart_img/Yourcartimgs.module.css'

const Yourcartimgs = () => {
  const { cartItems, subtotal } = useStore((state) => ({
    cartItems: state.cartItems.map(item => ({
      ...item,
      size: state.selectedSizes[item.id] || 'UK 12', 
    })),
        subtotal: state.subtotal,
  }));
  return (
    <section className={styles.success}>
        <div className={styles.successs}>

            <img src={Circle} alt="circle" />
            <h2>Payment Successful!</h2>
            <h3>Congratulations. Your payment was completed successfully</h3>
        </div>
        <div className={styles.yourcart}>

      <div className={styles.shopwrp}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.card_img}>
            <div className={styles.hov}>
              <img src={item.img} alt="Card Back" />
              <img src={item.imgHover} alt="Card Front" className={styles.img_top} />
            </div>
            <div className={styles.giora}>
              <h5>{item.name}</h5>
              <div className={styles.colors}>
                <ul>
                  <li>{item.color}</li>
                  <li className={styles.bod}>{item.size}</li>
                  <li>Qty: {item.quantity}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div> 
       <div className={styles.cart_total}>
          <ul>
            <li>Transaction Date</li>
            <li>Thursday, 08 May, 2024</li>
          </ul>
          <ul>
            <li>Transaction ID</li>
            <li>1234*****56789</li>
          </ul>
        <ul>
            <li>Payment Method</li>
            <li>Visa *****1234</li>
          </ul>          
          <ul>
            <li>Sub-total</li>
            <li>${subtotal.toFixed(2)}</li>
          </ul>
          <ul>
            <li>Shipping</li>
            <li>Free</li>
          </ul>

       </div>
       <div className={styles.checkbtn}>
          <ul>
            <li><b>Total</b></li>
            <li>${subtotal.toFixed(2)}</li>
          </ul>
           <button className={styles.check}>
              Print Receipt
           </button>
       </div>
        </div>
    </section>
  )
}

export default Yourcartimgs