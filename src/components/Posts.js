import React, { Component } from 'react'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }
    // Grabs the Data, adds the JSON data fetched to state after component renders
    componentWillMount() {
        const newLocal = 'https://jsonplaceholder.typicode.com/posts';
        fetch(newLocal)
        .then(res => res.json())
        .then(data => this.setState({ posts: data }));
    }

    render() {
        // actually show the posts grabbed in a view
        const postData = this.state.posts.map(post => (
            <div key ={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        )); 
        return (
            <div>
                <h1>Posts</h1>
                {postData}
            </div>
        )
    }
}

export default Posts;
