import { useState, useEffect } from 'react';
import style from '../number-adjuster/NumberAdjuster.module.css';

const NumberAdjuster = ({ itemId, initialQuantity, adjustQuantity }) => {
  const [number, setNumber] = useState(initialQuantity);

  useEffect(() => {
    setNumber(initialQuantity);
  }, [initialQuantity]);

  const increaseNumber = () => {
    const newQuantity = number + 1;
    setNumber(newQuantity);
    adjustQuantity(itemId, newQuantity);
  };

  const decreaseNumber = () => {
    if (number > 1) {
      const newQuantity = number - 1;
      setNumber(newQuantity);
      adjustQuantity(itemId, newQuantity);
    }
  };

  return (
    <div className={style.box}>
      <div className={style.btnn}>
        <p>Qty</p>
        <button onClick={decreaseNumber}>-</button>
        <div className={style.num}>{number}</div>
        <button onClick={increaseNumber}>+</button>
      </div>
    </div>
  );
};

export default NumberAdjuster;
