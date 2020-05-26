import config from '@config'
import { createStore, applyMiddleware, compose } from 'redux'

/* reducers */
import rootReducer from '@reducers'

/* middlewares */
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middlewares = [thunk, config.isDev && logger].filter(Boolean)

const middleware = applyMiddleware(...middlewares)

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(rootReducer, reduxDevTools(middleware))
