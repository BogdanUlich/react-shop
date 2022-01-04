import React from 'react';
import category from './assets/img/category/category.jpg'
import product from './assets/img/product-card.jpg'
import { Header, Button } from './components';
import Slider from './components/Slider/Slider';
import banner from'./assets/img/banners/banner.jpg'
import banner2 from'./assets/img/banners/banner2.jpg'


function App() {
return (
<div className="">
    <Header />


    <section className="intro">
        <div className="intro__container container">
            <div className="intro__info">
                <h1 className="intro__title">EMPIRE POD</h1>
                <p className="intro__text">Официальный интернет-магазин одноразовых электронных сигарет, Elf Bar, HQD, BANG, оригинальная продукция, большой ассортимент</p>
                <Button className="intro__btn">Каталог</Button>
            </div>
            <Slider infinite>
                <Slider.Page>
                    <div className="slider__item">
                        <img className="slider__img" src={banner} alt="" />
                    </div>
                </Slider.Page>
                <Slider.Page>
                    <div className="slider__item">
                        <img className="slider__img" src={banner2} alt="" />
                    </div>
                </Slider.Page>
            </Slider>    
        </div>
    </section>
    

    <section className="categories">
        <h2 className="main-title">Каталог товаров</h2>
        <div className="categories__container container">
            <a href="" className="category">
                <img className="category__img" src={category} alt="" />
                <div className="category__name">Elf bar 1500</div>
                <div className="category__label">Распродано</div>
            </a>
            <a href="" className="category">
                <img className="category__img" src={category} alt="" />
                <div className="category__name">Elf bar 2000</div>
            </a>
            <a href="" className="category">
                <img className="category__img" src={category} alt="" />
                <div className="category__name">Elf bar 2500</div>
            </a>
            <a href="" className="category">
                <img className="category__img" src={category} alt="" />
                <div className="category__name">Elf bar lux 1500</div>
            </a>
        </div>
    </section>

    <section className="popular-products">
        <h2 className="main-title">Популярные товары</h2>
        <div className="popular-products__container container">
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
        </div>
    </section>

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



