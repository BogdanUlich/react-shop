import React from 'react';
import product from '../../assets/img/product-card.jpg'


function ProductCard() {
    return(
        <a href="#" className="product-card">
            <img src={product} alt="" className="product-card__img" />
            <span className="product-card__description">
                <span className="product-card__name">Elf Bar 2000 Banana Milk Disposable Pod Device</span>
                <span className="product-card__discount">Старая цена <span>300 грн</span></span>
                <span className="product-card__price">220 грн</span>
                <span className="product-card__buy">
                    <span href="" className="product-card__btn active">Купить</span>
                    <span className="product-card__absent">Нет в наличии</span>
                </span>
            </span>
        </a>
    )
}

export default ProductCard;