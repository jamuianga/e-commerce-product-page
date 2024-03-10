import React from 'react';
import css from './Main.module.scss';

import productImg from '../assets/image-product-1.jpg';
import productImg1 from '../assets/image-product-1-thumbnail.jpg';
import productImg2 from '../assets/image-product-2-thumbnail.jpg';
import productImg3 from '../assets/image-product-3-thumbnail.jpg';
import productImg4 from '../assets/image-product-4-thumbnail.jpg';
import iconCart from '../assets/icon-cart-white.svg';

function Main() {
  return (
    <div className={css.main}>
      <div className={css['product-gallery']}>
        <img src={productImg} alt="Produto" />
        <div className={css.thumbnails}>
          <img src={productImg1} alt="Produto 1" />
          <img src={productImg2} alt="Produto 2" />
          <img src={productImg3} alt="Produto 3" />
          <img src={productImg4} alt="Produto 4" />
        </div>
      </div>
      <div className={css['product-info']}>
        <h2>Sneaker company</h2>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather cab offer.
        </p>
        <div>
          <div className={css['sale-price-container']}>
            <span className={css['sale-price']}>$125.00</span>
            <span className={css.discount}>50%</span>
          </div>
          <div className={css['regular-price']}>$250.00</div>
        </div>
        <div className={css.action}>
          <div className={css.quantity}>
            <span className={css.btn}>-</span>
            <span>0</span>
            <span className={css.btn}>+</span>
          </div>
          <button>
            <img src={iconCart} />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
