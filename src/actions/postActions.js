import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
        console.log('Fetching...')
        const newLocal = 'https://jsonplaceholder.typicode.com/posts';
        fetch(newLocal)
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));

}