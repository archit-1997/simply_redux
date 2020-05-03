//This file is the store for our redux application
//Bring in the root reducer from the index.js file in the reducers folder

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const initialState = {}

//An array for middleware
const middleware = [thunk]

//This createStore method take in three arguments
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store
