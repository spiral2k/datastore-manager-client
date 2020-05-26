import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { useSpring, animated } from 'react-spring'
import PropTypes from 'prop-types'

import './Terminal.scss'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Terminal = ({ strings }) => {
    const endRef = useRef(null)
    const [springProps, setSpringProps] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 100, tension: 200, friction: 300 } }))

    useEffect(() => {
        if (endRef.current.scrollIntoView) endRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' })
    }, [strings])

    return (
        <animated.div
            className="terminal-container"
            onMouseMove={({ clientX: x, clientY: y }) => setSpringProps({ xys: calc(x, y) })}
            onMouseLeave={() => setSpringProps({ xys: [0, 0, 1] })}
            style={{ transform: springProps.xys.interpolate(trans) }}
        >
            <>
                {strings.map((str, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={`${str.text}-${i}`} className="line">
                        <span>$ </span> <span style={{ color: str.color }}>{str.text}</span>
                    </div>
                ))}
                <span className="line" ref={endRef}>
                    $ <span className="blink"></span>
                </span>
            </>
        </animated.div>
    )
}

Terminal.propTypes = {
    strings: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const mapStateToProps = state => ({
    strings: state.terminal.strings,
})

export default connect(mapStateToProps)(Terminal)
