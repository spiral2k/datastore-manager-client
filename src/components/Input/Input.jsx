import React from 'react'
import PropTypes from 'prop-types'

import './Input.scss'

const Input = ({ type, placeholder, value, onChange, disabled }) => (
    <input type={type} className="input" value={value} placeholder={placeholder} disabled={disabled} onChange={onChange} />
)

Input.propTypes = {
    type: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}

Input.defaultProps = {
    onChange: () => {},
    type: 'text',
    placeholder: '',
    disabled: false,
}

export default Input
