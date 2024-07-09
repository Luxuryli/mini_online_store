/* eslint-disable react/prop-types */
import styles from './DressCard.module.css'

const DressCard = ({ imgOne, imgTwo, imgThree, imgFour, tagOne, title, tagTwo, imgFive, imgSix, imgSeven, imgEight, tagThree}) => {
  return (
    <div className={styles.mother}>
        <div className={styles.dress_card0}>
            <div className={styles.lovehov}>
                <div className={styles.hov}>
                    <img src={imgOne} alt={title} />
                    <img src={imgTwo} alt={title} className={styles.img_top1}/>
                </div>
                <div className={styles.loveact}>
                    <img src={imgThree} alt={title} className={styles.over} />
                    <img src={imgFour} alt={title} className={styles.over1}/>
                </div>
            </div>
        </div>
        <div className={styles.dress_card1}>
            <h4>{tagOne}</h4>
            <h3>{title}</h3>
            <p>{tagTwo}</p>
        </div>
        <div className={styles.dress_card2}>
            <img src={imgFive} alt={title} />
            <img src={imgSix} alt={title} />
            <img src={imgSeven} alt={title} />
            <img src={imgEight} alt={title} />
        </div>
        <div className={styles.dress_card3}>
            <p>{tagThree}</p>
        </div>
    </div>
  )
}

export default DressCard