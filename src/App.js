import React from "react"
import { Route, Routes } from "react-router-dom"
import { Header } from "./components"
import { Cart, CategoryPage, Main, ProductPage } from "./pages"
import { useSelector } from "react-redux"
import Footer from "./components/Footer/Footer"

function App() {
  const { items } = useSelector(({ products }) => {
    return {
      items: products.items,
    }
  })

  return (
    <div className="wrapper">
      <Header
        numbers={[
          "+380 (50) 300 00 00",
          "+380 (50) 200 00 00",
          "+380 (50) 200 00 00",
          "+380 (50) 200 00 00",
        ]}
      />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/checkout" element={<Cart />} />
        <Route exact path="/category-page/:category" element={<CategoryPage />} />
        <Route path="/product-page/:id" element={<ProductPage items={items} />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App
