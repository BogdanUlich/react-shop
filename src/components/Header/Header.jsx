import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSortDown, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react/cjs/react.development';
import classNames from 'classnames';
import { Link } from 'react-router-dom';


function Header({ numbers }) {

    const [visiblePopup, setVisiblePopup] = useState(false)

    const numRef = useRef()
    const scrollTopRef = useRef()
    const headerRef = useRef()
       
    useEffect(() => {
        document.body.addEventListener('click', closePopup)
    }, []) 

    useEffect(() => {
        window.addEventListener('scroll', showScrollTopArrow)
    }, []) 

    const showScrollTopArrow = () => {
        if(document.documentElement.scrollTop > 300){
            scrollTopRef.current.classList.add('active')
        }else{
            scrollTopRef.current.classList.remove('active')
        }
    }

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup)
    }

    const closePopup = (e) => {
        if(!e.path.includes(numRef.current)){
            setVisiblePopup(false)
        }
    }

    const scrollTop = () => {
        headerRef.current.scrollIntoView({ behavior: 'smooth'})
    }
    return (
    <div>    
        <header className="header" ref={headerRef}>
            <div className="header__container container">
                <button className="header__menu">
                <div className="header__menu-burger">
                    <span></span>
                </div>
                <span>Меню</span>
                </button>
                <Link to="/" className="header__logo">Logo</Link>
                <div className="header__search">
                    <input type="text" className="header__search-input" placeholder='Я ищу...'/>
                    <button className="header__search-btn">Поиск</button>
                </div>
                <div className="header__contacts">
                    <a href="" className="header__contacts-link"><FontAwesomeIcon className="header__contacts-icon" icon={faTelegram} /></a>
                    <a href="" className="header__contacts-link"><FontAwesomeIcon className="header__contacts-icon" icon={faInstagram} /></a>
                    <div className="header__numbers">
                        <a href="#" className="header__number header__number_label" onClick={toggleVisiblePopup} ref={numRef}>{numbers[0]}<FontAwesomeIcon className={classNames("header__number-icon", visiblePopup ? 'open' : '')}  icon={faSortDown} /></a>
                        <div className="header__numbers-list">
                            {visiblePopup &&
                                numbers.map((num, index) => (
                                    <a href={`tel:${num}`} className="header__number" key={`${num}_${index}`}>{num}</a>
                            ))}
                        </div>
                    </div>
                </div>
                <Link className="header__cart" to="/cart">
                    <FontAwesomeIcon className="header__cart-icon" icon={faShoppingCart} />
                    <div className="header__cart-amount">9</div>
                </Link>
            </div>
        </header>

        <div className="scroll-top" onClick={() => scrollTop()} ref={scrollTopRef}>
            <FontAwesomeIcon icon={faArrowCircleUp} />
        </div>
    </div>
    )
}

export default Header;