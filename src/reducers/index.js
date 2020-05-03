//This file index.js is our root reducer
//In this file all we have to do is to combine all the reducers and we are going to need a function to do that
//We are going to bring in here the post reducer which is the same folder but in another file

import { combineReducers } from 'redux'
import postReducer from './postReducer'

//Pass in an object to the combine reducers
//Here we namespace the reducers as we want to send them to the store
export default combineReducers({

    //Here we are passing an object with the reducers and we can name the reducers 
    //Here posts is the name of the postReducer
    posts: postReducer
})