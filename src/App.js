import React from 'react';
import product from './assets/img/product-card.jpg'
import Header from './components/Header/Header';
import Button  from './components/Buttons/Button';
import Main from './components/Main/Main';


function App() {
return (
<div className="">
    <Header />
    <Main />
    
    <div className="product-page">
        <div className="product-page__container container">
            <div className="product">
                <div className="product__column">
                    <div className="product__wrapper">
                        <img src={product} alt="" className="product__img" />
                        <div className="product__preview-wrapper">
                            <img src={product} alt="" className="product__preview" />
                            <img src={product} alt="" className="product__preview" />
                            <img src={product} alt="" className="product__preview" />
                        </div>
                    </div>
                    <div className="product__description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto obcaecati tempora repellendus earum praesentium, modi officiis dolorum dolor iure, quo aspernatur iste minus nemo accusamus aut ratione expedita aliquam tempore.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto obcaecati tempora repellendus earum praesentium, modi officiis dolorum dolor iure, quo aspernatur iste minus nemo accusamus aut ratione expedita aliquam tempore.</p>
                        <ul className="product__description-list">
                            <li className="product__description-title">Характеристики</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        </ul>
                        <img src="img/banners/banner.jpg" alt="" className="product__description-img" />
                    </div>
                </div>
                <div className="product__column">
                    <div className="product__info">
                        <h1 className="product__name">Elf Bar 2000 Pineapple Ice Disposable Pod Device</h1>
                        <div className="product__code">Артикул 00001</div>
                        <div className="product__price">300 грн.</div>
                        <div className="product__discount">
                            <div className="product__old-price">350 грн.</div>
                            <div className="product__discount-value">Скидка 14%</div>
                        </div>
                        <div className="product__label">Новинка</div>
                        <div className="product__amount">
                            Количество: <input type="text" placeholder="1" />
                        </div>
                        <Button className="product__btn">В корзину</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="cart">
        <div className="cart__container container">
            <div className="product-cart">
                <div className="product-cart__body">
                <h2 className="product-cart__title title">Корзина</h2>
                    <div className="product-cart__item cart-product">
                        <img src={product} alt="" className="cart-product__img" />
                        <div className="cart-product__info space-between">
                            <div className="cart-product__name space-between">
                                <span>HQD King 2000 Pina Colada 5% Disposable Pod</span>
                                <span className="cart-product__delete">x</span>
                            </div>
                            <div className="cart-product__amount space-between">
                                <span>Количество: 1</span>
                                <span className="cart-product__price">240 грн</span>
                            </div>
                        </div>
                    </div>

                    <div className="product-cart__item cart-product">
                        <img src={product} alt="" className="cart-product__img" />
                        <div className="cart-product__info space-between">
                            <div className="cart-product__name space-between">
                                <span>HQD King 2000 Pina Colada 5% Disposable Pod</span>
                                <span className="cart-product__delete">x</span>
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
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
    </div>
</div>
);
}

export default App;



