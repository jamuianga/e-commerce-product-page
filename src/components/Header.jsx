import React from 'react';
import css from './Header.module.scss';
import logo from '../assets/logo.svg';
import iconCart from '../assets/icon-cart.svg';
import avatarImg from '../assets/image-avatar.png';

function Header() {
  return (
    <nav className={css.container}>
      <img src={logo} alt="Logo" />
      <ul>
        <li>
          <a href="#">Coleções</a>
        </li>
        <li>
          <a href="#">Homens</a>
        </li>
        <li>
          <a href="#">Mulheres</a>
        </li>
        <li>
          <a href="#">Sobre nós</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
      <div>
        <img src={iconCart} alt="cart" />
        <span>0</span>
      </div>
      <div>
        <img src={avatarImg} alt="" />
      </div>
      <div>
        <div>Carinho</div>
        <div>Seu carinho está vazio</div>
      </div>
    </nav>
  );
}

export default Header;
