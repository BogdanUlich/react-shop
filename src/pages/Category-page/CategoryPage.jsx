import React, { useEffect } from 'react';
import Sort from '../../components/Sort-popup/Sort';
import ProductCard from '../../components/Product-card/Product-card';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/actions/product';

function CategoryPage() {

    const items = useSelector(({ products }) => products.items )
    const category = useSelector(({ categories }) => categories.category)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts(category))
    }, [])

    return(
        <div className="container">
            <div className="category-page">

                <div className="category-page__header">
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