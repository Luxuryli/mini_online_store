import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Giora.svg';
import search from '../../assets/search-normal.svg';
import favorite from '../../assets/favorite.svg';
import user from '../../assets/user.svg';
import cart from '../../assets/shopping-cart.svg';
import hamburger from '../../assets/hamburger.svg';
import close from '../../assets/hamburger.svg';
import arrowright from '../../assets/Arrow_right.svg';
import Cate from '../../components/header_cate/cate_head';
import classes from '../header/Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <div className={classes.header_wrp}>
          <div className={classes.logo}>
            <Link to='/'>
              <img src={logo} alt="logo" />
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
              <input type="text" placeholder='Search' />
            </div>
          </div>
          <div className={classes.usermenu}>
            <img src={favorite} alt="favorite" className={classes.fav} />
            <img src={user} alt="user" className={classes.user} />
            <Link to='/cart'>
              <img src={cart} alt="cart" className={classes.cart} />
            </Link>
          </div>
          <div className={classes.hamburger} onClick={toggleMenu}>
            <img src={menuOpen ? close : hamburger} alt="menu" />
          </div>
        </div>
        {menuOpen && (
          <>
            <div className={classes.overlay} onClick={closeMenu}></div>
            <div className={classes.mobileMenu}>
              <div className="hame" onClick={toggleMenu}>
                <img src=
              {menuOpen ? close :hamburger} alt="ham" className={classes.ham}/>
                <Link to='/'>
                <img src={logo} alt="Logo" className={classes.m} />
              </Link>
              </div>
              <ul>
                <li>
                  <Link to='/' className={classes.lil} onClick={closeMenu}>
                    Men
                    <img src={arrowright} alt="arrow right" className={classes.arrowright} />
                  </Link>
                </li>
                <li>
                  <Link to='/' className={classes.lil} onClick={closeMenu}>
                    Women
                    <img src={arrowright} alt="arrow right" className={classes.arrowright} />
                  </Link>
                </li>
                <li>
                  <Link to='/' className={classes.lil} onClick={closeMenu}>
                    Unisex
                    <img src={arrowright} alt="arrow right" className={classes.arrowright} />
                  </Link>
                </li>
                <li>
                  <Link to='/' className={classes.lil} onClick={closeMenu}>
                    Kids
                    <img src={arrowright} alt="arrow right" className={classes.arrowright} />
                  </Link>
                </li>
                <li className={classes.menuItem}>
                  <Link to='/' className={classes.lil} onClick={closeMenu}>
                    Favorites
                  </Link>
                </li>
                <li className={classes.menuItem}>
                  <Link to='/' className={classes.lil} onClick={closeMenu}>
                    Sign up
                  </Link>
                </li>
                <li className={classes.menuItem}>
                  <Link to='/' className={classes.lil} onClick={closeMenu}>
                    Sign in
                  </Link>
                </li>
                <li className={classes.menuItem}>
                  <Link to='/cart' className={classes.lil} onClick={closeMenu}>
                    My cart
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
        <div className={classes.catee}>
          <Cate />
        </div>
      </nav>
    </header>
  );
};

export default Header;
