const initialSate = []

const ReducerPost = (state = initialSate, action) => {
    switch (action.type) {
        case "GET_POSTS":
            return (action.payload.data,
                console.log(action.payload.data))
        default:
            return state

    }
}

export default ReducerPost