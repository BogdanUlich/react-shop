import { SELECT_CATEGORY, SET_CATEGORY } from "../constants"

export const setCategory = (items) => ({
    type: SET_CATEGORY,
    payload: items,
})

export const selectCategory = (category) => ({
    type: SELECT_CATEGORY,
    payload: category,
})

