import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { removeItem } from '../../redux/actions/cart';

const CartProduct = ({ name, image, price, quantity, id, dispatch}) => {

    const deleteProduct = () => {
        dispatch(removeItem(id))
    }

    return(
        <div className="cart-product">
            <Link to="/"><img  alt="" className="cart-product__img" /></Link>
             <div className="cart-product__info space-between">
                <div className="cart-product__name space-between">
                    <Link to="/">{name}</Link>
                    <span onClick={deleteProduct} style={{alignSelf: 'flex-start'}}><FontAwesomeIcon className="cart-product__delete" icon={faTimes} /></span>
                </div>
                <div className="cart-product__amount space-between">
                    <span className='cart-product__amount-body'>
                        <span>Количество: {quantity}</span>
                        <FontAwesomeIcon className='cart-product__amount-icon' icon={faPlusCircle} />
                        <FontAwesomeIcon className='cart-product__amount-icon' icon={faMinusCircle} />
                    </span>
                    <span className="cart-product__total-price">
                        <span>{price} грн</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CartProduct