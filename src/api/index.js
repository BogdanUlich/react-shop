import axios from "axios"
import { setCities, setWarhouses } from "../redux/actions/cart"
import { setCategory, setCategoryLoaded } from "../redux/actions/category"
import { setLoaded, setProduct, setProducts } from "../redux/actions/product"

// CATEGORIES
export const fetchCategory = () => (dispatch) => {
  dispatch(setCategoryLoaded(false))
  axios.get("http://elfbar-shop/?action=getIndexCategories").then(function (response) {
    dispatch(setCategory(response.data))
  })
}
// CATEGORIES

// PRODUCTS
export const fetchProduct = (link) => (dispatch) => {
  dispatch(setLoaded(false))
  axios.get("http://elfbar-shop/?action=getProduct&link=" + link).then(function (response) {
    dispatch(setProduct([response.data]))
  })
}

export const fetchProducts = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false))
  axios
    .get(
      "http://elfbar-shop/?action=getCategoryProducts&category=" +
        category +
        "&sort=" +
        sortBy.type +
        "&order=" +
        sortBy.order
    )
    .then(function (response) {
      dispatch(setProducts(response.data))
    })
}

export const fetchPopularProducts = () => (dispatch) => {
  dispatch(setLoaded(false))
  axios.get("http://elfbar-shop/?action=getPopularProducts").then(function (response) {
    dispatch(setProducts(response.data))
  })
}
// PRODUCTS

// CART
export const fetchCities = () => (dispatch) => {
  axios.get("http://elfbar-shop/?action=getCity&name=Киев").then(function (response) {
    dispatch(setCities(response.data))
  })
}

export const fetchWarhouses = (id) => (dispatch) => {
  axios.get("http://elfbar-shop/?action=getWarehouse&cityRef=" + id).then(function (response) {
    dispatch(setWarhouses(response.data))
  })
}
// CART
