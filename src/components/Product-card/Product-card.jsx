import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import product from '../../assets/img/blueberry.png'


function ProductCard({ available, name }) {

    return(
            <a href="#" className="product-card">
                <span className="product-card__img"><img src={product} alt=""/></span>
                <span className="product-card__description">
                    <span className="product-card__name">{name}</span>
                    <span className="product-card__discount">Старая цена <span>300 грн</span></span>
                    <span className="product-card__price">220 грн</span>
                    <span className={classNames("product-card__buy", available ? 'active' : '')}>
                        <span href="" className="product-card__btn">Купить</span>
                        <span href="" className="product-card__unavailable">Нет в наличии</span>
                    </span>
                </span>
            </a>         
    )
}

ProductCard.propTypes = {
    name : PropTypes.string.isRequired,
    available : PropTypes.number    
}

export default ProductCard;