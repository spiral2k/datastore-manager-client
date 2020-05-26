/* constants */
import Constants from './constants'

export const setString = string => ({ type: Constants.SET_NEW_TERMINAL_STRING, payload: string })

export const reset = () => ({ type: Constants.RESET_TERMINAL_REDUCER })
