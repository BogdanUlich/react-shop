import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { removeCartItem, plusCartItem, minusCartItem } from '../../redux/actions/cart';

const CartProduct = ({ name, image, price, quantity, id, dispatch}) => {

    const deleteProduct = () => {
        if(window.confirm('Удалить товар из корзины?')){
            dispatch(removeCartItem(id))
        }
    }
    const onPlusCartItem = () => {
        dispatch(plusCartItem(id))
    }
    const onMinusCartItem = () => {
        dispatch(minusCartItem(id))
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
                        <FontAwesomeIcon className='cart-product__amount-icon' icon={faPlusCircle} onClick={onPlusCartItem}/>
                        <FontAwesomeIcon className='cart-product__amount-icon' icon={faMinusCircle} onClick={onMinusCartItem}/>
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