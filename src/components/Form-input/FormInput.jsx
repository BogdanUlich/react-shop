import React from "react"
import PropTypes from "prop-types"

const Input = ({ type }) => {
  return <input type={type} />
}

Input.propTypes = {
  type: PropTypes.string,
}

export default Input
