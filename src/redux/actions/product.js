import axios from 'axios';

export const fetchProduct = (id) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get('http://elfbar-shop/?action=getProduct&id='+id).then(function (response) {
        dispatch(setProducts([response.data]));
    });
}

export const fetchProducts = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get('http://elfbar-shop/?action=getCategoryProducts&category='+category+'&sort='+sortBy.type).then(function (response) {
        dispatch(setProducts(response.data));
    });
}

export const fetchPopularProducts = () => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get('http://elfbar-shop/?action=getPopularProducts').then(function (response) {
        dispatch(setProducts(response.data))
    });
}

export const setProducts = (items) => ({
    type: 'SET_PRODUCTS',
    payload: items,
})

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})
