import React from 'react'
import PropTypes from 'prop-types'

import './Select.scss'

function Select({ options, value, onChange }) {
    return (
        <select value={value} onChange={onChange} className="select">
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
}

Select.defaultProps = {
    value: '',
    onChange: () => {},
}

export default Select
