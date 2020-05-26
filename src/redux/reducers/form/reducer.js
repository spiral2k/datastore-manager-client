import Constants from './constants'

const initialState = {
    type: 'set',
    name: '',
    value: '',
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case Constants.SET_FORM_VALUES: {
            return Object.assign({}, state, payload)
        }

        case Constants.RESET_FORM_REDUCER: {
            return Object.assign({}, state, initialState)
        }

        default: {
            return state
        }
    }
}
