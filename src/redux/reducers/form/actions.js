/* constants */
import Constants from './constants'

export const setValues = values => ({ type: Constants.SET_FORM_VALUES, payload: values })

export const reset = () => ({ type: Constants.RESET_FORM_REDUCER })
