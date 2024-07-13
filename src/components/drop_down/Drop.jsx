import React from 'react';
import styles from '../drop_down/Drop.module.css';
import useStore from '../stores/Store'; 

const Drop = ({ itemId, selectedSize }) => {
  const { setSelectedSize } = useStore();

  const handleSizeChange = (event) => {
    setSelectedSize(itemId, event.target.value);
  };

  return (
    <div className={styles.drop}>
      <select name="size" id="size" value={selectedSize} onChange={handleSizeChange}>
        <option value="12">UK 12</option>
        <option value="14">UK 14</option>
        <option value="16">UK 16</option>
        <option value="18">UK 18</option>
      </select>
    </div>  
  );
};

export default Drop;
