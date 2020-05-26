import React, { useEffect, useCallback } from 'react'
import Store from '@redux/store'

/* Components */
import Form from '@containers/Form/Form'
import Image from '@components/Image/Image'
import Terminal from '@containers/Terminal/Terminal'

/* Actions */
import * as TerminalActions from '@reducers/terminal/actions'

import './App.scss'

const App = () => {
    const initTerminal = useCallback(() => {
        setTimeout(() => Store.dispatch(TerminalActions.setString('Connecting...')), 300)
        setTimeout(() => Store.dispatch(TerminalActions.setString('Welcome to the Datastore!')), 1000)
        setTimeout(() => Store.dispatch(TerminalActions.setString('--------------------------------')), 1100)
    }, [])

    useEffect(() => {
        initTerminal()
    }, [initTerminal])

    return (
        <div className="app-page container">
            <Image src="https://www.guidance.com/hs-fs/hubfs/ISP%20logo%20new.png" className="logo" />
            <Form />
            <Terminal />
        </div>
    )
}

export default App
