import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'

import './HeaderText.scss'

const HeaderText = () => {
    const ref = useRef([])
    const [items, set] = useState([])
    const transitions = useTransition(items, null, {
        from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#000', fontSize: '0px' },
        enter: { opacity: 1, height: 80, innerHeight: 80, fontSize: '80px' },
        leave: [{ color: '#00' }, { innerHeight: 40 }],
        update: { color: '#f00', height: 80, fontSize: '80px', innerHeight: 80 },
    })

    const reset = useCallback(() => {
        ref.current.map(clearTimeout)
        ref.current = []
        set([])
        ref.current.push(setTimeout(() => set(['Datastore', 'Manager']), 300))
        ref.current.push(
            setTimeout(
                () =>
                    set([
                        'Datastore',
                        'Manager',
                        <span>
                            Built By{' '}
                            <a href="https://github/spiral2k" target="blank">
                                Meni
                            </a>
                        </span>,
                    ]),
                1000
            )
        )
        // ref.current.push(setTimeout(() => set(['Datastore', 'Manager', 'By Meni']), 4000))
    }, [])

    // eslint-disable-next-line no-void
    useEffect(() => void reset(), [])

    return (
        <div className="header-text-container">
            {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
                <animated.div className="header-text" key={key} style={rest}>
                    <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                </animated.div>
            ))}
        </div>
    )
}
export default HeaderText
