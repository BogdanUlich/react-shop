import { SET_LOADED, SET_PRODUCT, SET_PRODUCTS } from "../constants"

const initialState = {
  items: [],
  item: [
    {
      name: "Elf Bar 2000 SSSSSSS Disposable PodTEST TEST",
      description: "asd\r\nasdqwedsfc';skdmf\r\nsdflkj;sdklf'asdf'\r\n",
      id: 1,
      link: "6c53d45b5836809f3922b09d22c83374",
      actualPrice: 280,
      oldPrice: 300,
      available: 1,
      rating: 5,
      img: "test.png",
    },
  ],
  isLoaded: false,
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      }
    case SET_PRODUCT:
      return {
        ...state,
        item: action.payload,
        isLoaded: true,
      }
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      }
    default:
      return state
  }
}

export default products
