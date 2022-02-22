import axios from 'axios';

export const fetchProduct = (id) => (dispatch) => {
    /*dispatch(setLoaded(false))
    axios.get(`/disposablePods?id=${id}`).then( ({ data }) => {
        dispatch(setProducts(data))
    });*/

    dispatch(setLoaded(false));
    axios({
        method: 'get',
        url: 'http://elfbar-shop/?action=getProduct&id='+id,
        data: '',
        config: {headers: {'Content-Type': 'multipart/form-data'}}
    }).then(function (response) {
        dispatch(setProducts([response.data]));
    });
}

export const fetchProducts = (category, sortBy) => (dispatch) => {
    /*dispatch(setLoaded(false))
    axios.get(`/disposablePods?category=${category}&_sort=${sortBy.type}&_order=${sortBy.order}`).then( ({ data }) => {
            dispatch(setProducts(data))
     })*/

    dispatch(setLoaded(false))
    axios({
        method: 'get',
        url: 'http://elfbar-shop/?action=getCategoryProducts&category='+category+'&sort='+sortBy.type,
        data: '',
        config: {headers: {'Content-Type': 'multipart/form-data'}}
    }).then(function (response) {
        dispatch(setProducts(response.data))
    });
}

export const fetchPopularProducts = () => (dispatch) => {
    /*dispatch(setLoaded(false))
    axios.get('/disposablePods?rating=5&available=1').then( ({ data }) => {
            dispatch(setProducts(data))
    });*/

    dispatch(setLoaded(false))
    axios({
        method: 'get',
        url: 'http://elfbar-shop/?action=getPopularProducts',
        data: '',
        config: {headers: {'Content-Type': 'multipart/form-data'}}
    }).then(function (response) {
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
