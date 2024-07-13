import React from 'react';
import styles from '../yourcart_img/Yourcartimg.module.css';
import useStore from '../stores/Store'; 

const Yourcartimg = () => {
  const { cartItems } = useStore((state) => ({
    cartItems: state.cartItems.map(item => ({
      ...item,
      size: state.selectedSizes[item.id] || 'UK 12', 
    })),
  }));

  return (
    <section className={styles.yourcart}>
      <div className={styles.shopwrp}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.card_img}>
            <div className={styles.hov}>
              <img src={item.img} alt="Card Back" />
              <img src={item.imgHover} alt="Card Front" className={styles.img_top} />
            </div>
            <div className={styles.giora}>
              <h5>{item.name}</h5>
              <h4>{item.tag}</h4>
              <h5>${item.tagThree}</h5>
              <div className={styles.colors}>
                <ul>
                  <li>{item.color}</li>
                  <li className={styles.bod}>Size: {item.size}</li>
                  <li>Qty: {item.quantity}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Yourcartimg;
