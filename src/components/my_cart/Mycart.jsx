import Queen from '../../assets/Shopping1.svg'
import QueenH from '../../assets/Shopping1hover.svg'
import Zeni from '../../assets/Shopping2.svg'
import ZeniH from '../../assets/Shopping2hover.svg'
import Love from '../../assets/LoveFave.svg'
import LoveH from '../../assets/LoveFaveactive.svg'
import Drop from '../../components/drop_down/Drop'
import style from '../../components/my_cart/Mycart.module.css'

const Mycart = () => {
  return (
    <section className={style.mycart}>
        <div className={style.cartwrp}>
            <h5>My Cart</h5>
            <p>Subtotal $160</p>
            <h4>Shopping Bag</h4>
            <h6>2 items</h6>
        </div>
        <div className={style.shopwrp}>
            <div className={style.queen}>
            <div className={style.card_img2}>
                <div className={style.lovehov}>
                    <div className={style.hov}>
                        <img src={Queen} alt="Card Back"/>
                        <img src={QueenH} alt="Card Front"  className={style.img_top}/>
                    </div>
                    <div className={style.loveact}>
                        <img src={Love} alt='love' className={style.over} />
                        <img src={LoveH} alt='love' className={style.over1}/>
                    </div>
                </div>
                <div className={style.giora}>
                    <h5>Giora Signature Summer Dress</h5>
                    <h4>TRENDING</h4>
                    <h5>$120</h5>
                    <div className={style.colors}>
                        <p>Black</p>
                        <Drop/>
                    </div>
                    <button className={style.remove}>
                        Remove
                    </button>
                </div>
            </div>
            <div className={style.card_img3}>
                <div className={style.lovehov}>
                    <div className={style.hov}>
                        <img src={Zeni} alt="Card Back"/>
                        <img src={ZeniH} alt="Card Front"  className={style.img_top}/>
                    </div>
                    <div className={style.loveact}>
                        <img src={Love} alt='love' className={style.over} />
                        <img src={LoveH} alt='love' className={style.over1}/>
                    </div>
                </div>
                <div className={style.giora}>
                    <h5>Giora Signature Summer Dress</h5>
                    <h4>TRENDING</h4>
                    <h5>$120</h5>
                    <div className={style.colors}>
                        <p>Black</p>
                        <Drop/>
                    </div>
                    <button className={style.remove}>
                        Remove
                    </button>
                </div>
            </div>
        </div> 
        </div>
    </section>
  )
}

export default Mycart