import { SELECT_CATEGORY, SET_CATEGORY, SET_LOADED } from "../constants"

export const setCategory = (items) => ({
  type: SET_CATEGORY,
  payload: items,
})

export const selectCategory = (category) => ({
  type: SELECT_CATEGORY,
  payload: category,
})

export const setCategoryLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
})
