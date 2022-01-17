import React from 'react';
import Button  from '../../components/Buttons/Button';
// import product from '../../assets/img/product-card.jpg'


function ProductPage() {
    return(
        <div className="product-page">
            <div className="product-page__container container">
                <div className="product">
                    <div className="product__column">
                        <div className="product__wrapper">
                            <img  alt="" className="product__img" />
                            <div className="product__preview-wrapper">
                                <img  alt="" className="product__preview" />
                                <img  alt="" className="product__preview" />
                                <img  alt="" className="product__preview" />
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
    )
}

export default ProductPage;