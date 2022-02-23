import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CartProduct } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { clearCart } from '../../redux/actions/cart';
import emptyCart from '../../assets/img/cart/empty-cart.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Cart() {

    const dispatch = useDispatch()
    const {totalPrice, totalCount, items} = useSelector(({ cart }) => cart )

    const addedItems = Object.keys(items).map(key => {
        return items[key].items[0]
    })
    
    const onClearCart = () => {
        if(window.confirm("Вы действительно хотите очистить корзину?")){
            dispatch(clearCart())
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    return(
        <div className="container">
            <div className="cart">
                {
                totalCount ? <div className="cart__container">
                    <div className="product-cart">
                        <div className="product-cart__body">
                            <h2 className="product-cart__title title space-between">
                                <span>Корзина</span>
                                <span onClick={onClearCart} className="product-cart__clear">
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                    Очистить корзину
                                </span> 
                            </h2>

                            <div className="product-cart__item">
                                {addedItems.map(obj => <CartProduct name={obj.name} price={items[obj.id].totalPrice} image={obj.imageUrl} 
                                                            quantity={items[obj.id].items.length} id={obj.id} key={`${obj.id}_${obj.name}`}
                                                            dispatch={dispatch}/>) 
                                }
                            </div>

                            <div className="product-cart__price space-between">
                                <span>Товары</span>
                                <span>240 грн</span>                
                            </div>
                            <div className="product-cart__delivery-price space-between">
                                <span>Доставка</span>
                                <span>60 грн</span>         
                            </div>
                            <div className="product-cart__total space-between">
                                <span>Итого</span>
                                <span>{totalPrice} грн</span>
                            </div>
                        </div>
                    </div>

                    <div className="product-ordering">
                        <h2 className="product-ordering__title title">Оплата и доставка</h2>
                        <div className="product-ordering__input-group">
                            <div className="product-ordering__input-wrapper">
                                <div className="product-ordering__input-name">Имя <span>*</span></div>
                                <input className="product-ordering__input" type="text" />
                            </div>
                            <div className="product-ordering__input-wrapper">
                                <div className="product-ordering__input-name">Фамилия <span>*</span></div>
                                <input className="product-ordering__input" type="text" />
                            </div>
                        </div>
                        <div className="product-ordering__input-wrapper phone">
                            <div className="product-ordering__input-name">Номер телефона <span>*</span></div>
                            <input className="product-ordering__input" type="text" />
                        </div>

                        <h2 className="product-ordering__title title">Укажите адрес доставки</h2>
                        <div className="product-ordering__dropdown-group">
                            <input type="text" className="product-ordering__dropdown" />
                            <input type="text" className="product-ordering__dropdown" />
                            <input type="text" className="product-ordering__dropdown" />
                        </div>
                        <h2 className="product-ordering__title title">Способ оплаты</h2>
                        <div className="product-ordering__switch">
                            <div className="product-ordering__switch-wrapper">
                                <input className="product-ordering__switch-btn" type="radio" />
                                <div className="product-ordering__switch-name">Оплата на карту (после подтверждения заказа на Ваш номер будет отправлен номер карты)</div>
                            </div>
                            <div className="product-ordering__switch-wrapper">
                                <input className="product-ordering__switch-btn" type="radio" />
                                <div className="product-ordering__switch-name">Наложенный платёж (оплата при получении)</div>
                            </div>
                        </div>
                        <h2 className="product-ordering__title title">Детали</h2>
                        <textarea className='product-ordering__textarea' name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </div> : 
                <div className="cart__empty">
                    <div className="cart__empty-title">В вашей корзине пока нет товаров</div>
                    <div className="cart__empty-img">
                        <img src={emptyCart} alt="" />
                    </div>
                    <Link to="/" className="cart__empty-btn btn-black">Смотреть товары</Link>
                </div>
                }
            </div>
        </div>
    )
}

export default Cart
