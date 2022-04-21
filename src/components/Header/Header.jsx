import React, { useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"
import { faShoppingCart, faSortDown, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons"
import { faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { useEffect, useState } from "react/cjs/react.development"
import classNames from "classnames"
import { Link } from "react-router-dom"
import LeftMenu from "../Left-menu/Left-menu"
import { useSelector } from "react-redux"
import SearchInput from "../Search-input/Search-input"
import Fade from "../Fade/Fade"

function Header({ numbers }) {
  const numRef = useRef()

  // POPUP
  const [visiblePopup, setVisiblePopup] = useState(false)

  useEffect(() => {
    document.body.addEventListener("click", closePopup)
  }, [])

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup)
  }

  const closePopup = (event) => {
    const path = event.path || (event.composedPath && event.composedPath())
    if (!path.includes(numRef.current)) {
      setVisiblePopup(false)
    }
  }
  // POPUP

  // SCROLLTOP
  const [showScrollTop, setShowScrollTop] = useState(false)

  const scrollTopRef = useRef()

  useEffect(() => {
    window.addEventListener("scroll", showScrollTopArrow)
  }, [])

  const showScrollTopArrow = () => {
    if (!showScrollTop && window.pageYOffset > 300) {
      setShowScrollTop(true)
    } else {
      setShowScrollTop(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  // SCROLLTOP

  // LEFTMENU
  const [visibleMenu, setVisibleMenu] = useState(false)

  const openLeftMenu = () => {
    setVisibleMenu(true)
    setVisibleFade(true)
    document.body.style.overflow = "hidden"
  }

  const closeLeftMenu = () => {
    setVisibleMenu(false)
    setVisibleFade(false)
    document.body.style.overflow = "auto"
  }
  // LEFTMENU

  // FADE
  const [visibleFade, setVisibleFade] = useState(false)
  // FADE

  const totalCount = useSelector(({ cart }) => cart.totalCount)

  return (
    <div>
      <header className="header">
        <div className="header__container container">
          <button className="header__menu" onClick={openLeftMenu}>
            <div className="header__menu-burger">
              <span></span>
            </div>
            <span>Меню</span>
          </button>
          <Link to="/" className="header__logo">
            Logo
          </Link>
          <SearchInput className={"header__search"} />
          <div className="header__contacts">
            <a href="" className="header__contacts-link">
              <FontAwesomeIcon className="header__contacts-icon" icon={faTelegram} />
            </a>
            <a href="" className="header__contacts-link">
              <FontAwesomeIcon className="header__contacts-icon" icon={faInstagram} />
            </a>
            <div className="header__numbers">
              <span
                className="header__number header__number_label"
                onClick={toggleVisiblePopup}
                ref={numRef}
              >
                {numbers[0]}
                <FontAwesomeIcon
                  className={classNames("header__number-icon", visiblePopup ? "open" : "")}
                  icon={faSortDown}
                />
              </span>
              <div className={classNames("header__numbers-list", visiblePopup ? "open" : "")}>
                {numbers.map((num, index) => (
                  <a href={`tel:${num}`} className="header__number" key={`${num}_${index}`}>
                    {num}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <Link className="header__cart" to="/checkout">
            <FontAwesomeIcon className="header__cart-icon" icon={faShoppingCart} />
            <div className={classNames("header__cart-amount", totalCount ? "active" : "")}>
              {totalCount}
            </div>
          </Link>
        </div>
      </header>

      <div
        className={classNames("scroll-top", showScrollTop ? "active" : "")}
        onClick={() => scrollTop()}
        ref={scrollTopRef}
      >
        <FontAwesomeIcon icon={faArrowCircleUp} />
      </div>

      <LeftMenu onClick={closeLeftMenu} visibleMenu={visibleMenu} />

      <Fade onClick={closeLeftMenu} visibleFade={visibleFade} />
    </div>
  )
}

Header.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.string),
}

export default Header
