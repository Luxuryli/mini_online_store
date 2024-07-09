import { dressData } from "../../../data"
import Arrow_right from '../../assets/Arrow_right.svg';
import Home from '../../assets/home.svg';
import DressCard from "../dress-card/DressCard"
import styles from "./Dress.module.css"

const Dress = () => {
 console.log(dressData)
  return (
    <section className={styles.dress_wrp}>
            <div className={styles.homepage}>
                <img src={Home} alt="home" />
                <p>Home Page</p>
                <img src={Arrow_right} alt="right"/>
                <p>Women</p>
            </div>
        <div className={styles.dress_content}>
            <h1>Women Dresses</h1>
        </div>
        <div className={styles.dress_card}>
            {dressData.map((item, idx) => {
                return <DressCard imgOne={item.imgOne} imgTwo={item.imgTwo} imgThree={item.imgThree}  imgFour={item.imgFour} tagOne={item.tagOne} title={item.title} tagTwo={item.tagTwo}  imgFive={item.imgFive} imgSix={item.imgSix} imgSeven={item.imgSeven}  imgEight={item.imgEight}  tagThree={item.tagThree}
                key={idx} />
            })}
        </div>
        <div className={styles.selector}>
            <ul>
                <li><b>1</b></li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
    </section>
    )
}

export default Dress
