import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Cart() {
    return(
        <div className="container">

            <div className="cart">

                <nav className="breadcrumbs">
                    <Link to="/" className="breadcrumb">Главная /</Link>
                    <span className="breadcrumb">Корзина</span>
                </nav>

                <div className="cart__container">

                    <div className="product-cart">
                        <div className="product-cart__body">
                        <h2 className="product-cart__title title">Корзина</h2>

                            <div className="product-cart__item cart-product">
                                <Link to="/"><img  alt="" className="cart-product__img" /></Link>
                                <div className="cart-product__info space-between">
                                    <div className="cart-product__name space-between">
                                        <Link to="/">HQD King 2000 Pina Colada 5% Disposable Pod</Link>
                                        <span style={{alignSelf: 'flex-start'}}><FontAwesomeIcon className="cart-product__delete" icon={faTimes} /></span>
                                    </div>
                                    <div className="cart-product__amount space-between">
                                        <span>Количество: 1</span>
                                        <span className="cart-product__price">240 грн</span>
                                    </div>
                                </div>
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
                                <span>300 грн</span>
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
                </div>
            </div>
        </div>
    )
}

export default Cart