import React from 'react'
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
    const getCallData = () => {
        switch (type) {
            case 'set':
                return `set?name=${name}&value=${value}`
            case 'get':
                return `get?name=${name}`
            case 'unset':
                return `unset?name=${name}`
            case 'undo':
                return `undo`
            case 'redo':
                return `redo`
            case 'numequalto':
                return `numequalto?value=${value}`
            case 'end':
                return `end`

            default:
                // handle error
                return null
        }
    }

    const handleSubmit = async () => {
        const callData = getCallData()

        dispatch(TerminalActions.setString(`Sending request: ${callData}`))
        setTimeout(() => dispatch(TerminalActions.setString(`Waiting for response...`)), 20)
        const data = await GAEApi.get(callData)
        dispatch(TerminalActions.setString(data))
    }

    return (
        <div className="form-container">
            <Select
                value={type}
                options={['set', 'get', 'unset', 'numequalto', 'undo', 'redo', 'end']}
                onChange={e => dispatch(FormActions.setValues({ type: e.target.value }))}
            />
            <Input placeholder="name" value={name} onChange={e => dispatch(FormActions.setValues({ name: e.target.value }))} />{' '}
            <Input placeholder="value" value={value} onChange={e => dispatch(FormActions.setValues({ value: e.target.value }))} />
            <Button text="Send" onClick={handleSubmit} />
        </div>
    )
}

Form.propTypes = {
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
