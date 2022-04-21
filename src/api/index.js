import axios from "axios"
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
export const fetchCities = (cityName) => {
  return axios
    .get(`http://elfbar-shop/?action=getCity&name=${cityName}`)
    .then((response) => response.data)
}

export const fetchWarehouses = (id, setWarehouses) => {
  axios
    .get(`http://elfbar-shop/?action=getWarehouse&cityRef=${id}`)
    .then((response) => setWarehouses(response.data))
}

export const createOrder = (data, showModal, setOrderNumber) => {
  axios
    .post("http://elfbar-shop/?action=createOrder", data)
    .then((response) => setOrderNumber(response.data))
    .then(showModal())
    .catch((response) => console.log(response))
}
// CART

// SEARCH
export const searchProduct = (productName, showProducts, toggleVisibleSearchList) => {
  if (productName) {
    return axios
      .get(`http://elfbar-shop/?action=searchProduct&name=${productName}`)
      .then((response) => showProducts(response.data))
      .then(toggleVisibleSearchList(true))
      .catch(() => showProducts(false))
  } else {
    toggleVisibleSearchList(false)
  }
}
// SEARCH
