import axios from 'axios';
import { baseUrl } from '../actions/index'
import { getPosts, getPostDetails } from './index';

export const likeDeslikePost = (number, id, namePage, filterPosts) => async dispatch => {
    try {
        const token = window.localStorage.getItem('token');
        await axios.put(`${baseUrl}posts/${id}/vote`, {
            "direction": number
        },
            {
                headers:
                {
                    'Content-Type': ' application/json',
                    'auth': token
                }
            }
        )
        namePage === 'userPage' ? dispatch(getPosts(filterPosts)) : dispatch(getPostDetails(id))
    }
    catch (error) {
        console.error(error.message)
    }
}

export const likeDeslikeComment = (number, id) => async dispatch => {
    try {
        const token = window.localStorage.getItem('token');
        const idPost = window.localStorage.getItem('id')
        await axios.put(`${baseUrl}posts/${idPost}/comment/${id}/vote`, {
            "direction": number
        },
            {
                headers:
                {
                    'Content-Type': ' application/json',
                    'auth': token
                }
            }
        )
        dispatch(getPostDetails(idPost))
    }
    catch (error) {
        console.error(error.message)
    }
}