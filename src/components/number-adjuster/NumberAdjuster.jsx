import React from 'react';
import style from '../number-adjuster/NumberAdjuster.module.css';

const NumberAdjuster = ({ value, onIncrease, onDecrease }) => {
  return (
    <div className={style.box}>
      <div className={style.btnn}>
        <p>Qty</p>
        <button onClick={onDecrease}>-</button>
        <div className={style.num}>{value}</div>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
};

export default NumberAdjuster;
