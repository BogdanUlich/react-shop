import React from 'react';
import product from '../../assets/img/blueberry.png'
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/actions/cart';
import { useEffect } from 'react';

function ProductPage() {

    const { img, description, name, actualPrice, oldPrice, id } = useSelector(({ products }) => products.items[0] )
    const isLoaded = useSelector(({ products }) => products.isLoaded ) 
    const dispatch = useDispatch()

    const onAddToCart = () => {
        const obj = {
            id,
            name,
            img,
            actualPrice,
        }
        dispatch(addItemToCart(obj)) 
    }

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    return(
        <div className="product-page">
            <div className="product-page__container container">
                <div className="product">
                    <div className="product__column">
                        <div className="product__wrapper">
                            <img  alt="" src={img} className="product__img" />
                        </div>
                        <div className="product__description">
                            {description}
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
                            <h1 className="product__name">{name}</h1>
                            <div className="product__price">{actualPrice} грн.</div>
                            <div className="product__discount">
                                <div className="product__old-price">{oldPrice} грн.</div>
                                <div className="product__discount-value">Скидка 14%</div>
                            </div>
                            <div className="product__label">Новинка</div>
                            {/* <div className="product__amount">
                                Количество: <input type="text" placeholder="1" />
                            </div> */}
                            <button onClick={onAddToCart} className="product__btn btn-black">В корзину</button>
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