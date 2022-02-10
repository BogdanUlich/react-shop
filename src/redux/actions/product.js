import axios from 'axios';

export const fetchProducts = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`http://localhost:3001/disposablePods?category=${category}&_sort=${sortBy.type}&_order=${sortBy.order}`).then( ({ data }) => {
            dispatch(setProducts(data))
     })
}

export const fetchPopularProducts = () => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get('http://localhost:3001/disposablePods?rating=5&available=1').then( ({ data }) => {
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