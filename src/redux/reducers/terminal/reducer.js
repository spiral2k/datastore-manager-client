import Constants from './constants'

const initialState = {
    strings: [],
    timeout: 0,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case Constants.SET_NEW_TERMINAL_STRING: {
            return Object.assign({}, state, { strings: [...state.strings, payload] })
        }

        case Constants.RESET_TERMINAL_REDUCER: {
            return Object.assign({}, state, initialState)
        }

        default: {
            return state
        }
    }
}
