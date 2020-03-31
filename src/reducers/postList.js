const initialSate = {
    posts: [],
    postDetail: {}
}

const ReducerPost = (state = initialSate, action) => {
    switch (action.type) {
        case "GET_POSTS":
            return {...state, posts: action.payload.data}

        case "POST_DETAILS":
            return {...state, postDetail: action.payload.data}
        default:
            return state

    }
}

export default ReducerPost;