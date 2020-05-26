import { combineReducers } from 'redux'

/* reducers */
import form from '@reducers/form/reducer'
import terminal from '@reducers/terminal/reducer'

const rootReducer = combineReducers({
    form,
    terminal,
})

export default rootReducer
