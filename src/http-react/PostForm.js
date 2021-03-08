import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log((response));
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <label>UserId</label>
                <div>
                    <input type='text' name='userId' value={userId} onChange={this.changeHandler} />
                </div>
                <label>Title</label>
                <div>
                    <input type='text' name='title' value={title} onChange={this.changeHandler} />
                </div>
                <label>Body</label>
                <div>
                    <input type='text' name='body' value={body} onChange={this.changeHandler} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default PostForm
