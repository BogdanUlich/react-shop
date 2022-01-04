import React from 'react'
import classNames from 'classnames'

const Button = (props) => {
    return (
        <button className={classNames('btn-black', props.className)}>{props.children}</button>
    )
}

export default Button

