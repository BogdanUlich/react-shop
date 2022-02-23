import React from 'react';
import product from '../../assets/img/blueberry.png'
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/actions/cart';

function ProductPage() {

    const item = useSelector(({ products }) => products.items )
    const isLoaded = useSelector(({ products }) => products.isLoaded ) 
    const dispatch = useDispatch()

    const onAddToCart = ({ id, name, imageUrl, actualPrice }) => {
        const obj = {
            id,
            name,
            imageUrl,
            actualPrice,
        }
        dispatch(addItemToCart(obj)) 
    }

    return(
        <div className="product-page">
            <div className="product-page__container container">
                <div className="product">
                    <div className="product__column">
                        <div className="product__wrapper">
                            <img  alt="" src={item[0].img} className="product__img" />
                        </div>
                        <div className="product__description">
                            {item[0].description}
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto obcaecati tempora repellendus earum praesentium, modi officiis dolorum dolor iure, quo aspernatur iste minus nemo accusamus aut ratione expedita aliquam tempore.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto obcaecati tempora repellendus earum praesentium, modi officiis dolorum dolor iure, quo aspernatur iste minus nemo accusamus aut ratione expedita aliquam tempore.</p>
                            <ul className="product__description-list">
                                <li className="product__description-title">Характеристики</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="product__column">
                        <div className="product__info">
                            <h1 className="product__name">{item[0].name}</h1>
                            <div className="product__price">{item[0].actualPrice} грн.</div>
                            <div className="product__discount">
                                <div className="product__old-price">{item[0].oldPrice} грн.</div>
                                <div className="product__discount-value">Скидка 14%</div>
                            </div>
                            <div className="product__label">Новинка</div>
                            <div className="product__amount">
                                Количество: <input type="text" placeholder="1" />
                            </div>
                            <button onClick={() => onAddToCart(item[0])} className="product__btn btn-black">В корзину</button>
                        </div>
                    </div>
                    <div className="product__img-md">
                        <img  alt="" src={product} className="product__img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;