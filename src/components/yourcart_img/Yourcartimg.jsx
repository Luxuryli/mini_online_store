import Queen from '../../assets/Shopping1.svg'
import QueenH from '../../assets/Shopping1hover.svg'
import Zeni from '../../assets/Shopping2.svg'
import ZeniH from '../../assets/Shopping2hover.svg'
import styles from '../yourcart_img/Yourcartimg.module.css'

const Yourcartimg = () => {
  return (
    <section className={styles.yourcart}>
        <div className={styles.shopwrp}>
            <div className={styles.card_img2}>
                    <div className={styles.hov}>
                        <img src={Queen} alt="Card Back"/>
                        <img src={QueenH} alt="Card Front"  className={styles.img_top}/>
                    </div>
                <div className={styles.giora}>
                    <h5>Giora Queen Gown</h5>
                    <h4>TRENDING</h4>
                    <h5>$70</h5>
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
                    <h5>$90</h5>
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
    </section>
  )
}

export default Yourcartimg