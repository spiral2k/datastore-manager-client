import React from 'react'
import PropTypes from 'prop-types'

import './Input.scss'

const Input = ({ type, placeholder, value, onChange }) => (
    <input type={type} className="input" value={value} placeholder={placeholder} onChange={onChange} />
)

Input.propTypes = {
    type: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
}

Input.defaultProps = {
    onChange: () => {},
    type: 'text',
    placeholder: '',
}

export default Input
