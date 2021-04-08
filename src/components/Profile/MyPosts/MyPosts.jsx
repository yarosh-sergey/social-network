import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostCreator, updateNewPostText} from '../../../redux/profile-reducer';

const MyPosts = (props) => {

    let postElements = props.postsData.postsData.map(item => <Post message={item.message} likesCount={item.likesCount}/>)

    let addPost = () => {
        props.dispatch(addPostCreator())
    }

    let onChangeNewPostText = (e) => {
        let text = e.target.value
        props.dispatch(updateNewPostText(text))
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeNewPostText} value={props.postsData.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;
