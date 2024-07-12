import { useState } from 'react'; 
import Frame1 from '../../assets/Frame1.svg';
import Frame2 from '../../assets/Frame2.svg';
import Frame3 from '../../assets/Frame3.svg';
import FrameH from '../../assets/Frame1hover.svg';
import FrameH1 from '../../assets/Frame2hover.svg';
import FrameH2 from '../../assets/Frame3hover.svg';
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
import Carthe from '../../assets/Carthe.svg';
import Cartheh from '../../assets/Cartheh.svg';
import LoveFill from '../../assets/LoveFaveactive.svg';
import Styles from '../../components/suggestions/Suggestion.module.css';

const Suggestion = () => {
  const [isLoveFilled, setIsLoveFilled] = useState([false, false, false]);
  const [isCartheActive, setIsCartheActive] = useState([false, false, false]);

  const toggleLoveFill = (index) => {
    const newLoveFilled = [...isLoveFilled];
    newLoveFilled[index] = !newLoveFilled[index];
    setIsLoveFilled(newLoveFilled);
  };

  const toggleCarthe = (index) => {
    const newCartheActive = [...isCartheActive];
    newCartheActive[index] = !newCartheActive[index];
    setIsCartheActive(newCartheActive);
  };

  return (
    <section className={Styles.suggest}>
      <div className={Styles.you}>
        <h4>You Might Also Like</h4>
      </div>
      <div className={Styles.cards}>
        {[Frame1, Frame2, Frame3].map((frame, index) => (
          <div className={Styles.card_img} key={index}>
            <div className={Styles.image1}>
              <div className={Styles.card1}>
                <img src={frame} alt="Card Back" />
                <img src={[FrameH, FrameH1, FrameH2][index]} alt="Card Front" className={Styles.img_top} />
              </div>
              <div className={Styles.loveact}>
                <div className={Styles.carthet} onClick={() => toggleCarthe(index)}>
                  <img
                    src={isCartheActive[index] ? Cartheh : Carthe}
                    alt="title"
                    className={Styles.over}
                  />
                </div>
                <div className={Styles.love} onClick={() => toggleLoveFill(index)}>
                  <img
                    src={isLoveFilled[index] ? LoveFill : Love}
                    alt="title"
                    className={Styles.over}
                  />
                </div>
              </div>
            </div>
            <h5>{['Amanda Belfast Sleeveless', 'Okonjo Iweala Dress', 'Giora Signature Summer Dress'][index]}</h5>
            <p>{[
              'Women’s dinner wear and summer dress',
              'Women’s corporate office dress',
              'Women’s summer dress'
            ][index]}</p>
            <div className={Styles.colors}>
              {[Army, Red, Greens, Green, Yellow, Violet, Ocean, Brown, Yellow, Violet, Purple, Brown]
                .slice(index * 4, (index + 1) * 4)
                .map((color, colorIndex) => (
                  <img key={colorIndex} src={color} alt="color" />
              ))}
            </div>
            <h1>{['$50', '$60', '$120'][index]}</h1>
          </div>
        ))}
      </div>
      <div className={Styles.cards1}>
        {[Frame2, Frame3].map((frame, index) => (
          <div className={Styles.card_img} key={index}>
            <div className={Styles.image1}>
              <div className={Styles.card1}>
                <img src={frame} alt="Card Back" />
                <img src={[FrameH1, FrameH2][index]} alt="Card Front" className={Styles.img_top} />
              </div>
              <div className={Styles.loveact}>
                <div className={Styles.carthet} onClick={() => toggleCarthe(index)}>
                  <img
                    src={isCartheActive[index] ? Cartheh : Carthe}
                    alt="title"
                    className={Styles.over}
                  />
                </div>
                <div className={Styles.love} onClick={() => toggleLoveFill(index)}>
                  <img
                    src={isLoveFilled[index] ? LoveFill : Love}
                    alt="title"
                    className={Styles.over}
                  />
                </div>
              </div>
            </div>
            <h5>{['Okonjo Iweala Dress', 'Giora Signature Summer Dress'][index]}</h5>
            <p>{[
              'Women’s corporate office dress',
              'Women’s summer dress'
            ][index]}</p>
            <div className={Styles.colors}>
              {[Yellow, Violet, Ocean, Brown, Yellow, Violet, Purple, Brown]
                .slice(index * 4, (index + 1) * 4)
                .map((color, colorIndex) => (
                  <img key={colorIndex} src={color} alt="color" />
              ))}
            </div>
            <h1>{['$60', '$120'][index]}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Suggestion;
