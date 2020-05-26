import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

const Button = ({ text, onClick, className }) => {
    const handleClick = e => {
        e.preventDefault()
        onClick(e)
    }

    return (
        <button type="button" onClick={handleClick} className={`button ${className}`}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
}

Button.defaultProps = {
    text: 'no text',
    onClick: () => {},
    className: '',
}

export default Button
