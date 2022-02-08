import axios from 'axios';

export const fetchCategory = () => (dispatch) => {
    axios.get('http://localhost:3001/categories').then( ({ data }) => {
            dispatch(setCategory(data))
    })
}

export const setCategory = (items) => ({
    type: 'SET_CATEGORY',
    payload: items,
})

export const selectCategory = (category) => ({
    type: 'SELECT_CATEGORY',
    payload: category,
})
