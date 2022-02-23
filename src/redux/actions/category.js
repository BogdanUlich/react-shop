import axios from 'axios';

export const fetchCategory = () => (dispatch) => {
    axios.get('http://elfbar-shop/?action=getIndexCategories').then(function (response) {
        dispatch(setCategory(response.data));
    });
}

export const setCategory = (items) => ({
    type: 'SET_CATEGORY',
    payload: items,
})

export const selectCategory = (category) => ({
    type: 'SELECT_CATEGORY',
    payload: category,
})

