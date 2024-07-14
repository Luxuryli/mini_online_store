import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useStore from '../../components/stores/Store';
import logo from '../../assets/Giora.svg';
import search from '../../assets/search-normal.svg';
import favorite from '../../assets/favorite.svg';
import user from '../../assets/user.svg';
import cart from '../../assets/shopping-carth.svg';
import hamburger from '../../assets/hamburger.svg';
import close from '../../assets/hamburger.svg';
import arrowright from '../../assets/Arrow_right.svg';
import Cate from '../../components/header_cate/cate_head';
import classes from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems, showAddNotification, showRemoveNotification, hideNotifications } = useStore();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (showAddNotification || showRemoveNotification) {
      const timer = setTimeout(() => hideNotifications(), 3000);
      return () => clearTimeout(timer);
    }
  }, [showAddNotification, showRemoveNotification, hideNotifications]);

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.header_wrp}>
          <div className={classes.logo}>
            <Link to='/' aria-label="Homepage">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={classes.section}>
            <ul>
              <li>Men</li>
              <Link to='/' className={classes.lil} aria-label="Women section">
                <li>Women</li>
              </Link>
              <li>Unisex</li>
              <li>Kids</li>
            </ul>
          </div>
          <div className={classes.search}>
            <div className={classes.searchbar}>
              <img src={search} alt="searchicon" />
              <input type="text" placeholder='Search' aria-label="Search" />
            </div>
          </div>
          <div className={classes.usermenu}>
            <img src={favorite} alt="favorite" className={classes.fav} aria-label="Favorite" />
            <img src={user} alt="user" className={classes.user} aria-label="User account" />
            <Link to='/cart' className={classes.cartLink}>
              <div className={classes.cartIcon}>
                <img src={cart} alt="cart" className={classes.cartImg} aria-label="Shopping cart" />
                {cartItems.length > 0 && (
                  <span className={classes.cartItemCount}>{cartItems.length}</span>
                )}
              </div>
            </Link>
          </div>
          <div className={classes.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
            <img src={menuOpen ? close : hamburger} alt="menu" />
          </div>
        </div>
        {menuOpen && (
          <>
            <div className={classes.overlay} onClick={closeMenu} aria-label="Close menu"></div>
            <div className={classes.mobileMenu}>
              <div className="hame" onClick={toggleMenu}>
                <img src={menuOpen ? close : hamburger} alt="ham" className={classes.ham} />
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
      {showAddNotification && (
        <div className={classes.notificationAdd}>
          <p>Item added to cart!</p>
        </div>
      )}
      {showRemoveNotification && (
        <div className={classes.notificationRemove}>
          <p>Item removed from cart!</p>
        </div>
      )}
    </header>
  );
};

export default Header;
