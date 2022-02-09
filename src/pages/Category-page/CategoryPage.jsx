import React, { useEffect } from 'react';
import Sort from '../../components/Sort-popup/Sort';
import ProductCard from '../../components/Product-card/Product-card';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/actions/product';

function CategoryPage() {

    const items = useSelector(({ products }) => products.items )
    const category = useSelector(({ categories }) => categories.category)
    const sortBy = useSelector(({ filters }) => filters.sortBy)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts(category, sortBy))
    }, [sortBy])

    const sortItems = [{name: 'популярности', type: 'rating'}, {name: 'цене', type: 'actualPrice'}, {name: 'алфавиту', type: 'name'}]

    return(
        <div className="container">
            <div className="category-page">

                <div className="category-page__header">
                    <Sort sortItems={sortItems} activeSortType={sortBy} />
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