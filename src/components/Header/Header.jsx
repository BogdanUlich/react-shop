import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSortDown, faArrowCircleUp, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react/cjs/react.development';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import LeftMenu from '../Left-menu/Left-menu';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibleMenu } from '../../redux/actions/leftMenu';


function Header({ numbers }) {

    const [visiblePopup, setVisiblePopup] = useState(false)

    const numRef = useRef()
       
    useEffect(() => {
        document.body.addEventListener('click', closePopup)
    }, []) 

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup)
    }

    const closePopup = (event) => {
        const path = event.path || (event.composedPath && event.composedPath())
        if(!path.includes(numRef.current)){
            setVisiblePopup(false)
        }
    }
    

    const [showScrollTop, setShowScrollTop] = useState(false)

    const scrollTopRef = useRef()

    useEffect(() => {
        window.addEventListener('scroll', showScrollTopArrow)
    }, []) 

    const showScrollTopArrow = () => {
        if(!showScrollTop && window.pageYOffset > 300){
            setShowScrollTop(true)
        }else{
            setShowScrollTop(false)
        }
    }

    const scrollTop = () => {
        window.scrollTo({top:0, behavior: 'smooth'})
    }


    const dispatch = useDispatch()
    const visibleMenu = useSelector(({leftMenu}) => leftMenu.visibleMenu)

    const toggleVisibleMenu = () => {
        dispatch(setVisibleMenu(true))
        document.body.style.overflow = 'hidden'
    }

    const closeLeftMenu = () => {
        dispatch(setVisibleMenu(false))
        document.body.style.overflow = 'auto'
    }

    const totalCount = useSelector(({ cart }) => cart.totalCount)

    return (
    <div>    
        <header className="header">
            <div className="header__container container">
                <button className="header__menu" onClick={() => toggleVisibleMenu()}>
                    <div className="header__menu-burger">
                        <span></span>
                    </div>
                    <span>Меню</span>
                </button>
                <Link to="/" className="header__logo">Logo</Link>
                <div className="header__search search">
                    <input type="text" className="search__input" placeholder='Я ищу...'/>
                    <button className="search__btn"><FontAwesomeIcon icon={faSearch} /></button>
                </div>
                <div className="header__contacts">
                    <a href="" className="header__contacts-link"><FontAwesomeIcon className="header__contacts-icon" icon={faTelegram} /></a>
                    <a href="" className="header__contacts-link"><FontAwesomeIcon className="header__contacts-icon" icon={faInstagram} /></a>
                    <div className="header__numbers">
                        <span className="header__number header__number_label" onClick={toggleVisiblePopup} ref={numRef}>
                            {numbers[0]}<FontAwesomeIcon className={classNames("header__number-icon", visiblePopup ? 'open' : '')}  icon={faSortDown} />
                        </span>
                        <div className={classNames("header__numbers-list", visiblePopup ? 'open' : '')}>
                            {numbers.map((num, index) => (
                                <a href={`tel:${num}`} className="header__number" key={`${num}_${index}`}>{num}</a>
                            ))}
                        </div>
                    </div>
                </div>
                <Link className="header__cart" to="/checkout">
                    <FontAwesomeIcon className="header__cart-icon" icon={faShoppingCart} />
                    <div className={classNames("header__cart-amount", totalCount ? "active" : "")}>{totalCount}</div>
                </Link>
            </div>
        </header>

        <div className={classNames("scroll-top", showScrollTop ? 'active' : '')} onClick={() => scrollTop()} ref={scrollTopRef}>
            <FontAwesomeIcon icon={faArrowCircleUp} />
        </div>

        <LeftMenu isActive={visibleMenu}/>

        <div onClick={() => closeLeftMenu()} className={classNames("fade", visibleMenu ? "active" : "")}></div>
    </div>
    )
}

export default Header;