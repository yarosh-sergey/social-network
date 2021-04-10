import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage

    let addPost = () => {
        props.store.dispatch(addPostCreator())
    }

    let onChangeNewPostText = (text) => {
        props.store.dispatch(updateNewPostTextCreator(text))
    }

    return (
        <MyPosts updateNewPostText={onChangeNewPostText} addPost={addPost} postsData={state.postsData} newPostText={state.newPostText}/>
    );
};

export default MyPostsContainer;
