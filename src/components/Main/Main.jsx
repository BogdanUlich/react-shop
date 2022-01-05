import React from 'react';
import Slider from '../../components/Slider/Slider';
import banner from'../../assets/img/banners/banner.jpg'
import banner2 from'../../assets/img/banners/banner2.jpg'
import Button  from '../Buttons/Button';
import Category from '../Category/Category';
import ProductCard from '../Product-card/Product-card';


function Main() {
    return(
        <div>
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
                        <Category/>
                        <Category/>
                        <Category/>
                        <Category/>
                    </div>
                </section>

                <section className="popular-products">
                    <h2 className="main-title">Популярные товары</h2>
                    <div className="popular-products__container container">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard /> 
                    </div>
                </section>
        </div>
    )
}

export default Main;
