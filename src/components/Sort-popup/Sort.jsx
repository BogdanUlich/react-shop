import React, { useRef } from "react";
import { faSortDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react/cjs/react.development"
import classNames from "classnames";

function Sort({ items }) {

    const [visiblePopup, setVisiblePopup] = useState(false)
    const [activeItem, setActiveItem] = useState(0)

    const sortRef = useRef()

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    const handleOutsideClick = (e) => {
        if(!e.path.includes(sortRef.current)){
            setVisiblePopup(false)
        }
    }
    
    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, []) 

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup)
    }

    return(
        <div className="sort" ref={sortRef}>
            <div className="sort__label" onClick={toggleVisiblePopup}><FontAwesomeIcon className={classNames("sort__icon", visiblePopup ? 'open' : '' )} icon={faSortDown} />Сортировка по:<span>{items[activeItem].name}</span></div>
            {visiblePopup && 
            <ul className="sort__popup">
                {items &&
                    items.map((obj, index ) => (
                    <li className={classNames("sort__link" , activeItem === index ? 'active' : '')} 
                        key={`${obj.type}_${index}`} onClick={() => onSelectItem(index)}>
                        {obj.name}
                    </li>
                ))}
            </ul>
            }
        </div>
    )
}

export default Sort