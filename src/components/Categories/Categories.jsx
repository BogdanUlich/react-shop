import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategory, selectCategory } from '../../redux/actions/category';

function Categories({ categoriesRef }) {

    useEffect(() => {
        dispatch(fetchCategory())
    }, [])

    const categories = useSelector(({ categories }) => categories.items)

    const dispatch = useDispatch()

    const onSelectCategory = (category) => {
        dispatch(selectCategory(category))
    }
    return(
        <section className="categories">
            <h2 ref={categoriesRef} className="main-title">Каталог товаров</h2>
            <div className="categories__container container">
                {categories.map( obj  => (
                    <Link to={`/category-page/${obj.category}`} className="category" key={`${obj.category}`} onClick={() => onSelectCategory(obj.category)}
                        >
                        <img className="category__img" src="https://vapers-dreams.ru/image/cache/catalog/odnorazovye/odnorazovye-e-sigarety-pump-strawberry-1000x1000.png" alt="" />
                        <div className="category__name">{obj.name}</div>
                        {!obj.available ? <div className="category__label">Нет в наличии</div> : ''}
                    </Link>
                ))}
            </div>
        </section> 
    )
}

export default Categories;