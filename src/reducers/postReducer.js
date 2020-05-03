//This is going to evaluate the actions that it receives such as fetching or creating new posts
//First bringing in the types that we have created for our actions
//Types basically define what type of action is this?

import { FETCH_POSTS, NEW_POST } from '../actions/types'
import { bindActionCreators } from 'redux'

//We need to have an inital state for the post reducer
//The items array is going to represent the post that come in from the actions
//The item object will represent the single post that we add 
//And in our action we are going to put the fetch request

const initialState = {
    items: [],
    item: {}
}

//This function evaluates what type we are dealing with
//Takes in the initial state and an action where the action has a type
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        //Since we are using json placeholder, so this doesn't directly add new item to the database
        //so we are just going to return the new item and then push and then push it into the post property
        //into the post component 
        case NEW_POST:
            //Here the payload is the single post
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}