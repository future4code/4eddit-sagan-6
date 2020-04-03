const initialSate = {
    posts: [],
    postDetail: {},
    filter: undefined
}

const ReducerPost = (state = initialSate, action) => {
    switch (action.type) {
        case "GET_POSTS":
            return { ...state, posts: action.payload.data }

        case "POST_DETAILS":
            return { ...state, postDetail: action.payload.data }

        case "FILTER":
            const valueFilter = action.payload.valueFilter;
            if (valueFilter) {
                const postsFilter = state.posts.filter(post => {
                    return (post.text.toLowerCase().indexOf(valueFilter.toLowerCase()) > -1)
                })
                return { ...state, filter: postsFilter }
            } else {
                return { ...state, filter: undefined }
            }


        default:
            return state

    }
}

export default ReducerPost;