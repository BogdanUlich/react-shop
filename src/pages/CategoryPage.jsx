import React from 'react';
import Sort from '../components/Sort-popup/Sort';
import ProductCard from '../components/Product-card/Product-card';
import { Link } from 'react-router-dom';

function CategoryPage({ items }) {
    return(
        <div className="container">
            <div className="category-page">

                <div className="category-page__header space-between">
                    <nav className="breadcrumbs">
                        <Link to="/" className="breadcrumb">Главная /</Link>
                        <span className="breadcrumb">Elfbar 1500</span>
                    </nav>
                    <Sort items={[{name: 'популярности', type: 'popular'}, {name: 'цене', type: 'price'}, {name: 'алфавиту', type: 'alphabet'}]}/>
                </div>

                <div className="category-page__body">
                    {
                        items.map(obj => <ProductCard key={obj.id} {...obj}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoryPage;