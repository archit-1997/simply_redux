import React, { Component } from 'react'
import { connect } from 'react-redux' //connects our component to the redux store
import { fetchPosts } from '../actions/postActions'
import { PropTypes } from 'prop-types'

class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts()
    }

    //Being used to add the new post
    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            //We are using the unshift method to add the new post in the beginning
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render() {
        //This props.posts has been mapped from the function below mapstatetoProps 
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))

        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

//Proptypes is being defined as if in future some other person uses my code, then he can just open this component
//and get to know what props do we need to pass this function and what should be their respective types
//propTpyes is the property that is being used for typechecking
Posts.propTypes = {
    //fetchPots is actually a property and is a function
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

//We are using this function to map the new state properties returned from the reducer and update the state
const mapStateToProps = state => ({
    //Here state.posts is used because posts is the name of the post reducer which we have defined 
    //in the root reducer index.js file in the reducers
    //We want the items from our reducer 
    posts: state.posts.items,
    //This new post is coming from create post
    newPost: state.posts.item
})

//The first parameter maps the state to our properties
//The second parameter is the action i.e. the fetchPosts function 
export default connect(mapStateToProps, { fetchPosts })(Posts)