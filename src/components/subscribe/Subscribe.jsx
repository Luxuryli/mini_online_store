import Button from '../../layout/button/Button'
import Paypal from '../../assets/Paypal.svg'
import styles from '../subscribe/Subscribe.module.css'

const Subscribe = () => {
  return (
    <section className={styles.sub}>
        <div className={styles.sub_wrp}>
            <p>Stay updated by subscribing to our newsletter</p>
            <input type="email" placeholder='Input your email'/>
            <button>
              Subscribe
            </button>
        </div>
    </section>
  )
}

export default Subscribe
