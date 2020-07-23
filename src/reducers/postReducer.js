import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {},
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log('Sent to Reducer from action');
            return {
                // Current State is Return for case of Get request
                ...state,
                items: action.payload
            }
        case NEW_POST:
            console.log('We got the new post!')
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}