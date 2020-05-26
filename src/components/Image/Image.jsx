import React from 'react'
import PropType from 'prop-types'

const Image = ({ src, className, alt }) => <img className={`img ${className}`} src={src} alt={alt} />

Image.propTypes = {
    src: PropType.string,
    className: PropType.string,
    alt: PropType.string,
}

Image.defaultProps = {
    src: '',
    className: '',
    alt: 'image',
}

export default Image
