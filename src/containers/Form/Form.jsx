import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* API's */
import GAEApi from '@api/gae'

/* Components */
import Input from '@components/Input/Input'
import Button from '@components/Button/Button'
import Select from '@components/Select/Select'

/* Actions */
import * as FormActions from '@reducers/form/actions'
import * as TerminalActions from '@reducers/terminal/actions'

import './Form.scss'

function Form({ dispatch, type, name, value }) {
    const [disabled, setDisabled] = useState({ name: false, value: false })

    const getCallData = () => {
        switch (type) {
            case 'SET':
                return `set?name=${name}&value=${value}`
            case 'GET':
                return `get?name=${name}`
            case 'UNSET':
                return `unset?name=${name}`
            case 'UNDO':
                return `undo`
            case 'REDO':
                return `redo`
            case 'NUMEQUALTO':
                return `numequalto?value=${value}`
            case 'END':
                return `end`

            default:
                // handle error
                return null
        }
    }

    const handleSubmit = async () => {
        try {
            const callData = getCallData()

            dispatch(TerminalActions.setString({ text: `Sending request: ${callData}`, color: '#fdff9b' }))
            dispatch(TerminalActions.setString({ text: `Waiting for response...`, color: '#fdff9b' }))
            const data = await GAEApi.get(callData)

            dispatch(TerminalActions.setString({ text: data }))
        } catch (e) {
            setTimeout(() => dispatch(TerminalActions.setString({ text: `Error: Something went wrong.`, color: '#fb6c6c' })), 150)
        }
    }

    const handleTypeChange = e => {
        switch (e.target.value) {
            case 'SET':
                setDisabled({ name: false, value: false })
                break
            case 'GET':
                setDisabled({ name: false, value: true })
                break
            case 'UNSET':
                setDisabled({ name: false, value: true })
                break
            case 'UNDO':
                setDisabled({ name: true, value: true })
                break
            case 'REDO':
                setDisabled({ name: true, value: true })
                break
            case 'NUMEQUALTO':
                setDisabled({ name: true, value: false })
                break
            case 'END':
                setDisabled({ name: true, value: true })
                break

            default:
                // handle error
                return null
        }

        return dispatch(FormActions.setValues({ type: e.target.value }))
    }

    return (
        <div className="form-container">
            <Select value={type} options={['SET', 'GET', 'UNSET', 'NUMEQUALTO', 'UNDO', 'REDO', 'END']} onChange={handleTypeChange} />
            <Input
                placeholder="name"
                value={name}
                disabled={disabled.name}
                onChange={e => dispatch(FormActions.setValues({ name: e.target.value }))}
            />
            <Input
                placeholder="value"
                value={value}
                disabled={disabled.value}
                onChange={e => dispatch(FormActions.setValues({ value: e.target.value }))}
            />
            <Button text="Send" onClick={handleSubmit} />
        </div>
    )
}

Form.propTypes = {
    dispatch: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
    type: state.form.type,
    name: state.form.name,
    value: state.form.value,
})

export default connect(mapStateToProps)(Form)
