import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


function Header() {
    return (
        <header className="header">
            <div className="header__container container">
            <button className="header__menu">
              <div className="header__menu-burger">
                  <span></span>
              </div>
              <span>Меню</span>
            </button>
            <a href="" className="header__logo">Logo</a>
            <div className="header__search">
                <input type="text" className="header__search-input" />
                <button className="header__search-btn">Поиск</button>
            </div>
            <div className="header__contacts">
                <a href="" className="header__contacts-link"><FontAwesomeIcon className="header__contacts-icon" icon={faTelegram} /></a>
                <a href="" className="header__contacts-link"><FontAwesomeIcon className="header__contacts-icon" icon={faInstagram} /></a>
                <div className="header__numbers" id="headerNumbers">
                    <a href="#" className="header__number">+380 (50) 200 00 00</a>
                    <div className="header__numbers-list">
                        <a href="" className="header__number">+380 (50) 200 00 00</a>
                        <a href="" className="header__number">+380 (50) 200 00 00</a>
                        <a href="" className="header__number">+380 (50) 200 00 00</a>
                    </div>
                </div>
            </div>
        <a href="" className="header__cart">
            <FontAwesomeIcon className="header__cart-icon" icon={faShoppingCart} />
          <div className="header__cart-amount">9</div>
        </a>
      </div>
    </header>
    )
}

export default Header;