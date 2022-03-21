import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../redux/actions/category';
import { fetchCategory } from '../../api';
import LoadingPreview from './Loading-preview';

function Categories({ categoriesRef }) {
    
    useEffect(() => {
        dispatch(fetchCategory())
    }, [])

    const categories = useSelector(({ category }) => category.items)
    const isLoaded = useSelector(({ category }) => category.isLoaded)

    const dispatch = useDispatch()

    const onSelectCategory = (category) => {
        dispatch(selectCategory(category))
    }
    return(
        <section className="categories">
            <h2 ref={categoriesRef} className="main-title">Каталог товаров</h2>
            <div className="categories__container container">
                {isLoaded 
                    ? categories.map( obj  => (
                        <Link to={`/category-page/${obj.link}`} className="category" key={`${obj.link}`} onClick={() => onSelectCategory(obj.link)}>
                            <img className="category__img" src={require('../../assets/img/products/'+obj.img)} alt="" />
                            <div className="category__name">{obj.name}</div>
                            {!obj.shw ? <div className="category__label">Нет в наличии</div> : ''}
                        </Link>))
                    : Array(4).fill(0).map((_, index) => <LoadingPreview key={index} />)
                }
            </div>
        </section> 
    )
}

export default Categories;