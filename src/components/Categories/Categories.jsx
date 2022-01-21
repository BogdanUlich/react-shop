import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import category from '../../assets/img/category/category.jpg'

function Categories({ name, onClick }) {

   
    return(
        <section className="categories">
            <h2 className="main-title">Каталог товаров</h2>
            <div className="categories__container container">
                {name.map((name, index)  => (
                    <Link to="/category-page" className="category" key={`${name}_${index}`} onClick={() => onClick(name)}>
                        <img className="category__img" src={category} alt="" />
                        <div className="category__name">{name}</div>
                        <div className="category__label">Распродано</div>
                    </Link>
                ))}
            </div>
        </section> 
    )
}

export default Categories;