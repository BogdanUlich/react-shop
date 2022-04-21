import { SET_SORT_BY } from "../constants"

export const setSortBy = (type) => ({
  type: SET_SORT_BY,
  payload: type,
})
