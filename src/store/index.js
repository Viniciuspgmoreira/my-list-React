import { createStore } from 'redux'
import accessReducer from './accessReducer'

const store = createStore(accessReducer)

export default store;