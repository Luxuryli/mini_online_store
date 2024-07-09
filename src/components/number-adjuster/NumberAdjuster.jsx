import  { useState } from 'react';
import style from '../number-adjuster/NumberAdjuster.module.css'

const NumberAdjuster = () => {
  // Initialize state to hold the current number, starting at 0
  const [number, setNumber] = useState(0);

  // Function to handle increasing the number
  const increaseNumber = () => {
    setNumber(number + 1);
  };

  // Function to handle decreasing the number
  const decreaseNumber = () => {
    if (number > 0) {
    setNumber(number - 1);
    }
  };

  return (
    <div className={style.box}>
      <div className={style.btnn}>
        <button onClick={decreaseNumber} >-</button>
         <div className={style.num}>{number}</div>
        <button onClick={increaseNumber}>+</button>
      </div>
    </div>
  );
};


export default NumberAdjuster;