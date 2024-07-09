import Queen from '../../assets/Shopping1.svg'
import Circle from '../../assets/tick-circle.svg'
import QueenH from '../../assets/Shopping1hover.svg'
import Zeni from '../../assets/Shopping2.svg'
import ZeniH from '../../assets/Shopping2hover.svg'
import styles from '../yourcart_img/Yourcartimgs.module.css'

const Yourcartimgs = () => {
  return (
    <section className={styles.success}>
        <div className={styles.successs}>

            <img src={Circle} alt="circle" />
            <h2>Payment Successful!</h2>
            <h3>Congratulations. Your payment was completed successfully</h3>
        </div>
        <div className={styles.yourcart}>

        <div className={styles.shopwrp}>
            <div className={styles.card_img2}>
                    <div className={styles.hov}>
                        <img src={Queen} alt="Card Back"/>
                        <img src={QueenH} alt="Card Front"  className={styles.img_top}/>
                    </div>
                <div className={styles.giora}>
                    <h5>Giora Queen Gown</h5>
                    <div className={styles.colors}>
                        <ul>
                            <li>Black</li>
                            <li className={styles.bod}>UK12</li>
                            <li>Qty:1</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.card_img3}>
                    <div className={styles.hov}>
                        <img src={Zeni} alt="Card Back"/>
                        <img src={ZeniH} alt="Card Front"  className={styles.img_top}/>
                    </div>
                <div className={styles.giora}>
                    <h5>Giora Zeni Sleeveless</h5>
                    <div className={styles.colors}>
                        <ul>
                            <li>Black</li>
                            <li className={styles.bod}>UK12</li>
                            <li>Qty:1</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
       <div className={styles.cart_total}>
          <ul>
            <li>Transaction</li>
            <li>Date</li>
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
            <li>$160</li>
          </ul>
          <ul>
            <li>Shipping</li>
            <li>Free</li>
          </ul>

       </div>
       <div className={styles.checkbtn}>
          <ul>
            <li><b>Total</b></li>
            <li><b>$160</b></li>
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