import React, { useEffect } from 'react';
import Slider from '../../components/Slider/Slider';
import banner from'../../assets/img/banners/banner.jpg'
import banner2 from'../../assets/img/banners/banner2.jpg'
import Categories from '../../components/Categories/Categories';
import ProductCard from '../../components/Product-card/Product-card';
import { useRef } from 'react/cjs/react.development';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPopularProducts } from '../../redux/actions/product';
import { LoadingPreview } from '../../components';


function Main() {

    const dispatch = useDispatch()

    const items = useSelector(({ products }) => products.items )
    const isLoaded = useSelector(({ products }) => products.isLoaded )

    useEffect(() => {
        dispatch(fetchPopularProducts())
    }, [])

    const categoriesRef = useRef(null) 

    const executeScroll = () => {
        categoriesRef.current.scrollIntoView({ behavior: 'smooth'})
    }
    
    return(
        <div>
            <section className="intro">
                    <div className="intro__container container">
                        <div className="intro__info">
                            <h1 className="intro__title">EMPIRE POD</h1>
                            <p className="intro__text">Официальный интернет-магазин одноразовых электронных сигарет, Elf Bar, HQD, BANG, оригинальная продукция, большой ассортимент</p>
                            <button onClick={() => executeScroll()} className="intro__btn btn-black">Каталог</button>
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
                
                <Categories categoriesRef={categoriesRef} />

                <section className="popular-products">
                    <h2 className="main-title">Популярные товары</h2>
                    <div className="popular-products__container container">
                        {isLoaded 
                            ? items.map(obj => <ProductCard key={obj.id} {...obj}/>) 
                            : Array(8).fill(0).map((_, index) => <LoadingPreview key={index} />)
                        }
                    </div>
                </section>
        </div>
    )
}

export default Main;
