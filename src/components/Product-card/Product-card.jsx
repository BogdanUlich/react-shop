import classNames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/actions/cart';
import { fetchProduct } from '../../redux/actions/product';

function ProductCard({ available, name, actualPrice, oldPrice, id, img, link}) {

    const dispatch = useDispatch()

    const onAddToCart = () => {
        const obj = {
            id,
            name,
            img,
            actualPrice
        }
        dispatch(addItemToCart(obj))
    }

    const onGoToProductPage = () => {
        dispatch(fetchProduct(id))
    }

    return(
        <div className="product-card">
            <Link onClick={onGoToProductPage} to={"/product-page/" + link} className="product-card__img">
                <img src={require('../../assets/img/products/'+img)} alt=""/>
            </Link>
            <span className="product-card__description">
                <Link onClick={onGoToProductPage} to={"/product-page/" + link} className="product-card__name">{name}</Link>
                <span className="product-card__discount">Старая цена <span>{oldPrice} грн</span></span>
                <span className="product-card__price">{actualPrice} грн</span>
                <span className={classNames("product-card__buy", available ? 'active' : '')}>
                    <button onClick={onAddToCart} className="product-card__btn">В корзину</button>
                    <span href="" className="product-card__unavailable">Нет в наличии</span>
                </span>
            </span>
        </div> 
    )
}

ProductCard.propTypes = {
    name : PropTypes.string.isRequired,
    available : PropTypes.number,
    actualPrice : PropTypes.number,
    oldPrice : PropTypes.number,
    onAddToCart : PropTypes.func,
}

export default ProductCard;
