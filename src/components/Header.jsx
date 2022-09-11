import React, { useState } from 'react';
import Cart from './Cart';

import css from './Header.module.scss';
import logo from '../assets/logo.svg';
import avatarImg from '../assets/image-avatar.png';

import iconCart from '../assets/icon-cart.svg';
import iconMenu from '../assets/icon-menu.svg';
import iconClose from '../assets/icon-close.svg';

function Header({ cart }) {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={css.container}>
      <button
        type="button"
        className={css['icon-menu']}
        onClick={() => setShowMenu(!showMenu)}
      >
        <img src={iconMenu} alt="Icon menu" />
      </button>

      <a href="/">
        <img src={logo} alt="Logo" className={css.logo} />
      </a>

      <ul className={`${css.menu} ${showMenu ? css.show : ''}`}>
        {/* <li> */}
        <button
          type="button"
          className={css['icon-close-menu']}
          onClick={() => setShowMenu(!showMenu)}
        >
          <img src={iconClose} alt="Icon menu" />
        </button>
        {/* </li> */}
        <li>
          <a href="#">Colecções</a>
        </li>
        <li>
          <a href="#">Homens</a>
        </li>
        <li>
          <a href="#" className={css.active}>
            Mulheres
          </a>
        </li>
        <li>
          <a href="#">Sobre nós</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>

      <div className={css.cart} onClick={() => setShowCart(!showCart)}>
        <img src={iconCart} alt="cart" />
        <span className={css.total}>0</span>
      </div>

      <img src={avatarImg} alt="Avatar" className={css.avatar} />

      {showCart && (
        <div className={css['cart-menu']}>
          <div className={css.title}>Carinho</div>
          {cart.items.length == 0 && (
            <div className={css.empty}>O seu carrinho está vazio.</div>
          )}
          {cart.items.length > 0 && <Cart />}
        </div>
      )}
    </nav>
  );
}

export default Header;
