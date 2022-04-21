import React, { useEffect } from "react"
import Categories from "../../components/Categories/Categories"
import ProductCard from "../../components/Product-card/Product-card"
import { useRef } from "react/cjs/react.development"
import { useSelector, useDispatch } from "react-redux"
import { LoadingPreview } from "../../components"
import { fetchPopularProducts } from "../../api"
import SimpleSlider from "../../components/Slider/Slick-slider"

function Main() {
  const dispatch = useDispatch()

  const items = useSelector(({ products }) => products.items)
  const isLoaded = useSelector(({ products }) => products.isLoaded)

  useEffect(() => {
    window.scrollTo({ top: 0 })
    dispatch(fetchPopularProducts())
  }, [])

  const categoriesRef = useRef()

  const executeScroll = () => {
    const categoriesHeight = categoriesRef.current.offsetTop - 55
    scrollTo({ top: categoriesHeight, behavior: "smooth" })
  }

  return (
    <div className="main" id="main">
      <section className="intro">
        <div className="intro__container container">
          <div className="intro__info">
            <h1 className="intro__title">EMPIRE POD</h1>
            <p className="intro__text">
              Официальный интернет-магазин одноразовых электронных сигарет, Elf Bar, HQD, BANG,
              оригинальная продукция, большой ассортимент
            </p>
            <button onClick={executeScroll} className="intro__btn btn-black">
              Каталог
            </button>
          </div>
          <SimpleSlider />
        </div>
      </section>

      <Categories categoriesRef={categoriesRef} />

      <section className="popular-products">
        <h2 className="main-title">Популярные товары</h2>
        <div className="popular-products__container container">
          {isLoaded
            ? items.map((obj) => <ProductCard key={obj.id} {...obj} />)
            : Array(8)
                .fill(0)
                .map((_, index) => <LoadingPreview key={index} />)}
        </div>
      </section>
    </div>
  )
}

export default Main
