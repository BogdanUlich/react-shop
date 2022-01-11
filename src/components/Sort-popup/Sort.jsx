import React, { useRef } from "react";
import { faSortDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react/cjs/react.development"

function Sort() {

    const [visiblePopup, setVisiblePopup] = useState(false)

    const sortRef = useRef()

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
            <div className="sort__label" onClick={toggleVisiblePopup}><FontAwesomeIcon className="sort__icon" icon={faSortDown} />Сортировка по:<span>популярности</span></div>
            {visiblePopup && 
            <ul className="sort__popup">
                <li className="sort__link active">популярности</li>
                <li className="sort__link">цене</li>
                <li className="sort__link">алфавиту</li>
            </ul>
            }
        </div>
    )
}

export default Sort