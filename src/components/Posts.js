import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {

    componentDidMount() {
        // Take state from state tree and add to props
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        // actually show the posts grabbed in a view
        const postData = this.props.posts.map(post => (
            <div key ={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        )); 
        return (
            <div>
                <h1>Posts</h1>
                {/* use view */}
                {postData}
            </div>
        )
    }
}

// Make it so react won't properly load component without props
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    // use what you set in reducer, where the mapping occurs
    posts: state.posts.items,
    newPost: state.posts.item
})

// Redux Specific export using connect
export default connect(mapStateToProps, { fetchPosts })(Posts);
