import logo from '../../assets/Giora.svg';
import { Link } from 'react-router-dom'; 
import search from '../../assets/search-normal.svg';
import favorite from '../../assets/favorite.svg';
import user from '../../assets/user.svg';
import carth from '../../assets/shopping-carth.svg';
import classes from '../header/Header.module.css'

const Header = () => {
  return (
    <header>
      <div className={classes.header_wrp}>
        <div className={classes.logo}>
        <Link to='/'>
          <img src={logo} alt="logo"/>
        </Link>
        </div>
        <div className={classes.section}>
          <ul>
            <li>Men</li>
            <Link to='/' className={classes.lil}>
              <li>Women</li>
            </Link>
            <li>Unisex</li>
            <li>Kids</li>
          </ul>
        </div>
        <div className={classes.search}>
          <div className={classes.searchbar}>
            <img src={search} alt="searchicon" />
            <input type="text" placeholder='Search'/>
          </div>

        </div>
        <div className={classes.usermenu}>
        <img src={favorite} alt="favorite" className={classes.fav}/>
        <img src={user} alt="cart" className={classes.user} />
        <Link to='/cart'>
          <img src={carth} alt="cart" className={classes.cart} />
        </Link>
        </div>
        </div>
     
    </header>
  );
};


export default Header;
