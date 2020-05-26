import React from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(/* error, errorInfo */) {
        // handle error
    }

    render() {
        const { children } = this.props
        const { hasError } = this.state

        if (hasError) {
            // fallback UI
        }

        return children
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.element.isRequired,
}

export default ErrorBoundary
