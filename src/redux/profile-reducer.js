import {profileAPI} from '../api/api';

const ADD_NEW_POST = 'ADD-NEW-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 2},
        {id: 2, message: 'It`s my first post!', likesCount: 3}
    ],
    newPostText: 'text',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case ADD_NEW_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        case SET_USER_PROFILE:
                return {
                    ...state,
                    profile: action.profile
                }
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_NEW_POST})
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getProfileThunk = (userId) => (dispatch) => {
    if(!userId){
        userId = 2
    }
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })
}

export default profileReducer