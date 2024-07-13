import React from 'react';
import Drop from '../../components/drop_down/Drop';
import love from '../../assets/LoveFave.svg';
import loveh from '../../assets/LoveFaveactive.svg';
import NumberAdjuster from '../number-adjuster/NumberAdjuster';
import useStore from '../stores/Store'; 
import style from '../../components/my_cart/Mycart.module.css';

const Mycart = () => {
  const { cartItems, subtotal, removeFromCart, adjustQuantity } = useStore((state) => ({
    cartItems: state.cartItems.map(item => ({
      ...item,
      size: state.selectedSizes[item.id] || 'UK 12', // Default to UK 12 if size not selected
    })),
    subtotal: state.subtotal,
    removeFromCart: state.removeFromCart,
    adjustQuantity: state.adjustQuantity,
    selectedSizes: state.selectedSizes,
  }));

  return (
    <section className={style.mycart}>
      <div className={style.cartwrp}>
        <div className="top">
          <h5>My Cart</h5>
          <p>Subtotal ${subtotal.toFixed(2)}</p> 
        </div>
        <div className="bottom">
          <h4>Shopping Bag</h4>
          <h6>{cartItems.length} items</h6>
        </div>
      </div>
      <div className={style.shopwrp}>
        {cartItems.map((item) => (
          <div key={item.id} className={style.card_img}>
            <div className={style.lovehov}>
              <div className={style.hov}>
                <img src={item.img} alt="Card Back" />
                <img src={item.imgHover} alt="Card Front" className={style.img_top} />
              </div>
              <div className={style.loveact}>
                <img src={love} alt='love' className={style.over} />
                <img src={loveh} alt='love' className={style.over1} />
              </div>
            </div>
            <div className={style.giora}>
              <h5>{item.name}</h5>
              <h4>{item.tag}</h4>
              <h5>${item.tagThree}</h5>
              <div className={style.colors}>
                <p>{item.color}</p>
                <Drop itemId={item.id} selectedSize={item.size} />
                <NumberAdjuster itemId={item.id} initialQuantity={item.quantity} adjustQuantity={adjustQuantity} />
              </div>
              <button className={style.remove} onClick={() => removeFromCart(item)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mycart;
