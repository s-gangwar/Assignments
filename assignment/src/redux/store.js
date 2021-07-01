import { createStore , applyMiddleware } from 'redux'
import {userReducer} from './user/userReducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'


const store = createStore(userReducer, composeWithDevTools(applyMiddleware(logger,thunk)))

export default store