import axios from 'axios';
import { setCategory, setCategoryLoaded } from '../redux/actions/category';
import { setLoaded, setProducts } from '../redux/actions/product';

// CATEGORIES
export const fetchCategory = () => (dispatch) => {
    dispatch(setCategoryLoaded(false));
    axios.get('http://elfbar-shop/?action=getIndexCategories').then(function (response) {
        dispatch(setCategory(response.data));
    });
}
// CATEGORIES

// PRODUCTS
export const fetchProduct = (id) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get('http://elfbar-shop/?action=getProduct&id='+id).then(function (response) {
        dispatch(setProducts([response.data]));
    });
}

export const fetchProducts = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get('http://elfbar-shop/?action=getCategoryProducts&category='+category+'&sort='+sortBy.type+'&order='+sortBy.order).then(function (response) {
        dispatch(setProducts(response.data));
    });
}

export const fetchPopularProducts = () => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get('http://elfbar-shop/?action=getPopularProducts').then(function (response) {
        dispatch(setProducts(response.data))
    });
}
// PRODUCTS