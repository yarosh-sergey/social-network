const ADD_NEW_POST = 'ADD-NEW-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


const profileReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        case ADD_NEW_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        default:
            return state
    }
}

export const addPostCreator = () => ({type: ADD_NEW_POST})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer