import React from 'react';
import category from '../../assets/img/category/category.jpg'

function Category() {
    return(
        <a href="" className="category">
            <img className="category__img" src={category} alt="" />
            <div className="category__name">Elf bar 1500</div>
            <div className="category__label">Распродано</div>
        </a>
    )
}

export default Category;