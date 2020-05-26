import React, { useEffect, useCallback } from 'react'
import Store from '@redux/store'

/* Components */
import Form from '@containers/Form/Form'
import HeaderText from '@components/HeaderText/HeaderText'
import Terminal from '@containers/Terminal/Terminal'
import Commands from '@components/Commands/Commands'

/* Actions */
import * as TerminalActions from '@reducers/terminal/actions'

import './App.scss'

const App = () => {
    const initTerminal = useCallback(() => {
        setTimeout(() => Store.dispatch(TerminalActions.setString({ text: 'Connecting...', color: '#69ff6f' })), 300)
        setTimeout(() => Store.dispatch(TerminalActions.setString({ text: 'Welcome to Datastore Manager!' })), 1000)
        setTimeout(() => Store.dispatch(TerminalActions.setString({ text: '--------------------------------' })), 1100)
        setTimeout(() => Store.dispatch(TerminalActions.setString({ text: 'Waiting for commands...' })), 1300)
    }, [])

    useEffect(() => {
        initTerminal()
    }, [initTerminal])

    return (
        <div className="app-page container">
            <HeaderText />
            <Form />
            <Terminal />
            <Commands />
        </div>
    )
}

export default App
