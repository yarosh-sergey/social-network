import {usersAPI} from '../api/api';


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'


let initialState = {
    users: [],
    totalCount: 25,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) =>{
    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId){
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
                totalCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users, totalCount) => ({type: SET_USERS, users, totalCount})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})
export const getUsersThunk = (pageSize, currentPage) =>{
    return (dispatch) =>{
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(pageSize, currentPage).then(data => {
            dispatch(setUsers(data.items, data.totalCount))
            dispatch(toggleIsFetching(false))
        })
    }
}
export const unfollowThunk = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    usersAPI.unfollow(userId).then(data => {
        if(data.resultCode === 0){
            dispatch(unfollow(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId))
    })
}
export const followThunk = (userId) => (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    usersAPI.follow(userId).then(data => {
        if(data.resultCode === 0){
            dispatch(follow(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId))
    })
}



export default usersReducer