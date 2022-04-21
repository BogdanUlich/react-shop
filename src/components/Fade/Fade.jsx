import React from "react"
import PropTypes from "prop-types"

const Fade = ({ onClick, visibleFade }) => {
  return <div onClick={onClick} className={visibleFade ? "fade active" : "fade"}></div>
}

Fade.propTypes = {
  onClick: PropTypes.func,
  visibleFade: PropTypes.bool,
}

export default Fade
