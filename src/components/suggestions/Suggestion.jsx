import Frame1 from '../../assets/Frame1.svg';
import Frame2 from '../../assets/Frame2.svg';
import Frame3 from '../../assets/Frame3.svg';
import FrameH from '../../assets/Frame1hover.svg'
import FrameH1 from '../../assets/Frame2hover.svg'
import FrameH2 from '../../assets/Frame3hover.svg'
import Green from '../../assets/Green.svg';
import Red from '../../assets/Red.svg';
import Army from '../../assets/Army.svg';
import Love from '../../assets/LoveFave.svg';
import Brown from '../../assets/Brown.svg';
import Yellow from '../../assets/Yellow.svg';
import Ocean from '../../assets/Ocean.svg';
import Purple from '../../assets/Purple.svg';
import Violet from '../../assets/Violet.svg';
import Greens from '../../assets/Greens.svg';
import Styles from '../../components/suggestions/Suggestion.module.css'

const Suggestion = () => {
  return (
    <section className={Styles.suggest}>
        <div className={Styles.you}>
            <h4>
                You Might Also Like
            </h4>
        </div>
        <div className={Styles.cards}>
            <div className={Styles.card_img}>
                <div className={Styles.image1}>
                    <div className={Styles.card1}>
                        <img src={Frame1} alt="Card Back"/>
                        <img src={FrameH} alt="Card Front"  className={Styles.img_top}/>
                    </div>
                    <img src={Love} alt="love" className={Styles.love}/>
                </div>
                    <h5>Amanda Belfast Sleeveless</h5>
                    <p>Women’s dinner wear and summer dress</p>
                    <div className={Styles.colors}>
                        <img src={Army} alt="army"/>
                        <img src={Red} alt="red" />
                        <img src={Greens} alt="greens" />
                        <img src={Green} alt="Green" />
                    </div>
                    <h1>$50</h1>
            </div>
            <div className={Styles.card_img1}>
                <div className={Styles.image1}>
                    <div className={Styles.card1}>
                        <img src={Frame2} alt="Card Back"/>
                        <img src={FrameH1} alt="Card Front"  className={Styles.img_top}/>
                    </div>
                    <img src={Love} alt="love" className={Styles.love}/>
                </div>
                    <h5>Okonjo Iweala Dress</h5>
                    <p>Women’s corporate office dress</p>
                    <div className={Styles.colors}>
                        <img src={Yellow} alt="yellow" />
                        <img src={Violet} alt="violet" />
                        <img src={Ocean} alt="ocean" />
                        <img src={Brown} alt="Brown" />
                    </div>
                    <h1>$60</h1>
            </div>
            <div className={Styles.card_img2}>
                <div className={Styles.image1}>
                    <div className={Styles.card1}>
                        <img src={Frame3} alt="Card Back"/>
                        <img src={FrameH2} alt="Card Front"  className={Styles.img_top}/>
                    </div>
                    <img src={Love} alt="love" className={Styles.love}/>
                </div>
                    <h5>Giora Signature Summer Dress</h5>
                    <p>Women’s summer dress</p>
                    <div className={Styles.colors}>
                        <img src={Yellow} alt="yellow" />
                        <img src={Violet} alt="violet" />
                        <img src={Purple} alt="purple" />
                        <img src={Brown} alt="Brown" />
                    </div>
                    <h5>$120</h5>
            </div>
        </div> 

    </section>
  )
}

export default Suggestion