import * as type_blog from '../types/BlogType'

const initState = {
    blogs: [],
    loading: false
}

const blogReducer = (state = initState, action) => {
    switch (action.type) {
        case type_blog.LOAD_BLOGS:
            return {
                ...state,
                blogs: [ ...action.payload ],
                loading: action.loading
            }
    
        default:
            return state
    }
}

export default blogReducer