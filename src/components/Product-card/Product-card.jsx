import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import product from '../../assets/img/blueberry.png'
import { Link } from 'react-router-dom';


function ProductCard({ available, name, id }) {

    return(
        <div className="product-card">
            <Link to={"/product-page/" + id} className="product-card__img"><img src={product} alt=""/></Link>
            <span className="product-card__description">
                <Link to={"/product-page/" + id} className="product-card__name">{name}</Link>
                <span className="product-card__discount">Старая цена <span>300 грн</span></span>
                <span className="product-card__price">220 грн</span>
                <span className={classNames("product-card__buy", available ? 'active' : '')}>
                    <span href="" className="product-card__btn">В корзину</span>
                    <span href="" className="product-card__unavailable">Нет в наличии</span>
                </span>
            </span>
        </div>     
    )
}

ProductCard.propTypes = {
    name : PropTypes.string.isRequired,
    available : PropTypes.number    
}

export default ProductCard;