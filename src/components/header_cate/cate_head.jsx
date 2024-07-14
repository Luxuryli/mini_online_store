import { useState } from 'react';
import Arrow_right from '../../assets/Arrow_right.svg';
import Home from '../../assets/home.svg';
import Sort_arrow from '../../assets/Arrow_down.svg';
import Drop from '../../components/side_bar/Dropdown';
import style from '../header_cate/cate_head.module.css';

const CateHead = () => {
  const [dropVisible, setDropVisible] = useState(false);

  const toggleDrop = () => {
    setDropVisible(!dropVisible);
  };

  return (
    <section className={style.cate}>
        <Link to='/'className={style.homepage}>
      <div className={style.homepage}>
        <img src={Home} alt="home" />
        <p>Home Page</p>
        <img src={Arrow_right} alt="right" />
        <p>Women</p>
      </div>
      <div className={style.dress_content}>
        <ul>
          <li><b>Women Dresses</b></li>
          <li className={style.sortByContainer} onClick={toggleDrop}>
            Sort by
            <img src={Sort_arrow} alt="arrow" />
          </li>
        </ul>
        {dropVisible && (
          <div className={style.dropdown}>
            <Drop />
          </div>
        )}
      </div>
      {dropVisible && <div className={style.overlay} onClick={toggleDrop}></div>}
    </section>
  );
};

export default CateHead;
