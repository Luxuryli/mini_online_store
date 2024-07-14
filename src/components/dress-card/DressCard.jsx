/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import useStore from '../../components/stores/Store';
import styles from './DressCard.module.css';

const DressCard = ({
  imgOne, imgTwo, imgThree, imgNine, imgTen, imgFour, tagOne, title, tagTwo,
  imgFive, imgSix, imgSeven, imgEight, tagThree
}) => {
  const [clickedImages, setClickedImages] = useState({
    imgFive: false,
    imgSix: false,
    imgSeven: false,
    imgEight: false,
  });

  const [showImgTen, setShowImgTen] = useState(false);
  const [showImgFour, setShowImgFour] = useState(false);
  const [showAddNotification, setShowAddNotification] = useState(false);
  const [showRemoveNotification, setShowRemoveNotification] = useState(false);
  const { cartItems, addToCart, removeFromCart } = useStore();

  const handleImageClick = (image) => {
    setClickedImages((prevState) => ({
      ...prevState,
      [image]: !prevState[image],
    }));
  };

  const handleAddToCart = () => {
    const item = {
      id: title,
      name: title,
      tag: tagOne,
      tagThree: tagThree,
      color: 'Black',
      img: imgOne,
      imgHover: imgTwo,
    };
    addToCart(item);
    setShowAddNotification(true);
    setTimeout(() => {
      setShowAddNotification(false);
    }, 3000);
    setShowImgTen(true);
  };

  const handleRemoveFromCart = () => {
    const itemInCart = cartItems.find(cartItem => cartItem.id === title);
    if (itemInCart) {
      removeFromCart(itemInCart);
      setShowRemoveNotification(true);
      setTimeout(() => {
        setShowRemoveNotification(false);
      }, 3000);
      setShowImgTen(false);
    }
  };

  const handleToggleImgFour = () => {
    setShowImgFour((prevShowImgFour) => !prevShowImgFour);
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
            <div className={styles.carthet}>
              {showImgTen ? (
                <img src={imgTen} alt={title} className={styles.over} onClick={handleRemoveFromCart} />
              ) : (
                <img src={imgNine} alt={title} className={styles.over} onClick={handleAddToCart} />
              )}
            </div>
            <div className={styles.carthet}>
              {showImgFour ? (
                <img src={imgFour} alt={title} className={styles.over} onClick={handleToggleImgFour} />
              ) : (
                <img src={imgThree} alt={title} className={styles.over} onClick={handleToggleImgFour} />
              )}
            </div>
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
        <h3>${tagThree}</h3>
      </div>
      {showAddNotification && <div className={styles.notificationAdd}>Item added to cart</div>}
      {showRemoveNotification && <div className={styles.notificationRemove}>Item removed from cart</div>}
    </div>
  );
};

export default DressCard;
