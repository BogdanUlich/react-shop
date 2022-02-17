import axios from 'axios';

export const fetchProduct = (id) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`/disposablePods?id=${id}`).then( ({ data }) => {
            dispatch(setProducts(data))
     })
}

export const fetchProducts = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`/disposablePods?category=${category}&_sort=${sortBy.type}&_order=${sortBy.order}`).then( ({ data }) => {
            dispatch(setProducts(data))
     })
}

export const fetchPopularProducts = () => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get('/disposablePods?rating=5&available=1').then( ({ data }) => {
            dispatch(setProducts(data))
     })
}

export const setProducts = (items) => ({
    type: 'SET_PRODUCTS',
    payload: items,
})

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})