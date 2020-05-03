//This action will fetch the post

import { FETCH_POSTS, NEW_POST } from './types'

//Each action is going to be a function that we will export

//thunk middleware allows us to make dispatch request directly so that we can make asynchronous requests
//dispatch is used whenever we want to send the data just like a promise
//We are dispatching the data to the reducer

// export function fetchPosts() {
//     return function (dispatch) {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             //Data fetched from the api is stored into the posts array
//             .then(posts => dispatch({
//                 type: FETCH_POSTS,
//                 payload: posts
//             }))
//     }
// }
//Same as the above function, just simplified using ES6
export const fetchPosts = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        //Data fetched from the api is stored into the posts array
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
}

//Now this function will create a new post , 
export const createPost = (postData) => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        //Here we have create the variable name post because we are going to add a single post
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }))
}
