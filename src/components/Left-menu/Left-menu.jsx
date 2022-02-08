import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faHome, faSearch, faTimes} from '@fortawesome/free-solid-svg-icons'
import classNames from "classnames";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setVisibleMenu } from '../../redux/actions/leftMenu';

const LeftMenu = ({ isActive }) => {

    const dispatch = useDispatch()

    const closeMenu = () => {
        dispatch(setVisibleMenu(false))
    }

    return (
        <div className={classNames("left-menu", isActive ? "active" : "")}>
            <div className="left-menu__header">
                <Link className="left-menu__link" to="/"><FontAwesomeIcon icon={faHome} /> <span>Главная</span></Link>
                <span className="left-menu__close" onClick={() => closeMenu()}><FontAwesomeIcon icon={faTimes} /></span>
            </div>
            <div className="left-menu__body">
                <div className="left-menu__search search">
                    <input type="text" className="search__input" placeholder='Я ищу...'/>
                    <button className="search__btn"><FontAwesomeIcon icon={faSearch} /></button>
                </div>
                <div className="left-menu__contacts">
                    <a href="" className="left-menu__link"><FontAwesomeIcon icon={faPhoneAlt} /> <span>+380 (50) 300 00 00</span></a>
                    <a href="" className="left-menu__link"><FontAwesomeIcon icon={faPhoneAlt} /> <span>+380 (50) 300 00 00</span></a>
                    <a href="" className="left-menu__link"><FontAwesomeIcon icon={faPhoneAlt} /> <span>+380 (50) 300 00 00</span></a>
                </div>
            </div>
        </div>
    )
}

export default LeftMenu