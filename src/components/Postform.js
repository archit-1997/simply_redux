import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
//Now we are going to import the action create post from the postActions file in the actions folder
import { createPost } from '../actions/postActions'

class Postform extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: ""
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    //An onChange method always listens to an event parameter
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        //Prevent the default action of this event
        e.preventDefault()

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        //Call action for adding the new post
        //We are passing in the post object that we have created right above this
        this.props.createPost(post)

    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title : </label> <br />
                        <input
                            type='text'
                            name='title'
                            onChange={this.onChange}
                            value={this.state.title}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Body :</label> <br />
                        <textarea
                            name='body'
                            onChange={this.onChange}
                            value={this.state.body}
                        />
                    </div>
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(Postform)