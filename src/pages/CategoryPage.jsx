import React from 'react';
import Sort from '../components/Sort-popup/Sort';

function CategoryPage() {
    return(
        <div className="container">
            <div className="category-page">
                <div className="category-page__header space-between">
                    <nav className="breadcrumbs">
                        <a href="" className="breadcrumb">Главная /</a>
                        <a href="" className="breadcrumb">Elfbar 1500</a>
                    </nav>

                    <Sort items={['популярности', 'цене', 'алфавиту']}/>
                </div>

                <div className="category-page__body">
                
                </div>

            </div>
        </div>
    )
}

export default CategoryPage;