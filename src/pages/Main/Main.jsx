import React from 'react';
import Slider from '../../components/Slider/Slider';
import banner from'../../assets/img/banners/banner.jpg'
import banner2 from'../../assets/img/banners/banner2.jpg'
import Button  from '../../components/Buttons/Button';
import Categories from '../../components/Categories/Categories';
import ProductCard from '../../components/Product-card/Product-card';


function Main({ items }) {

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

                <Categories name={['Elf bar 800','Elf bar 1500','Elf bar 2000']}
                            onClick={(name) => console.log(name)}
                />

                <section className="popular-products">
                    <h2 className="main-title">Популярные товары</h2>
                    <div className="popular-products__container container">
                        {
                            items.map(obj => <ProductCard key={obj.id} {...obj}/>)
                        }
                    </div>
                </section>
        </div>
    )
}

export default Main;
