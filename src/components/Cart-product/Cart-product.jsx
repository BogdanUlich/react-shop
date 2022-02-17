import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const CartProduct = ({ name, image, price, quantity, id}) => {

    return(
        <div className="cart-product">
            <Link to="/"><img  alt="" className="cart-product__img" /></Link>
             <div className="cart-product__info space-between">
                <div className="cart-product__name space-between">
                    <Link to="/">{name}</Link>
                    <span style={{alignSelf: 'flex-start'}}><FontAwesomeIcon className="cart-product__delete" icon={faTimes} /></span>
                </div>
                <div className="cart-product__amount space-between">
                    <span>Количество: {quantity}</span>
                    <span className="cart-product__price">{price} грн</span>
                </div>
            </div>
        </div>
    )
}

export default CartProduct