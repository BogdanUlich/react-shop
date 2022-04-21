import React, { useRef } from "react"
import { faSortDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react/cjs/react.development"
import classNames from "classnames"
import { setSortBy } from "../../redux/actions/filters"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"

const Sort = React.memo(function SortPopup({ sortItems, activeSortType }) {
  const activelabel = sortItems.find((obj) => obj.type === activeSortType.type).name

  const [visiblePopup, setVisiblePopup] = useState(false)

  const sortRef = useRef()

  const dispatch = useDispatch()

  const onSelectItem = (type) => {
    dispatch(setSortBy(type))
    setVisiblePopup(false)
  }

  useEffect(() => {
    document.body.addEventListener("click", closePopup)
  }, [])

  const closePopup = (event) => {
    const path = event.path || (event.composedPath && event.composedPath())
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false)
    }
  }

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup)
  }

  return (
    <div className="sort">
      <div className="sort__label" ref={sortRef} onClick={toggleVisiblePopup}>
        <FontAwesomeIcon
          className={classNames("sort__icon", visiblePopup ? "open" : "")}
          icon={faSortDown}
        />
        Сортировка по:<span>{activelabel}</span>
      </div>
      {visiblePopup && (
        <ul className="sort__popup">
          {sortItems &&
            sortItems.map((obj) => (
              <li
                className={classNames(
                  "sort__link",
                  activeSortType.type === obj.type ? "active" : ""
                )}
                key={`${obj.type}`}
                onClick={() => onSelectItem(obj)}
              >
                {obj.name}
              </li>
            ))}
        </ul>
      )}
    </div>
  )
})

Sort.propTypes = {
  sortItems: PropTypes.object,
  activeSortType: PropTypes.string,
}

export default Sort
