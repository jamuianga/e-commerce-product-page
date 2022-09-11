import React, { useState } from 'react';
import css from './Header.module.scss';
import logo from '../assets/logo.svg';
import iconCart from '../assets/icon-cart.svg';
import avatarImg from '../assets/image-avatar.png';
import Cart from './Cart';

function Header({ cart }) {
  const [showCart, setShowCart] = useState(false);

  return (
    <nav className={css.container}>
      <a href="/">
        <img src={logo} alt="Logo" className={css.logo} />
      </a>

      <ul className={css.menu}>
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
