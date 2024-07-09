/* eslint-disable react/prop-types */
// import styles from './DressCard.module.css'
// import { useState } from 'react';

// const DressCard = ({ imgOne, imgTwo, imgThree, imgFour, tagOne, title, tagTwo, imgFive, imgSix, imgSeven, imgEight, tagThree}) => {
//   return (
//     <div className={styles.mother}>
//         <div className={styles.dress_card0}>
//             <div className={styles.lovehov}>
//                 <div className={styles.hov}>
//                     <img src={imgOne} alt={title} />
//                     <img src={imgTwo} alt={title} className={styles.img_top1}/>
//                 </div>
//                 <div className={styles.loveact}>
//                     <img src={imgThree} alt={title} className={styles.over} />
//                     <img src={imgFour} alt={title} className={styles.over1}/>
//                 </div>
//             </div>
//         </div>
//         <div className={styles.dress_card1}>
//             <h4>{tagOne}</h4>
//             <h3>{title}</h3>
//             <p>{tagTwo}</p>
//         </div>
//         <div className={styles.dress_card2}>
//             <img src={imgFive} alt={title} />
//             <img src={imgSix} alt={title} />
//             <img src={imgSeven} alt={title} />
//             <img src={imgEight} alt={title} />
//         </div>
//         <div className={styles.dress_card3}>
//             <p>{tagThree}</p>
//         </div>
//     </div>
//   )
// }

import React, { useState } from 'react';
import styles from './DressCard.module.css';

const DressCard = ({ imgOne, imgTwo, imgThree, imgFour, tagOne, title, tagTwo, imgFive, imgSix, imgSeven, imgEight, tagThree }) => {
  const [clickedImages, setClickedImages] = useState({
    imgFive: false,
    imgSix: false,
    imgSeven: false,
    imgEight: false,
  });

  const handleImageClick = (image) => {
    setClickedImages((prevState) => ({
      ...prevState,
      [image]: !prevState[image],
    }));
  };

  return (
    <div className={styles.mother}>
      <div className={styles.dress_card0}>
        <div className={styles.lovehov}>
          <div className={styles.hov}>
            <img src={imgOne} alt={title} />
            <img src={imgTwo} alt={title} className={styles.img_top1} />
          </div>
          <div className={styles.loveact}>
            <img src={imgThree} alt={title} className={styles.over} />
            <img src={imgFour} alt={title} className={styles.over1} />
          </div>
        </div>
      </div>
      <div className={styles.dress_card1}>
        <h4>{tagOne}</h4>
        <h3>{title}</h3>
        <p>{tagTwo}</p>
      </div>
      <div className={styles.dress_card2}>
        <img
          src={imgFive}
          alt={title}
          className={clickedImages.imgFive ? styles.clicked : ''}
          onClick={() => handleImageClick('imgFive')}
        />
        <img
          src={imgSix}
          alt={title}
          className={clickedImages.imgSix ? styles.clicked : ''}
          onClick={() => handleImageClick('imgSix')}
        />
        <img
          src={imgSeven}
          alt={title}
          className={clickedImages.imgSeven ? styles.clicked : ''}
          onClick={() => handleImageClick('imgSeven')}
        />
        <img
          src={imgEight}
          alt={title}
          className={clickedImages.imgEight ? styles.clicked : ''}
          onClick={() => handleImageClick('imgEight')}
        />
      </div>
      <div className={styles.dress_card3}>
        <p>{tagThree}</p>
      </div>
    </div>
  );
};

export default DressCard;



// export default DressCard


// export default DressCard